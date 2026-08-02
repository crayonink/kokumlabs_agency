import Link from "next/link";
import {
  founders,
  howItWorks,
  metrics,
  midTerm,
  modules,
  otaTax,
  photos,
  pillars,
  positioning,
  segments,
  sequencing,
  whatsappUrl,
} from "@/lib/site";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";
import {
  Arrow,
  Button,
  Section,
  SectionHeading,
  WhatsAppIcon,
} from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────── Hero ─────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44">
        {/* Warm light bleeding in from the top right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #f6dcc6 0%, #f4e6e6 45%, transparent 70%)",
          }}
        />

        <div className="container-page relative">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">{positioning.eyebrow}</p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-[2.75rem] leading-[1.03] sm:text-6xl lg:text-[4.25rem]">
                  Build a brand,
                  <br />
                  <span className="text-kokum italic">not a listing</span>.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
                  An OTA booking costs you 22–28% all in — including from guests
                  who have already stayed with you once. We reduce that
                  dependency: own your guest data, capture the branded demand you
                  are already creating, and fill the months that sit empty.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="/contact"
                    variant="accent"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Book a demo
                    <Arrow />
                  </Button>
                  <Button
                    href={whatsappUrl()}
                    variant="secondary"
                    size="lg"
                    external
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon />
                    WhatsApp us
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-12 flex items-center gap-4 border-t border-line pt-7">
                  <div className="flex -space-x-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[0.6875rem] font-semibold tracking-wide text-paper ring-2 ring-paper">
                      AMZ
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-kokum text-[0.6875rem] font-semibold tracking-wide text-paper ring-2 ring-paper">
                      BD
                    </span>
                  </div>
                  <p className="text-[0.9375rem] leading-snug text-ink-2">
                    Built by two engineers from{" "}
                    <strong className="font-semibold text-ink">Amazon</strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-ink">Billdesk</strong>{" "}
                    who{" "}
                    <strong className="font-semibold text-ink">
                      run a homestay themselves
                    </strong>
                    . We built it for our own property first.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <PhotoSlot
                  src={photos.heroProperty}
                  alt="A guest room opening onto a tiled verandah, looking out over a misty valley"
                  aspect="aspect-[4/5]"
                  tone="dawn"
                  priority
                  rounded="rounded-3xl"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── The problem ────────────────────────────── */}
      <Section tone="paper-2">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="The problem"
                title={
                  <>
                    You did not get into hospitality to manage{" "}
                    <span className="text-kokum italic">seven browser tabs</span>
                    .
                  </>
                }
                sub="Most independent properties run across a booking engine, a channel manager, two inboxes, three social apps and a personal WhatsApp — none of which talk to each other. We know, because we ran ours that way for years."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul>
              {[
                {
                  t: "The enquiry that went cold",
                  d: "It came in at 11pm on Instagram. You saw it at 9am. They had already booked somewhere else.",
                },
                {
                  t: "The rate you forgot to change",
                  d: "You updated Booking.com but not Airbnb, and sold a long-weekend room at a Tuesday price.",
                },
                {
                  t: "The empty shoulder season",
                  d: "Eight weeks of the year where the rooms sit idle and the fixed costs do not.",
                },
                {
                  t: "The guest you never heard from again",
                  d: "They loved it. They left a five-star review. Nobody ever followed up.",
                },
              ].map((row, i) => (
                <Reveal as="li" key={row.t} delay={i * 70}>
                  <div className="flex gap-6 border-b border-line-2/60 py-7">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-kokum/40 tabular-nums">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-[1.375rem]">{row.t}</h3>
                      <p className="mt-2 leading-relaxed text-ink-2">{row.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ──────────────────────────── The OTA tax ─────────────────────────── */}
      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5 text-kokum-2">The economics</p>
              <p className="font-[family-name:var(--font-display)] text-[4rem] leading-none text-kokum-2 tabular-nums sm:text-[5rem]">
                {otaTax.stat}
              </p>
              <p className="mt-4 text-lg text-paper-3">{otaTax.statLabel}</p>
              <p className="mt-8 leading-relaxed text-paper-3/75">
                {otaTax.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="border-l-2 border-kokum pl-7">
                <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-paper italic md:text-[2rem]">
                  {otaTax.question}
                </p>
                <p className="mt-4 text-paper-3/80">{otaTax.answer}</p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-paper-3/25">
                      <th className="eyebrow pb-4 pr-6 font-normal text-paper-3/70">
                        What we measure
                      </th>
                      <th className="eyebrow pb-4 pr-6 font-normal text-paper-3/70">
                        Typical today
                      </th>
                      <th className="eyebrow pb-4 font-normal text-paper-3/70">
                        Target
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.map((m) => (
                      <tr
                        key={m.metric}
                        className="border-b border-paper-3/10 last:border-0"
                      >
                        <td className="py-4 pr-6 align-top font-medium text-paper">
                          {m.metric}
                        </td>
                        <td className="py-4 pr-6 align-top text-paper-3/60 tabular-nums">
                          {m.today}
                        </td>
                        <td className="py-4 align-top font-medium text-kokum-2 tabular-nums">
                          {m.target}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <Button
                href="/direct-revenue"
                variant="onDarkSolid"
                size="lg"
                className="mt-10"
              >
                The whole argument
                <Arrow />
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ─────────────────── Why we are not an SEO agency ─────────────────── */}
      <Section tone="paper-2">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Sequencing</span>
            <h2 className="mt-6 text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl">
              {sequencing.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              {sequencing.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-kokum/25 bg-kokum-3/60 p-8 text-center md:p-10">
            <p className="font-[family-name:var(--font-display)] text-xl leading-relaxed text-ink italic md:text-2xl">
              {sequencing.contrast}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ───────────────────────── The platform ───────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The platform"
            title="The machinery that runs it."
            sub="The practice above is the argument. These seven modules are how it actually gets executed — built to work as one system, because that is the only way the compounding happens."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.slug} delay={i * 50}>
              <Link
                href={`/platform#${m.slug}`}
                className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-paper-2"
              >
                <span className="font-[family-name:var(--font-display)] text-sm text-kokum tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl transition-colors group-hover:text-kokum">
                  {m.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-2">
                  {m.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-3 transition-colors group-hover:text-kokum">
                  How it works
                  <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}

          {/* Filler cell keeps the 3-column grid whole on large screens */}
          <Reveal delay={350} className="hidden lg:block">
            <div className="flex h-full flex-col justify-between bg-paper-2 p-8">
              <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-ink italic">
                &ldquo;Everything in one place&rdquo; only means something if the
                pieces were built together.
              </p>
              <Button href="/platform" variant="ghost" className="mt-6">
                See the whole platform
                <Arrow />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ──────────────────── The mid-term wedge ──────────────────────────── */}
      <section className="bg-ink text-paper-2">
        <div className="container-page py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow mb-5 text-kokum-2">{midTerm.eyebrow}</p>
                <h2 className="text-[2.125rem] leading-[1.08] text-paper sm:text-5xl lg:text-[3.5rem]">
                  The guest who books once and{" "}
                  <span className="text-kokum-2 italic">stays four months</span>
                  .
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-paper-3/75">
                  {midTerm.sub}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-paper-3/75">
                  This is the part nobody else does. We do not wait for an OTA to
                  send you a long-stay guest — we go and find them, qualify them,
                  and bring you the ones worth having.
                </p>
                <Button
                  href="/mid-term-stays"
                  variant="onDarkSolid"
                  size="lg"
                  className="mt-10"
                >
                  How mid-term stays work
                  <Arrow />
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-px overflow-hidden rounded-2xl bg-paper-3/15">
                {midTerm.economics.map((e, i) => (
                  <Reveal key={e.label} delay={i * 90}>
                    <div className="bg-ink p-8">
                      <div className="flex items-baseline gap-3">
                        <span className="font-[family-name:var(--font-display)] text-4xl text-paper lg:text-5xl">
                          {e.stat}
                        </span>
                        <span className="text-sm tracking-wide text-kokum-2 uppercase">
                          {e.label}
                        </span>
                      </div>
                      <p className="mt-3 leading-relaxed text-paper-3/65">
                        {e.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── How it works ───────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Getting started"
            title="Three steps, and most of the work is ours."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 90}>
              <div className="border-t border-line pt-7">
                <span className="font-[family-name:var(--font-display)] text-5xl text-kokum/25 tabular-nums">
                  {s.step}
                </span>
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-2">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ──────────────────────────── Segments ────────────────────────────── */}
      <Section tone="paper-2">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Who it's for"
                title="Independent properties, punching above their weight."
                sub="Chains have revenue managers, marketing teams and engineers. You have a property to run. We are the version of that team that fits an independent operator."
              />
              <PhotoSlot
                src={photos.whoItsFor}
                alt="The living and dining room of an owner-run homestay, with cane furniture and a marble floor"
                aspect="aspect-[4/5]"
                tone="palm"
                className="mt-10"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {segments.map((s, i) => (
                <Reveal key={s.name} delay={i * 70}>
                  <div className="h-full bg-paper p-8">
                    <h3 className="text-2xl">{s.name}</h3>
                    <p className="mt-3 leading-relaxed text-ink-2">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ──────────────────────────── Founders ───────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="Who builds it"
                title="Two engineers who also run a property."
                sub="We are small on purpose. The person who answers your message is the person who can fix the thing you are messaging about — and who has spent their own evenings answering guest enquiries."
              />
              <Button href="/about" variant="ghost" className="mt-7">
                More about us
                <Arrow />
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {founders.map((f, i) => (
                <Reveal key={f.name} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-paper-2 p-8">
                    <span className="inline-flex w-fit rounded-full bg-kokum-3 px-3 py-1 text-xs font-medium tracking-wide text-kokum uppercase">
                      ex-{f.from}
                    </span>
                    <h3 className="mt-5 text-2xl">{f.name}</h3>
                    <p className="mt-1 text-sm text-ink-3">{f.role}</p>
                    <p className="mt-4 flex-1 leading-relaxed text-ink-2">
                      {f.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────────────────────── FAQ ──────────────────────────────── */}
      <Section tone="paper-2">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="The things owners ask us first."
          />
        </Reveal>
        <div className="mt-14">
          <FAQ />
        </div>
        <Reveal>
          <p className="mt-10 text-ink-2">
            Something we have not covered?{" "}
            <Link
              href="/contact"
              className="text-kokum underline underline-offset-4 hover:text-ink"
            >
              Ask us directly
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
