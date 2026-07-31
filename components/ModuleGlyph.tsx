/**
 * Illustrations for the seven platform modules.
 *
 * These sit in the Platform page's photo slots. They are drawn rather than
 * photographed on purpose: the modules describe software behaviour — channel
 * sync, automated replies, repeat-guest campaigns — and a stock photograph of
 * a laptop would say nothing about any of it.
 *
 * All seven share one visual language: a floating paper panel on the warm
 * gradient, ink for structure, kokum for whatever the module actually does.
 */

const VIEW = "0 0 800 600";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox={VIEW}
      fill="none"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <filter id="mg-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="14"
            floodColor="#1a1512"
            floodOpacity="0.16"
          />
        </filter>
        <filter id="mg-shadow-sm" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="8"
            floodColor="#1a1512"
            floodOpacity="0.14"
          />
        </filter>
      </defs>
      {children}
    </svg>
  );
}

/** A horizontal ink rule standing in for a line of text. */
function TextLine({
  x,
  y,
  w,
  h = 12,
  o = 0.16,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  o?: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={h / 2}
      className="fill-ink"
      fillOpacity={o}
    />
  );
}

/* ─────────────────────────────── Website ─────────────────────────────────── */

function Website() {
  return (
    <Frame>
      <g filter="url(#mg-shadow)">
        <rect
          x="110"
          y="95"
          width="580"
          height="410"
          rx="20"
          className="fill-paper"
        />
      </g>
      {/* browser chrome */}
      <rect
        x="110"
        y="95"
        width="580"
        height="54"
        rx="20"
        className="fill-paper-2"
      />
      <rect x="110" y="129" width="580" height="20" className="fill-paper-2" />
      <circle cx="142" cy="122" r="7" className="fill-ink" fillOpacity="0.15" />
      <circle cx="166" cy="122" r="7" className="fill-ink" fillOpacity="0.15" />
      <circle cx="190" cy="122" r="7" className="fill-ink" fillOpacity="0.15" />
      <rect
        x="222"
        y="110"
        width="300"
        height="24"
        rx="12"
        className="fill-ink"
        fillOpacity="0.07"
      />
      {/* hero image block */}
      <rect
        x="142"
        y="180"
        width="330"
        height="180"
        rx="14"
        className="fill-palm"
        fillOpacity="0.28"
      />
      <circle cx="200" cy="228" r="18" className="fill-paper" fillOpacity="0.6" />
      <path
        d="M142 330l70-58 58 46 52-38 90 70v10H142z"
        className="fill-palm"
        fillOpacity="0.45"
      />
      <TextLine x={142} y={384} w={250} />
      <TextLine x={142} y={410} w={180} o={0.1} />
      {/* booking card */}
      <g filter="url(#mg-shadow-sm)">
        <rect
          x="500"
          y="180"
          width="160"
          height="240"
          rx="14"
          className="fill-paper"
        />
      </g>
      <TextLine x={522} y={204} w={80} h={10} />
      <rect
        x="522"
        y="230"
        width="116"
        height="34"
        rx="8"
        className="fill-ink"
        fillOpacity="0.06"
      />
      <rect
        x="522"
        y="276"
        width="116"
        height="34"
        rx="8"
        className="fill-ink"
        fillOpacity="0.06"
      />
      <rect
        x="522"
        y="330"
        width="116"
        height="40"
        rx="20"
        className="fill-kokum"
      />
      <rect
        x="552"
        y="346"
        width="56"
        height="8"
        rx="4"
        className="fill-paper"
        fillOpacity="0.9"
      />
      <TextLine x={540} y={390} w={80} h={8} o={0.12} />
    </Frame>
  );
}

/* ──────────────────────────────── Social ─────────────────────────────────── */

function Social() {
  return (
    <Frame>
      {/* back cards, fanned */}
      <g filter="url(#mg-shadow-sm)" transform="rotate(-8 300 300)">
        <rect
          x="150"
          y="150"
          width="250"
          height="310"
          rx="18"
          className="fill-paper"
          fillOpacity="0.55"
        />
      </g>
      <g filter="url(#mg-shadow-sm)" transform="rotate(-4 330 300)">
        <rect
          x="200"
          y="140"
          width="250"
          height="310"
          rx="18"
          className="fill-paper"
          fillOpacity="0.8"
        />
      </g>
      {/* front card */}
      <g filter="url(#mg-shadow)">
        <rect
          x="260"
          y="128"
          width="290"
          height="345"
          rx="18"
          className="fill-paper"
        />
      </g>
      <circle cx="292" cy="162" r="14" className="fill-kokum" fillOpacity="0.8" />
      <TextLine x={316} y={155} w={90} h={9} />
      <TextLine x={316} y={170} w={54} h={7} o={0.1} />
      <rect
        x="282"
        y="192"
        width="246"
        height="164"
        rx="12"
        className="fill-palm"
        fillOpacity="0.3"
      />
      <path
        d="M282 330l52-44 44 34 40-30 110 62v4H282z"
        className="fill-palm"
        fillOpacity="0.45"
      />
      <circle cx="330" cy="232" r="15" className="fill-paper" fillOpacity="0.65" />
      {/* heart + comment */}
      <path
        d="M292 384c0-9 7-15 15-15 5 0 9 2 11 6 2-4 6-6 11-6 8 0 15 6 15 15 0 12-16 21-26 28-10-7-26-16-26-28z"
        className="fill-kokum"
      />
      <rect
        x="358"
        y="378"
        width="26"
        height="20"
        rx="6"
        className="fill-ink"
        fillOpacity="0.16"
      />
      <TextLine x={282} y={424} w={200} h={9} o={0.13} />
      <TextLine x={282} y={444} w={140} h={9} o={0.09} />
      {/* scheduled pill */}
      <g filter="url(#mg-shadow-sm)">
        <rect
          x="500"
          y="392"
          width="150"
          height="48"
          rx="24"
          className="fill-ink"
        />
      </g>
      <circle cx="528" cy="416" r="9" className="fill-kokum" />
      <rect
        x="546"
        y="411"
        width="82"
        height="10"
        rx="5"
        className="fill-paper"
        fillOpacity="0.85"
      />
    </Frame>
  );
}

/* ─────────────────────────────── Enquiries ───────────────────────────────── */

function Enquiries() {
  const sources = [130, 226, 322, 418];
  return (
    <Frame>
      {/* channels on the left */}
      {sources.map((y, i) => (
        <g key={y}>
          <g filter="url(#mg-shadow-sm)">
            <rect
              x="70"
              y={y}
              width="150"
              height="62"
              rx="14"
              className="fill-paper"
            />
          </g>
          <circle
            cx="102"
            cy={y + 31}
            r="12"
            className={i % 2 === 0 ? "fill-kokum" : "fill-palm"}
            fillOpacity="0.85"
          />
          <TextLine x={124} y={y + 20} w={72} h={8} />
          <TextLine x={124} y={y + 36} w={48} h={7} o={0.1} />
          {/* converging line */}
          <path
            d={`M220 ${y + 31} C 320 ${y + 31}, 340 300, 440 300`}
            className="stroke-ink"
            strokeOpacity="0.22"
            strokeWidth="3"
            strokeDasharray="7 8"
            fill="none"
          />
        </g>
      ))}
      {/* unified inbox */}
      <g filter="url(#mg-shadow)">
        <rect
          x="440"
          y="150"
          width="270"
          height="300"
          rx="18"
          className="fill-paper"
        />
      </g>
      <rect
        x="440"
        y="150"
        width="270"
        height="56"
        rx="18"
        className="fill-ink"
      />
      <rect x="440" y="188" width="270" height="18" className="fill-ink" />
      <rect
        x="466"
        y="172"
        width="100"
        height="11"
        rx="5.5"
        className="fill-paper"
        fillOpacity="0.9"
      />
      <circle cx="684" cy="178" r="12" className="fill-kokum" />
      {[228, 292, 356].map((y) => (
        <g key={y}>
          <circle cx="472" cy={y + 22} r="11" className="fill-kokum" fillOpacity="0.3" />
          <TextLine x={494} y={y + 12} w={130} h={9} />
          <TextLine x={494} y={y + 30} w={90} h={7} o={0.1} />
          <rect
            x="466"
            y={y + 50}
            width="220"
            height="1.5"
            className="fill-ink"
            fillOpacity="0.08"
          />
        </g>
      ))}
      {/* instant reply badge */}
      <g filter="url(#mg-shadow-sm)">
        <rect
          x="596"
          y="410"
          width="126"
          height="44"
          rx="22"
          className="fill-kokum"
        />
      </g>
      <path
        d="M628 424l-10 14h9l-4 10 12-15h-9z"
        className="fill-paper"
        fillOpacity="0.95"
      />
      <rect
        x="648"
        y="427"
        width="56"
        height="9"
        rx="4.5"
        className="fill-paper"
        fillOpacity="0.85"
      />
    </Frame>
  );
}

/* ─────────────────────────────── WhatsApp ────────────────────────────────── */

function WhatsApp() {
  return (
    <Frame>
      <g filter="url(#mg-shadow)">
        <rect
          x="230"
          y="80"
          width="340"
          height="440"
          rx="34"
          className="fill-paper"
        />
      </g>
      {/* header */}
      <rect
        x="230"
        y="80"
        width="340"
        height="76"
        rx="34"
        className="fill-palm"
      />
      <rect x="230" y="122" width="340" height="34" className="fill-palm" />
      <circle cx="278" cy="120" r="18" className="fill-paper" fillOpacity="0.85" />
      <rect
        x="308"
        y="108"
        width="110"
        height="11"
        rx="5.5"
        className="fill-paper"
        fillOpacity="0.9"
      />
      <rect
        x="308"
        y="126"
        width="64"
        height="8"
        rx="4"
        className="fill-paper"
        fillOpacity="0.55"
      />
      {/* incoming */}
      <rect
        x="256"
        y="186"
        width="180"
        height="58"
        rx="16"
        className="fill-ink"
        fillOpacity="0.07"
      />
      <TextLine x={274} y={202} w={130} h={9} />
      <TextLine x={274} y={220} w={90} h={9} o={0.1} />
      {/* outgoing */}
      <rect
        x="332"
        y="262"
        width="212"
        height="76"
        rx="16"
        className="fill-palm"
        fillOpacity="0.25"
      />
      <TextLine x={352} y={280} w={168} h={9} o={0.22} />
      <TextLine x={352} y={298} w={132} h={9} o={0.16} />
      <path
        d="M492 322l6 6 12-13M506 322l6 6 12-13"
        className="stroke-palm"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* incoming */}
      <rect
        x="256"
        y="356"
        width="150"
        height="46"
        rx="16"
        className="fill-ink"
        fillOpacity="0.07"
      />
      <TextLine x={274} y={374} w={106} h={9} />
      {/* upsell card */}
      <g filter="url(#mg-shadow-sm)">
        <rect
          x="332"
          y="418"
          width="212"
          height="66"
          rx="16"
          className="fill-paper"
        />
      </g>
      <rect
        x="348"
        y="434"
        width="34"
        height="34"
        rx="10"
        className="fill-kokum"
        fillOpacity="0.85"
      />
      <TextLine x={394} y={438} w={110} h={9} />
      <rect
        x="394"
        y="456"
        width="70"
        height="16"
        rx="8"
        className="fill-kokum"
        fillOpacity="0.18"
      />
    </Frame>
  );
}

/* ──────────────────────────────── OTA ────────────────────────────────────── */

function Ota() {
  const spokes = [
    { x: 636, y: 150 },
    { x: 690, y: 258 },
    { x: 660, y: 372 },
    { x: 560, y: 452 },
    { x: 430, y: 470 },
  ];
  return (
    <Frame>
      {/* connections */}
      {spokes.map((s) => (
        <path
          key={`${s.x}-${s.y}`}
          d={`M270 300 C ${(270 + s.x) / 2} 300, ${(270 + s.x) / 2} ${s.y}, ${s.x - 8} ${s.y}`}
          className="stroke-ink"
          strokeOpacity="0.2"
          strokeWidth="3"
          strokeDasharray="7 8"
          fill="none"
        />
      ))}
      {/* channel pills */}
      {spokes.map((s, i) => (
        <g key={`pill-${s.x}`}>
          <g filter="url(#mg-shadow-sm)">
            <rect
              x={s.x - 8}
              y={s.y - 26}
              width="132"
              height="52"
              rx="26"
              className="fill-paper"
            />
          </g>
          <circle
            cx={s.x + 20}
            cy={s.y}
            r="11"
            className={i % 2 === 0 ? "fill-kokum" : "fill-palm"}
            fillOpacity="0.85"
          />
          <rect
            x={s.x + 40}
            y={s.y - 5}
            width="66"
            height="10"
            rx="5"
            className="fill-ink"
            fillOpacity="0.16"
          />
        </g>
      ))}
      {/* the single source of truth */}
      <g filter="url(#mg-shadow)">
        <rect
          x="90"
          y="196"
          width="200"
          height="208"
          rx="20"
          className="fill-paper"
        />
      </g>
      <rect
        x="90"
        y="196"
        width="200"
        height="52"
        rx="20"
        className="fill-kokum"
      />
      <rect x="90" y="230" width="200" height="18" className="fill-kokum" />
      <rect
        x="114"
        y="216"
        width="88"
        height="11"
        rx="5.5"
        className="fill-paper"
        fillOpacity="0.9"
      />
      <TextLine x={114} y={274} w={150} h={11} />
      <TextLine x={114} y={300} w={110} h={11} o={0.1} />
      <rect
        x="114"
        y="330"
        width="152"
        height="46"
        rx="12"
        className="fill-ink"
        fillOpacity="0.06"
      />
      <rect
        x="130"
        y="346"
        width="60"
        height="14"
        rx="7"
        className="fill-kokum"
        fillOpacity="0.7"
      />
      <circle cx="270" cy="300" r="14" className="fill-kokum" />
      <circle cx="270" cy="300" r="24" className="stroke-kokum" strokeWidth="2" strokeOpacity="0.35" />
    </Frame>
  );
}

/* ─────────────────────────────── Bookings ────────────────────────────────── */

function Bookings() {
  const cols = 7;
  const rows = 4;
  const cw = 72;
  const ch = 62;
  const x0 = 154;
  const y0 = 214;
  const filled = new Set([3, 4, 9, 15, 16, 17, 22]);

  return (
    <Frame>
      <g filter="url(#mg-shadow)">
        <rect
          x="110"
          y="110"
          width="580"
          height="390"
          rx="20"
          className="fill-paper"
        />
      </g>
      <rect
        x="110"
        y="110"
        width="580"
        height="62"
        rx="20"
        className="fill-ink"
      />
      <rect x="110" y="152" width="580" height="20" className="fill-ink" />
      <rect
        x="146"
        y="134"
        width="120"
        height="12"
        rx="6"
        className="fill-paper"
        fillOpacity="0.9"
      />
      <circle cx="628" cy="141" r="11" className="fill-kokum" />
      {/* weekday ticks */}
      {Array.from({ length: cols }).map((_, c) => (
        <rect
          key={`h-${c}`}
          x={x0 + c * cw + 14}
          y={190}
          width="26"
          height="7"
          rx="3.5"
          className="fill-ink"
          fillOpacity="0.14"
        />
      ))}
      {/* day cells */}
      {Array.from({ length: rows * cols }).map((_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const isFilled = filled.has(i);
        return (
          <rect
            key={i}
            x={x0 + c * cw}
            y={y0 + r * ch}
            width={cw - 12}
            height={ch - 12}
            rx="10"
            className={isFilled ? "fill-kokum" : "fill-ink"}
            fillOpacity={isFilled ? 0.22 : 0.05}
          />
        );
      })}
      {/* a long stay spanning most of a week */}
      <rect
        x={x0 + 2}
        y={y0 + 2 * ch + 12}
        width={cw * 5 - 16}
        height="26"
        rx="13"
        className="fill-kokum"
      />
      <rect
        x={x0 + 18}
        y={y0 + 2 * ch + 20}
        width="90"
        height="9"
        rx="4.5"
        className="fill-paper"
        fillOpacity="0.85"
      />
    </Frame>
  );
}

/* ─────────────────────────────── Loyalty ─────────────────────────────────── */

function Loyalty() {
  return (
    <Frame>
      {/* return arc */}
      <path
        d="M400 168a132 132 0 1 1-124 176"
        className="stroke-kokum"
        strokeOpacity="0.35"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10 12"
        fill="none"
      />
      <path
        d="M262 322l14 26 28-12"
        className="stroke-kokum"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* guest card */}
      <g filter="url(#mg-shadow)">
        <rect
          x="272"
          y="216"
          width="256"
          height="176"
          rx="20"
          className="fill-paper"
        />
      </g>
      <circle cx="326" cy="270" r="24" className="fill-kokum" fillOpacity="0.85" />
      <path
        d="M326 262a8 8 0 1 0 0-1zM310 288c3-8 9-12 16-12s13 4 16 12z"
        className="fill-paper"
        fillOpacity="0.9"
      />
      <TextLine x={366} y={256} w={112} h={11} />
      <TextLine x={366} y={276} w={72} h={9} o={0.1} />
      {/* stars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${300 + i * 34} 330l5.6 11.4 12.6 1.8-9.1 8.9 2.2 12.5-11.3-5.9-11.3 5.9 2.2-12.5-9.1-8.9 12.6-1.8z`}
          className="fill-kokum"
          fillOpacity={i === 4 ? 0.3 : 0.9}
        />
      ))}
      {/* returning guests */}
      {[
        { x: 168, y: 190 },
        { x: 610, y: 214 },
        { x: 596, y: 400 },
      ].map((p, i) => (
        <g key={p.x}>
          <g filter="url(#mg-shadow-sm)">
            <circle cx={p.x} cy={p.y} r="30" className="fill-paper" />
          </g>
          <circle
            cx={p.x}
            cy={p.y - 7}
            r="9"
            className={i === 1 ? "fill-palm" : "fill-kokum"}
            fillOpacity="0.75"
          />
          <path
            d={`M${p.x - 14} ${p.y + 16}c3-9 8-13 14-13s11 4 14 13z`}
            className={i === 1 ? "fill-palm" : "fill-kokum"}
            fillOpacity="0.75"
          />
        </g>
      ))}
      {/* repeat badge */}
      <g filter="url(#mg-shadow-sm)">
        <rect
          x="316"
          y="420"
          width="168"
          height="48"
          rx="24"
          className="fill-ink"
        />
      </g>
      <path
        d="M348 436a12 12 0 1 0 4-9"
        className="stroke-kokum"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x="378"
        y="439"
        width="82"
        height="10"
        rx="5"
        className="fill-paper"
        fillOpacity="0.85"
      />
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
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <Glyph />
    </div>
  );
}
