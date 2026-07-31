import type { Metadata } from "next";
import { midTerm, whatsappUrl } from "@/lib/site";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";
import {
  Arrow,
  Button,
  Section,
  SectionHeading,
  WhatsAppIcon,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Mid-Term Stays",
  description:
    "We find and qualify guests for 30–180 night stays — remote workers, relocating families, production crews and consultants — and bring them to your property with dates, budget and payment ability already confirmed.",
};

const guestTypes = [
  {
    name: "Remote workers",
    body: "Booking one to three months in a place with good internet and somewhere to sit and work. They travel in shoulder season, which is exactly when you need them.",
  },
  {
    name: "Relocating families",
    body: "Between homes, between cities, or waiting on a lease. They need space, a kitchen and certainty — and they are not price-shopping by the night.",
  },
  {
    name: "Film and production crews",
    body: "Whole teams needing multiple rooms for the length of a shoot. One conversation, several rooms, months at a time.",
  },
  {
    name: "Consultants and project staff",
    body: "On-site for a deployment, an audit or a build. Company-paid, invoice-driven, and reliably repeat business.",
  },
  {
    name: "Medical and recovery stays",
    body: "Patients and families staying near a hospital for a course of treatment. Quiet, long, and deeply grateful for a good host.",
  },
  {
    name: "Seasonal residents",
    body: "Retirees and snowbirds escaping a winter or a monsoon. They come back to the same property year after year once they like it.",
  },
];

export default function MidTermStaysPage() {
  return (
    <>
      <PageHero
        eyebrow={midTerm.eyebrow}
        title={
          <>
            The guest who books once and{" "}
            <span className="text-kokum italic">stays four months</span>.
          </>
        }
        sub={midTerm.sub}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            className="w-full sm:w-auto"
          >
            Talk to us about long stays
            <Arrow />
          </Button>
          <Button
            href={whatsappUrl(
              "Hi Kokum Labs — I'd like to know more about mid-term stays for my property.",
            )}
            variant="secondary"
            size="lg"
            external
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon />
            WhatsApp us
          </Button>
        </div>
      </PageHero>

      {/* ───────────────────────── The economics ──────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Why it is worth your time"
            title="Fewer bookings. Better business."
            sub="Nightly bookings look busy. Mid-term bookings are quietly more profitable, because almost every cost you have scales with turnover rather than with nights."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {midTerm.economics.map((e, i) => (
            <Reveal key={e.label} delay={i * 90}>
              <div className="h-full bg-paper p-8 lg:p-10">
                <div className="font-[family-name:var(--font-display)] text-5xl text-ink lg:text-6xl">
                  {e.stat}
                </div>
                <div className="mt-2 text-sm tracking-wide text-kokum uppercase">
                  {e.label}
                </div>
                <p className="mt-5 leading-relaxed text-ink-2">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-paper-2 p-8 md:flex-row md:items-center md:p-10">
            <p className="font-[family-name:var(--font-display)] flex-1 text-xl leading-relaxed text-ink italic md:text-2xl">
              A room sold for ninety nights at a modest rate beats the same room
              sold for thirty nights at a good one — once you count the
              commission, the cleaning and the evenings you spent answering
              messages.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ───────────────────────── How it works ───────────────────────────── */}
      <Section tone="paper-2">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title="We do the finding. You do the approving."
                sub="This is not a listing you post and hope. It is active sourcing, done by us, with a qualification step before anything reaches your inbox."
              />
              <PhotoSlot
                alt="A long-stay guest working from a quiet property terrace"
                aspect="aspect-[3/2]"
                tone="dusk"
                className="mt-10"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {midTerm.qualification.map((q, i) => (
                <Reveal as="li" key={q.title} delay={i * 80}>
                  <div className="bg-paper p-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-[family-name:var(--font-display)] text-3xl text-kokum/35 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl">{q.title}</h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-ink-2 sm:pl-14">
                      {q.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ────────────────────────── Who these guests are ──────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Who stays this long"
            title="They are not tourists, and they do not shop like tourists."
            sub="Six kinds of guest make up most mid-term demand. None of them are looking on the channels you currently sell through."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {guestTypes.map((g, i) => (
            <Reveal key={g.name} delay={i * 60}>
              <div className="h-full bg-paper p-8">
                <h3 className="text-xl md:text-[1.375rem]">{g.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-2">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ──────────────────────────── Good fit ───────────────────────────── */}
      <section className="bg-ink text-paper-2">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5 text-kokum-2">Is this you?</p>
                <h2 className="text-[2.125rem] leading-[1.08] text-paper sm:text-5xl">
                  Mid-term stays suit some properties far better than others.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-paper-3/75">
                  We would rather tell you it is a poor fit than sign you up and
                  underdeliver. If your rooms sell out every night at a high
                  rate, you do not need this.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-paper-3/15 border-y border-paper-3/15">
                {midTerm.fitFor.map((f, i) => (
                  <Reveal as="li" key={f} delay={i * 70}>
                    <div className="flex items-start gap-4 py-6">
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-kokum-2"
                      >
                        <path
                          d="M2 8.5 6 12.5 14 4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-lg text-paper-2">{f}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Mid-term stays"
        title="Tell us which months are empty."
        sub="Send us your property and the gaps in your calendar. We will tell you honestly what mid-term demand looks like for your location and what we think we could fill."
      />
    </>
  );
}
