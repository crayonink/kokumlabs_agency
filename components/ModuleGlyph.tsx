/**
 * Illustrations for the seven platform modules — maximalist.
 *
 * Drawn, not photographed: the modules describe software behaviour, and a stock
 * photograph of a laptop would say nothing about any of it.
 *
 * The language is dense and ornamental, borrowing from the azulejo tilework and
 * jaali screens of the Konkan coast — the same world the Fontainhas photograph
 * on the mid-term page comes from. Every panel is a tiled ground, a patterned
 * border, corner rosettes and botanical flourishes, with the module's actual
 * function carried in kokum at the centre.
 *
 * Palette: kokum, cobalt, ochre, terracotta, palm.
 *
 * SVG ids are global to the document and all seven render on one page, so every
 * pattern and gradient id is prefixed per module.
 */

/* ───────────────────────────── Shared ornament ───────────────────────────── */

function Defs({ p }: { p: string }) {
  return (
    <defs>
      {/* azulejo-ish four-petal tile */}
      <pattern
        id={`${p}-tile`}
        width="48"
        height="48"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M24 6c5 9 9 13 18 18-9 5-13 9-18 18-5-9-9-13-18-18 9-5 13-9 18-18z"
          className="fill-cobalt"
          fillOpacity="0.16"
        />
        <circle cx="0" cy="0" r="3" className="fill-kokum" fillOpacity="0.18" />
        <circle cx="48" cy="0" r="3" className="fill-kokum" fillOpacity="0.18" />
        <circle cx="0" cy="48" r="3" className="fill-kokum" fillOpacity="0.18" />
        <circle cx="48" cy="48" r="3" className="fill-kokum" fillOpacity="0.18" />
      </pattern>

      {/* fine jaali lattice */}
      <pattern
        id={`${p}-jaali`}
        width="26"
        height="26"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M13 0v26M0 13h26"
          className="stroke-ink"
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />
        <circle cx="13" cy="13" r="4" className="fill-ochre" fillOpacity="0.3" />
      </pattern>

      {/* dense chevron band for borders */}
      <pattern
        id={`${p}-chev`}
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 16l11-10 11 10"
          className="stroke-terracotta"
          strokeOpacity="0.55"
          strokeWidth="3"
          fill="none"
        />
      </pattern>

      {/* stripe band */}
      <pattern
        id={`${p}-stripe`}
        width="14"
        height="14"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <rect width="7" height="14" className="fill-ochre" fillOpacity="0.4" />
      </pattern>
    </defs>
  );
}

/** Eight-point rosette, the recurring corner motif. */
function Rosette({
  x,
  y,
  r = 26,
  className = "fill-kokum",
  o = 0.8,
}: {
  x: number;
  y: number;
  r?: number;
  className?: string;
  o?: number;
}) {
  const petals = Array.from({ length: 8 }, (_, i) => (i * 360) / 8);
  return (
    <g transform={`translate(${x} ${y})`} fillOpacity={o}>
      {petals.map((a) => (
        <ellipse
          key={a}
          rx={r * 0.32}
          ry={r}
          className={className}
          transform={`rotate(${a})`}
        />
      ))}
      <circle r={r * 0.3} className="fill-paper" />
      <circle r={r * 0.16} className={className} />
    </g>
  );
}

/** Palm frond flourish. */
function Frond({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
}) {
  const leaves = [-52, -34, -16, 16, 34, 52];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M0 0C10 -26 14 -54 12 -84"
        className="stroke-palm"
        strokeOpacity="0.75"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {leaves.map((a, i) => (
        <ellipse
          key={a}
          cx="0"
          cy={-22 - i * 11}
          rx="24"
          ry="7"
          className="fill-palm"
          fillOpacity="0.42"
          transform={`rotate(${a} 0 ${-22 - i * 11})`}
        />
      ))}
    </g>
  );
}

/** Patterned ground, border bands, corner rosettes — every panel gets these. */
function Frame({ p, children }: { p: string; children: React.ReactNode }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-line/70">
      <svg
        viewBox="0 0 800 600"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <Defs p={p} />

        {/* ground */}
        <rect width="800" height="600" className="fill-paper-2" />
        <rect width="800" height="600" fill={`url(#${p}-tile)`} />

        {/* outer chevron band */}
        <rect x="0" y="0" width="800" height="26" fill={`url(#${p}-chev)`} />
        <rect x="0" y="574" width="800" height="26" fill={`url(#${p}-chev)`} />
        <rect x="0" y="0" width="26" height="600" fill={`url(#${p}-stripe)`} />
        <rect x="774" y="0" width="26" height="600" fill={`url(#${p}-stripe)`} />

        {/* inner keyline */}
        <rect
          x="38"
          y="38"
          width="724"
          height="524"
          rx="18"
          className="stroke-kokum"
          strokeOpacity="0.5"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="48"
          y="48"
          width="704"
          height="504"
          rx="12"
          className="stroke-ink"
          strokeOpacity="0.16"
          strokeWidth="1.5"
          strokeDasharray="6 7"
          fill="none"
        />

        {/* corner rosettes */}
        <Rosette x={70} y={70} r={20} />
        <Rosette x={730} y={70} r={20} className="fill-cobalt" o={0.75} />
        <Rosette x={70} y={530} r={20} className="fill-cobalt" o={0.75} />
        <Rosette x={730} y={530} r={20} />

        {children}
      </svg>
    </div>
  );
}

/* ─────────────────────────────── Website ─────────────────────────────────── */

function Website() {
  const p = "web";
  return (
    <Frame p={p}>
      <Frond x={118} y={470} rotate={-18} scale={0.9} />
      <Frond x={686} y={470} rotate={18} scale={0.9} />

      <rect
        x="180"
        y="112"
        width="440"
        height="380"
        rx="20"
        className="fill-paper stroke-ink"
        strokeOpacity="0.3"
        strokeWidth="3"
      />
      <rect
        x="180"
        y="112"
        width="440"
        height="52"
        rx="20"
        className="fill-cobalt"
        fillOpacity="0.85"
      />
      <rect x="180" y="144" width="440" height="20" className="fill-cobalt" fillOpacity="0.85" />
      {[212, 236, 260].map((cx) => (
        <circle key={cx} cx={cx} cy="138" r="7" className="fill-paper" fillOpacity="0.8" />
      ))}
      <rect
        x="292"
        y="128"
        width="300"
        height="20"
        rx="10"
        className="fill-paper"
        fillOpacity="0.3"
      />

      {/* patterned hero block */}
      <rect x="212" y="192" width="376" height="150" rx="12" fill={`url(#${p}-jaali)`} />
      <rect
        x="212"
        y="192"
        width="376"
        height="150"
        rx="12"
        className="stroke-terracotta"
        strokeOpacity="0.6"
        strokeWidth="3"
        fill="none"
      />
      <Rosette x={400} y={267} r={38} className="fill-terracotta" o={0.85} />

      {[366, 396].map((y, i) => (
        <rect
          key={y}
          x="212"
          y={y}
          width={i === 0 ? 300 : 220}
          height="12"
          rx="6"
          className="fill-ink"
          fillOpacity={0.18 - i * 0.05}
        />
      ))}

      <rect x="212" y="430" width="220" height="46" rx="23" className="fill-kokum" />
      <rect
        x="248"
        y="447"
        width="148"
        height="12"
        rx="6"
        className="fill-paper"
        fillOpacity="0.9"
      />
      <Rosette x={520} y={453} r={22} className="fill-ochre" o={0.9} />
      <Rosette x={572} y={453} r={16} className="fill-palm" o={0.7} />
    </Frame>
  );
}

/* ──────────────────────────────── Social ─────────────────────────────────── */

function Social() {
  const p = "soc";
  const cards = [
    { x: 300, y: 96, w: 300, h: 180, rot: 9, fill: "fill-ochre", o: 0.35 },
    { x: 250, y: 130, w: 300, h: 210, rot: 5, fill: "fill-terracotta", o: 0.4 },
    { x: 200, y: 170, w: 300, h: 240, rot: 2, fill: "fill-cobalt", o: 0.35 },
  ];
  return (
    <Frame p={p}>
      <Frond x={112} y={520} rotate={-26} scale={0.8} />
      <Frond x={700} y={190} rotate={150} scale={0.7} />

      {cards.map((c) => (
        <g key={c.x} transform={`rotate(${c.rot} ${c.x + c.w / 2} ${c.y + c.h / 2})`}>
          <rect
            x={c.x}
            y={c.y}
            width={c.w}
            height={c.h}
            rx="16"
            className={`${c.fill} stroke-ink`}
            fillOpacity={c.o}
            strokeOpacity="0.22"
            strokeWidth="3"
          />
          <rect
            x={c.x + 14}
            y={c.y + 14}
            width={c.w - 28}
            height={c.h - 28}
            rx="10"
            fill={`url(#${p}-jaali)`}
          />
        </g>
      ))}

      {/* the post going out next */}
      <rect
        x="170"
        y="250"
        width="330"
        height="270"
        rx="18"
        className="fill-paper stroke-kokum"
        strokeWidth="4"
      />
      <rect x="192" y="272" width="286" height="120" rx="10" fill={`url(#${p}-stripe)`} />
      <Rosette x={335} y={332} r={34} className="fill-kokum" o={0.9} />
      <circle cx="216" cy="426" r="18" className="fill-cobalt" fillOpacity="0.8" />
      {[252, 288].map((x) => (
        <circle key={x} cx={x} cy="426" r="14" className="fill-ochre" fillOpacity="0.85" />
      ))}
      <path
        d="M330 414c0-11 9-19 19-19 7 0 13 3 15 8 2-5 8-8 15-8 10 0 19 8 19 19 0 16-22 28-34 37-12-9-34-21-34-37z"
        className="fill-kokum"
      />
      <rect x="192" y="466" width="240" height="12" rx="6" className="fill-ink" fillOpacity="0.16" />
      <rect x="192" y="490" width="160" height="12" rx="6" className="fill-ink" fillOpacity="0.11" />

      <Rosette x={588} y={430} r={30} className="fill-terracotta" o={0.85} />
      <Rosette x={648} y={492} r={20} className="fill-palm" o={0.7} />
    </Frame>
  );
}

/* ─────────────────────────────── Enquiries ───────────────────────────────── */

function Enquiries() {
  const p = "enq";
  const ys = [116, 190, 264, 338, 412, 486];
  const colours = [
    "fill-cobalt",
    "fill-ochre",
    "fill-terracotta",
    "fill-palm",
    "fill-cobalt",
    "fill-ochre",
  ];
  return (
    <Frame p={p}>
      {ys.map((y, i) => (
        <g key={y}>
          <path
            d={`M186 ${y} C 330 ${y}, 380 301, 508 301`}
            className="stroke-ink"
            strokeOpacity="0.24"
            strokeWidth="3"
            strokeDasharray="8 8"
            fill="none"
          />
          <circle
            cx="150"
            cy={y}
            r="30"
            className={`${colours[i]} stroke-ink`}
            fillOpacity="0.55"
            strokeOpacity="0.28"
            strokeWidth="3"
          />
          <circle cx="150" cy={y} r="13" className="fill-paper" fillOpacity="0.85" />
        </g>
      ))}

      {/* the single answer */}
      <circle cx="566" cy="301" r="112" fill={`url(#${p}-jaali)`} />
      <circle
        cx="566"
        cy="301"
        r="112"
        className="stroke-terracotta"
        strokeOpacity="0.5"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="566"
        cy="301"
        r="88"
        className="stroke-cobalt"
        strokeOpacity="0.45"
        strokeWidth="3"
        strokeDasharray="5 9"
        fill="none"
      />
      <Rosette x={566} y={301} r={62} className="fill-kokum" o={0.95} />
      <circle cx="566" cy="301" r="26" className="fill-paper" />
      <path
        d="M552 300l11 12 21-24"
        className="stroke-kokum"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Frond x={566} y={470} rotate={0} scale={0.7} />
    </Frame>
  );
}

/* ─────────────────────────────── WhatsApp ────────────────────────────────── */

function WhatsApp() {
  const p = "wa";
  return (
    <Frame p={p}>
      <Frond x={108} y={196} rotate={196} scale={0.7} />
      <Frond x={704} y={430} rotate={16} scale={0.75} />

      <rect x="150" y="92" width="300" height="92" rx="24" fill={`url(#${p}-jaali)`} />
      <rect
        x="150"
        y="92"
        width="300"
        height="92"
        rx="24"
        className="stroke-cobalt"
        strokeOpacity="0.55"
        strokeWidth="3"
        fill="none"
      />
      <rect x="178" y="120" width="200" height="13" rx="6.5" className="fill-ink" fillOpacity="0.2" />
      <rect x="178" y="146" width="140" height="13" rx="6.5" className="fill-ink" fillOpacity="0.14" />

      {/* the automatic reply */}
      <rect x="330" y="212" width="330" height="120" rx="26" className="fill-kokum" />
      <rect x="346" y="228" width="298" height="88" rx="18" fill={`url(#${p}-stripe)`} fillOpacity="0.5" />
      <rect x="368" y="248" width="230" height="14" rx="7" className="fill-paper" fillOpacity="0.85" />
      <rect x="368" y="276" width="170" height="14" rx="7" className="fill-paper" fillOpacity="0.6" />
      <path
        d="M574 306l9 9 17-18M598 306l9 9 17-18"
        className="stroke-paper"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <rect x="150" y="360" width="270" height="86" rx="24" fill={`url(#${p}-jaali)`} />
      <rect
        x="150"
        y="360"
        width="270"
        height="86"
        rx="24"
        className="stroke-terracotta"
        strokeOpacity="0.55"
        strokeWidth="3"
        fill="none"
      />
      <rect x="178" y="392" width="170" height="13" rx="6.5" className="fill-ink" fillOpacity="0.18" />

      {/* upsell */}
      <rect
        x="360"
        y="454"
        width="300"
        height="92"
        rx="22"
        className="fill-ochre stroke-ink"
        fillOpacity="0.5"
        strokeOpacity="0.24"
        strokeWidth="3"
      />
      <Rosette x={410} y={500} r={26} className="fill-kokum" o={0.9} />
      <rect x="452" y="482" width="170" height="13" rx="6.5" className="fill-ink" fillOpacity="0.22" />
      <rect x="452" y="508" width="110" height="13" rx="6.5" className="fill-ink" fillOpacity="0.15" />
    </Frame>
  );
}

/* ──────────────────────────────── OTA ────────────────────────────────────── */

function Ota() {
  const p = "ota";
  const nodes = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
    return {
      x: 400 + Math.cos(a) * 205,
      y: 300 + Math.sin(a) * 175,
      c: ["fill-cobalt", "fill-ochre", "fill-terracotta", "fill-palm"][i % 4],
    };
  });
  return (
    <Frame p={p}>
      <circle cx="400" cy="300" r="230" fill={`url(#${p}-jaali)`} fillOpacity="0.6" />
      {[230, 196, 162].map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="300"
          r={r}
          className={i % 2 === 0 ? "stroke-cobalt" : "stroke-terracotta"}
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeDasharray={i === 1 ? "6 10" : undefined}
          fill="none"
        />
      ))}

      {nodes.map((n) => (
        <path
          key={`l-${n.x.toFixed(0)}-${n.y.toFixed(0)}`}
          d={`M400 300L${n.x} ${n.y}`}
          className="stroke-ink"
          strokeOpacity="0.2"
          strokeWidth="3"
          strokeDasharray="7 8"
        />
      ))}
      {nodes.map((n) => (
        <g key={`n-${n.x.toFixed(0)}-${n.y.toFixed(0)}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r="34"
            className={`${n.c} stroke-ink`}
            fillOpacity="0.5"
            strokeOpacity="0.26"
            strokeWidth="3"
          />
          <circle cx={n.x} cy={n.y} r="15" className="fill-paper" fillOpacity="0.9" />
        </g>
      ))}

      <Rosette x={400} y={300} r={74} className="fill-kokum" o={0.95} />
      <circle cx="400" cy="300" r="34" className="fill-paper" />
      <Rosette x={400} y={300} r={20} className="fill-kokum" o={0.9} />
    </Frame>
  );
}

/* ─────────────────────────────── Bookings ────────────────────────────────── */

function Bookings() {
  const p = "bok";
  const cols = 7;
  const rows = 5;
  const cw = 84;
  const chh = 82;
  const x0 = 118;
  const y0 = 108;
  const tinted: Record<number, string> = {
    2: "fill-cobalt",
    5: "fill-ochre",
    8: "fill-terracotta",
    13: "fill-palm",
    18: "fill-cobalt",
    22: "fill-ochre",
    27: "fill-terracotta",
    31: "fill-palm",
    33: "fill-cobalt",
  };
  return (
    <Frame p={p}>
      {Array.from({ length: rows * cols }).map((_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const tint = tinted[i];
        return (
          <g key={i}>
            <rect
              x={x0 + c * cw}
              y={y0 + r * chh}
              width={cw - 14}
              height={chh - 14}
              rx="12"
              className={`${tint ?? "fill-paper"} stroke-ink`}
              fillOpacity={tint ? 0.45 : 0.75}
              strokeOpacity="0.2"
              strokeWidth="2.5"
            />
            {i % 3 === 0 && (
              <circle
                cx={x0 + c * cw + (cw - 14) / 2}
                cy={y0 + r * chh + (chh - 14) / 2}
                r="6"
                className="fill-ink"
                fillOpacity="0.14"
              />
            )}
          </g>
        );
      })}

      {/* the long stay, running across weeks */}
      <rect
        x={x0 + cw + 4}
        y={y0 + 2 * chh + 16}
        width={cw * 5 - 22}
        height="36"
        rx="18"
        className="fill-kokum"
      />
      <rect
        x={x0 + 4}
        y={y0 + 3 * chh + 16}
        width={cw * 4 - 22}
        height="36"
        rx="18"
        className="fill-kokum"
        fillOpacity="0.55"
      />
      <Rosette x={x0 + cw + 30} y={y0 + 2 * chh + 34} r={13} className="fill-paper" o={0.95} />
      <Rosette x={x0 + 30} y={y0 + 3 * chh + 34} r={13} className="fill-paper" o={0.9} />
    </Frame>
  );
}

/* ─────────────────────────────── Loyalty ─────────────────────────────────── */

function Loyalty() {
  const p = "loy";
  const guests = Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI * 2) / 10 - Math.PI / 2;
    return {
      x: 400 + Math.cos(a) * 208,
      y: 300 + Math.sin(a) * 180,
      c: ["fill-cobalt", "fill-ochre", "fill-terracotta", "fill-palm", "fill-kokum"][i % 5],
      r: i % 3 === 0 ? 26 : 19,
    };
  });
  return (
    <Frame p={p}>
      <circle cx="400" cy="300" r="238" fill={`url(#${p}-jaali)`} fillOpacity="0.55" />
      {[238, 208, 176, 146].map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="300"
          r={r}
          className={i % 2 === 0 ? "stroke-terracotta" : "stroke-cobalt"}
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeDasharray={i % 2 === 0 ? "5 10" : undefined}
          fill="none"
        />
      ))}

      {guests.map((g) => (
        <g key={`${g.x.toFixed(0)}-${g.y.toFixed(0)}`}>
          <circle
            cx={g.x}
            cy={g.y}
            r={g.r}
            className={`${g.c} stroke-ink`}
            fillOpacity="0.55"
            strokeOpacity="0.25"
            strokeWidth="3"
          />
          <circle cx={g.x} cy={g.y} r={g.r * 0.42} className="fill-paper" fillOpacity="0.9" />
        </g>
      ))}

      {/* the return */}
      <path
        d="M400 92a208 208 0 0 1 178 316"
        className="stroke-kokum"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M552 388l30 32 34-26"
        className="stroke-kokum"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <Rosette x={400} y={300} r={86} className="fill-kokum" o={0.95} />
      <circle cx="400" cy="300" r="42" className="fill-paper" />
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
        return (
          <circle
            key={i}
            cx={400 + Math.cos(a) * 24}
            cy={300 + Math.sin(a) * 24}
            r="7"
            className="fill-kokum"
          />
        );
      })}
    </Frame>
  );
}

/* ───────────────────────────────── Export ────────────────────────────────── */

const glyphs: Record<string, () => React.ReactElement> = {
  website: Website,
  social: Social,
  enquiries: Enquiries,
  whatsapp: WhatsApp,
  ota: Ota,
  bookings: Bookings,
  loyalty: Loyalty,
};

export default function ModuleGlyph({ slug }: { slug: string }) {
  const Glyph = glyphs[slug];
  if (!Glyph) return null;
  return <Glyph />;
}
