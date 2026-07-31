<#
    Batch-prepares photographs for the site.

    Usage:
        npm run photos

    Drop any number of .jpg / .jpeg / .png files into  photos-inbox/  then run
    the command above. Each one is resized so its longest edge is at most
    2000px, re-encoded as JPEG at quality 85, given a clean kebab-case name and
    written to  public/photos/ .

    Originals in photos-inbox/ are left untouched, and that folder is gitignored,
    so nothing oversized ever reaches the repository.

    Note: HEIC files (straight off an iPhone) are not readable here. Export or
    AirDrop them as JPEG first, or open and "Save As" on Windows Photos.
#>

param(
    [int]$MaxEdge = 2000,
    [int]$Quality = 85
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root    = Split-Path -Parent $PSScriptRoot
$inbox   = Join-Path $root 'photos-inbox'
$outDir  = Join-Path $root 'public\photos'

if (-not (Test-Path $inbox))  { New-Item -ItemType Directory -Path $inbox  -Force | Out-Null }
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

$files = Get-ChildItem -Path $inbox -File | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png)$' }

$heic = Get-ChildItem -Path $inbox -File | Where-Object { $_.Extension -match '^\.(heic|heif)$' }
if ($heic) {
    Write-Host "Skipping $($heic.Count) HEIC file(s) - convert to JPEG first:" -ForegroundColor Yellow
    $heic | ForEach-Object { Write-Host "   $($_.Name)" -ForegroundColor Yellow }
    Write-Host ""
}

if (-not $files) {
    Write-Host "Nothing to do. Put .jpg or .png files in  photos-inbox/  and run this again." -ForegroundColor Cyan
    Write-Host "   $inbox"
    exit 0
}

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
             Where-Object { $_.MimeType -eq 'image/jpeg' }

$totalBefore = 0
$totalAfter  = 0

Write-Host "Processing $($files.Count) photo(s)...`n" -ForegroundColor Cyan

foreach ($file in $files) {
    # my-lovely Photo.JPG  ->  my-lovely-photo.jpg
    $slug = [System.IO.Path]::GetFileNameWithoutExtension($file.Name).ToLower()
    $slug = ($slug -replace '[^a-z0-9]+', '-').Trim('-')
    $dest = Join-Path $outDir "$slug.jpg"

    $img = [System.Drawing.Image]::FromFile($file.FullName)
    try {
        # Honour the EXIF orientation flag, or phone shots come out sideways.
        if ($img.PropertyIdList -contains 274) {
            switch ($img.GetPropertyItem(274).Value[0]) {
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)  }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }

        $scale = [Math]::Min(1.0, $MaxEdge / [Math]::Max($img.Width, $img.Height))
        $w = [int][Math]::Round($img.Width  * $scale)
        $h = [int][Math]::Round($img.Height * $scale)

        $bmp = New-Object System.Drawing.Bitmap($w, $h)
        $g   = [System.Drawing.Graphics]::FromImage($bmp)
        try {
            $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $g.DrawImage($img, 0, 0, $w, $h)

            $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                [System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
            $bmp.Save($dest, $jpegCodec, $ep)
        }
        finally { $g.Dispose(); $bmp.Dispose() }
    }
    finally { $img.Dispose() }

    $before = $file.Length
    $after  = (Get-Item $dest).Length
    $note   = ''

    # A source already compressed harder than our quality setting would only be
    # made bigger, and slightly worse, by re-encoding. Keep the original then --
    # but only if it was a JPEG that we did not need to resize or rotate.
    if ($after -ge $before -and $file.Extension -match '^\.(jpg|jpeg)$' -and $scale -eq 1.0) {
        Copy-Item $file.FullName $dest -Force
        $after = (Get-Item $dest).Length
        $note  = '  (kept original - already smaller)'
    }

    $totalBefore += $before
    $totalAfter  += $after

    $ratio = if ($h -eq 0) { 0 } else { $w / $h }
    Write-Host ("  {0,-28} {1,5}x{2,-5} ratio {3:N2}  {4,6:N0} KB -> {5,5:N0} KB{6}" -f `
        "$slug.jpg", $w, $h, $ratio, ($before/1KB), ($after/1KB), $note)
}

Write-Host ""
Write-Host ("Done. {0:N0} KB -> {1:N0} KB  ({2:N0}% smaller)" -f `
    ($totalBefore/1KB), ($totalAfter/1KB), ((1 - $totalAfter/$totalBefore) * 100)) -ForegroundColor Green
Write-Host ""
Write-Host "Now map them in lib/site.ts under `photos`, for example:" -ForegroundColor Cyan
Write-Host '   heroProperty: "/photos/your-file-name.jpg",'
Write-Host ""
Write-Host "Slot shapes:" -ForegroundColor Cyan
Write-Host "   heroProperty  4:5 portrait     whoItsFor    4:5 portrait"
Write-Host "   aboutStory    4:5 portrait     midTermStay  4:5 portrait"
Write-Host "   module.*      4:3 landscape    founders     3:4 portrait"
