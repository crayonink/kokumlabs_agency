import Link from "next/link";
import {
  founders,
  howItWorks,
  midTerm,
  modules,
  segments,
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
                <p className="eyebrow">AI-native hospitality operations</p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-[2.75rem] leading-[1.03] sm:text-6xl lg:text-[4.25rem]">
                  Run your property
                  <br />
                  from one place.
                  <br />
                  <span className="text-kokum italic">Fill it</span> from
                  everywhere.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
                  Your website, social media, guest enquiries, WhatsApp, OTA
                  listings, bookings and loyalty — unified into one AI-native
                  platform that answers guests while you sleep, and finds you
                  the ones who stay for months.
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
                    <strong className="font-semibold text-ink">Billdesk</strong>
                    . You will always be talking to the people who built it.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <PhotoSlot
                  alt="A sunlit verandah at an independent coastal property"
                  aspect="aspect-[4/5]"
                  tone="dawn"
                  priority
                  rounded="rounded-3xl"
                  caption="Replace with your best property photograph."
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
                sub="Most independent properties run across a booking engine, a channel manager, two inboxes, three social apps and a personal WhatsApp — none of which talk to each other."
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

      {/* ───────────────────────── The platform ───────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The platform"
            title="Seven jobs. One system. No tabs."
            sub="Each of these is a product a company could sell you on its own. We built them to work as one, because that is the only way the compounding actually happens."
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
                alt="An owner-run homestay courtyard in the late afternoon"
                aspect="aspect-[3/2]"
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
                title="Two engineers, not ten account managers."
                sub="We are small on purpose. It means the person who answers your message is the person who can fix the thing you are messaging about."
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
