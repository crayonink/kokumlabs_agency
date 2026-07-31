import type { Metadata } from "next";
import { modules, photos } from "@/lib/site";
import CTASection from "@/components/CTASection";
import ModuleGlyph from "@/components/ModuleGlyph";
import PageHero from "@/components/PageHero";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";
import { Arrow, Button, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Website, social media, guest enquiries, WhatsApp, OTA listings, bookings and loyalty — seven jobs handled by one AI-native platform built for independent properties.",
};

const tones = ["dawn", "clay", "palm", "dusk"] as const;

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The platform"
        title={
          <>
            Everything that runs your property,{" "}
            <span className="text-kokum italic">running together</span>.
          </>
        }
        sub="Seven modules, one system, one login. Below is exactly what each one does — and what changes for you once it is switched on."
      >
        <nav className="flex flex-wrap gap-2">
          {modules.map((m) => (
            <a
              key={m.slug}
              href={`#${m.slug}`}
              className="rounded-full border border-line-2 px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {m.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* ───────────────────────── Module detail rows ─────────────────────── */}
      {modules.map((m, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={m.slug}
            id={m.slug}
            className={`scroll-mt-24 py-16 md:py-24 ${
              flip ? "bg-paper-2" : "bg-paper"
            }`}
          >
            <div className="container-page">
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
                <div
                  className={`lg:col-span-6 ${flip ? "lg:order-2" : "lg:order-1"}`}
                >
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="font-[family-name:var(--font-display)] text-sm text-kokum tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-line-2" />
                      <span className="eyebrow">{m.name}</span>
                    </div>

                    <h2 className="mt-7 text-[1.875rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
                      {m.headline}
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-ink-2">
                      {m.body}
                    </p>

                    <ul className="mt-8 space-y-3.5">
                      {m.points.map((p) => (
                        <li key={p} className="flex gap-3.5">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kokum"
                          />
                          <span className="leading-relaxed text-ink-2">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                <div
                  className={`lg:col-span-6 ${flip ? "lg:order-1" : "lg:order-2"}`}
                >
                  <Reveal delay={120}>
                    {photos.module[m.slug] ? (
                      <PhotoSlot
                        src={photos.module[m.slug]}
                        alt={`${m.name} — ${m.short}`}
                        aspect="aspect-[4/3]"
                        tone={tones[i % tones.length]}
                        rounded="rounded-3xl"
                      />
                    ) : (
                      <ModuleGlyph slug={m.slug} />
                    )}
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ─────────────────────────── The argument ────────────────────────── */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Why one system"
                title="The value is in the seams."
                sub="Seven separate tools give you seven separate silos. One system means the pieces know about each other — and that is where the bookings actually come from."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {[
                {
                  a: "Enquiries",
                  b: "Bookings",
                  d: "The AI quotes from live availability, so it never promises a room you have already sold.",
                },
                {
                  a: "Bookings",
                  b: "WhatsApp",
                  d: "A confirmed booking triggers directions, check-in details and an upsell at exactly the right moment.",
                },
                {
                  a: "OTA listings",
                  b: "Website",
                  d: "One content change updates your own site and every channel at once, so nothing drifts out of date.",
                },
                {
                  a: "Loyalty",
                  b: "Social",
                  d: "Your happiest past guests are the audience your next campaign goes to first.",
                },
                {
                  a: "Mid-term stays",
                  b: "Calendar",
                  d: "Long-stay leads are matched against the gaps in your calendar, not offered blind.",
                },
              ].map((row, i) => (
                <Reveal key={row.a + row.b} delay={i * 60}>
                  <div className="flex flex-col gap-3 bg-paper p-6 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex shrink-0 items-center gap-2.5 sm:w-64">
                      <span className="font-medium text-ink">{row.a}</span>
                      <Arrow className="text-kokum" />
                      <span className="font-medium text-ink">{row.b}</span>
                    </div>
                    <p className="text-ink-2">{row.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={360}>
              <div className="mt-8 rounded-2xl border border-line bg-paper-2 p-8">
                <p className="font-[family-name:var(--font-display)] text-xl leading-relaxed text-ink italic md:text-2xl">
                  A channel manager will sync your rates. A social tool will
                  schedule your posts. Neither of them will notice that your
                  February is empty and do something about it.
                </p>
                <Button href="/mid-term-stays" variant="ghost" className="mt-6">
                  That is what mid-term stays are for
                  <Arrow />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="See it on your property"
        title="Bring us your listings. We will show you the gaps."
        sub="On the demo we will look at your live OTA listings, your current site and your enquiry channels, and point out what is costing you bookings right now — whether or not you sign up."
      />
    </>
  );
}
