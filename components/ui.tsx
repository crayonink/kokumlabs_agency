import Link from "next/link";

/* ─────────────────────────────── Button ──────────────────────────────────── */

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap";

  const sizes = {
    md: "px-6 py-3 text-[0.9375rem]",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-ink text-paper hover:bg-kokum hover:-translate-y-0.5 hover:shadow-lg hover:shadow-kokum/20",
    secondary:
      "border border-line-2 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
    ghost: "text-ink hover:text-kokum underline-offset-4 hover:underline px-0",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ─────────────────────────────── Section ─────────────────────────────────── */

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "paper-2" | "ink";
  id?: string;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    "paper-2": "bg-paper-2 text-ink",
    ink: "bg-ink text-paper-2",
  };

  return (
    <section
      id={id}
      className={`${tones[tone]} py-20 md:py-28 lg:py-36 ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

/* ─────────────────────────── Section heading ─────────────────────────────── */

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  invert = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-5 ${invert ? "text-kokum-2" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-[2.125rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem] ${
          invert ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            invert ? "text-paper-3/80" : "text-ink-2"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ──────────────────────────────── Rule ───────────────────────────────────── */

export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}

/* ─────────────────────────── Arrow glyph ─────────────────────────────────── */

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
    >
      <path
        d="M1 8h13M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────────────────────── WhatsApp glyph ──────────────────────────────── */

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24z" />
    </svg>
  );
}
