import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #f6dcc6 0%, #f4e6e6 50%, transparent 72%)",
        }}
      />
      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-[4rem]">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">
              {sub}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={240}>
            <div className="mt-10">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
