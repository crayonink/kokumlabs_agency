import type { Metadata } from "next";
import { metrics, otaTax, pillars, sequencing } from "@/lib/site";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Direct Revenue",
  description:
    "How independent properties reduce dependency on OTAs and Airbnb — own the guest, capture your own branded demand, retain and multiply, and fill the trough. Measured in direct booking share, not impressions.",
};

export default function DirectRevenuePage() {
  return (
    <>
      <PageHero
        eyebrow="How we get you off the OTAs"
        title={
          <>
            Be a place,{" "}
            <span className="text-kokum italic">not a listing</span>.
          </>
        }
        sub="The whole argument, in the order we'd actually do it. Nothing held back for the sales call."
      >
        <nav className="flex flex-wrap gap-2">
          {pillars.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="rounded-full border border-line-2 px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {p.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* ──────────────────────── The economic argument ───────────────────── */}
      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-[family-name:var(--font-display)] text-[4rem] leading-none text-kokum-2 tabular-nums sm:text-[5rem]">
                {otaTax.stat}
              </p>
              <p className="mt-4 text-lg text-paper-3">{otaTax.statLabel}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="text-xl leading-relaxed text-paper-2 md:text-2xl">
                {otaTax.body}
              </p>

              <div className="mt-10 border-l-2 border-kokum pl-7">
                <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-paper italic md:text-3xl">
                  {otaTax.question}
                </p>
                <p className="mt-4 text-paper-3">{otaTax.answer}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ───────────────────────────── The pillars ────────────────────────── */}
      {pillars.map((p, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={p.slug}
            id={p.slug}
            className={`scroll-mt-24 py-16 md:py-24 ${
              alt ? "bg-paper-2" : "bg-paper"
            }`}
          >
            <div className="container-page">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="font-[family-name:var(--font-display)] text-sm text-kokum tabular-nums">
                        {p.number}
                      </span>
                      <span className="h-px flex-1 bg-line-2" />
                      <span className="eyebrow">{p.name}</span>
                    </div>

                    <h2 className="mt-7 text-[1.75rem] leading-[1.14] sm:text-[2rem] lg:text-[2.5rem]">
                      {p.headline}
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-ink-2">
                      {p.sub}
                    </p>
                  </Reveal>
                </div>

                <div className="lg:col-span-7">
                  <div className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                    {p.levers.map((l, j) => (
                      <Reveal key={l.title} delay={j * 60}>
                        <div className="bg-paper p-7 md:p-8">
                          <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                            {l.title}
                          </h3>
                          <p className="mt-3 leading-relaxed text-ink-2">
                            {l.body}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ────────────────────────── What we measure ───────────────────────── */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="What we measure"
                title="Numbers your agency can't show you."
                sub="Impressions and rankings aren't money. These five are. Most owners have never had anyone put them on a page."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-line-2">
                      <th className="eyebrow pb-4 pr-6 font-normal">Metric</th>
                      <th className="eyebrow pb-4 pr-6 font-normal">
                        Typical today
                      </th>
                      <th className="eyebrow pb-4 font-normal">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.map((m) => (
                      <tr key={m.metric} className="border-b border-line">
                        <td className="py-5 pr-6 align-top font-medium text-ink">
                          {m.metric}
                        </td>
                        <td className="py-5 pr-6 align-top text-ink-3 tabular-nums">
                          {m.today}
                        </td>
                        <td className="py-5 align-top font-medium text-kokum tabular-nums">
                          {m.target}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────── The sequencing ───────────────────────── */}
      <Section tone="paper-2">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">What order to do it in</span>
            <h2 className="mt-6 text-[2rem] leading-[1.12] sm:text-4xl lg:text-5xl">
              {sequencing.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              {sequencing.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ol className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <li
                key={p.slug}
                className="rounded-2xl border border-line bg-paper p-7"
              >
                <span className="font-[family-name:var(--font-display)] text-sm text-kokum tabular-nums">
                  {p.number}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg text-ink">
                  {p.name}
                </h3>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-kokum/25 bg-kokum-3/60 p-8 md:p-10">
            <p className="font-[family-name:var(--font-display)] text-xl leading-relaxed text-ink italic md:text-2xl">
              {sequencing.contrast}
            </p>
          </div>
        </Reveal>
      </Section>

      <CTASection
        eyebrow="Start with the number"
        title="We'll work out what the OTAs are costing you. Then you decide."
        sub="On the call we go through your listings, your booking flow, and where your repeat guests are actually booking. You get the numbers whether or not you sign up."
      />
    </>
  );
}
