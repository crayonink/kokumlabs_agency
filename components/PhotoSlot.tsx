import Image from "next/image";

/**
 * A photography slot.
 *
 * Pass `src` (e.g. "/photos/hero.jpg" after dropping the file into /public/photos)
 * and it renders the real photograph. With no `src` it renders a warm abstract
 * placeholder that is designed to look intentional — the site is presentable
 * before you have shot a single frame.
 *
 * `caption` renders as an editorial caption beneath the frame and doubles as a
 * note of what photograph belongs here.
 */

type Tone = "dawn" | "clay" | "palm" | "dusk";

const tones: Record<Tone, string> = {
  // Soft morning light on a whitewashed wall
  dawn: "radial-gradient(120% 90% at 12% 8%, #fdf3e4 0%, transparent 55%), radial-gradient(100% 80% at 88% 22%, #f6dcc6 0%, transparent 60%), linear-gradient(155deg, #f3e3cf 0%, #e8cfb4 48%, #d9b795 100%)",
  // Terracotta, laterite, kokum
  clay: "radial-gradient(110% 85% at 82% 12%, #f7ded9 0%, transparent 58%), radial-gradient(95% 75% at 8% 82%, #b5586a 0%, transparent 62%), linear-gradient(160deg, #e6bfae 0%, #c98878 45%, #8c2437 100%)",
  // Coconut palm against water
  palm: "radial-gradient(115% 85% at 18% 12%, #eef2e4 0%, transparent 55%), radial-gradient(95% 80% at 85% 85%, #2f4a3a 0%, transparent 60%), linear-gradient(150deg, #dfe4d0 0%, #9db08c 45%, #3f5c4a 100%)",
  // Late evening, sea and sky
  dusk: "radial-gradient(120% 90% at 78% 10%, #f6e0cd 0%, transparent 52%), radial-gradient(100% 85% at 15% 88%, #3c3550 0%, transparent 62%), linear-gradient(165deg, #e8cdb8 0%, #a98a92 42%, #40384f 100%)",
};

type Props = {
  src?: string | null;
  alt: string;
  caption?: string;
  tone?: Tone;
  /** Tailwind aspect utility, e.g. "aspect-[4/5]". */
  aspect?: string;
  className?: string;
  priority?: boolean;
  rounded?: string;
};

export default function PhotoSlot({
  src,
  alt,
  caption,
  tone = "dawn",
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  rounded = "rounded-2xl",
}: Props) {
  return (
    <figure className={className}>
      <div
        className={`relative w-full overflow-hidden ${aspect} ${rounded} bg-paper-3 ring-1 ring-line/70`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0"
            style={{ backgroundImage: tones[tone] }}
          >
            {/* Grain, so the gradient reads as printed paper rather than CSS */}
            <div className="grain absolute inset-0 opacity-[0.18] mix-blend-overlay" />
            {/* A soft vignette to give the frame depth */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_55%,rgba(26,21,18,0.22)_100%)]" />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-[family-name:var(--font-display)] text-sm text-ink-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
