import type { Metadata } from "next";
import { founders, photos } from "@/lib/site";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kokum Labs is two engineers — one from Amazon, one from Billdesk — building an AI-native operating platform for independent hotels, resorts, homestays and mid-term rentals.",
};

const principles = [
  {
    title: "We answer, not a ticket queue",
    body: "There is no support tier. You message us, one of the two of us replies, and it is the same person who can change the code.",
  },
  {
    title: "Your guest never waits",
    body: "Speed is the whole advantage. If a reply takes an hour, the booking is already gone. Everything we build is measured against that.",
  },
  {
    title: "Automation you can read",
    body: "Every message the AI sends on your behalf is visible to you, in full. Nothing happens to your guests that you cannot see.",
  },
  {
    title: "Your data is yours",
    body: "Your guest list, your booking history, your content. If you ever leave, you take all of it with you. No hostage-taking.",
  },
  {
    title: "We say no to bad fits",
    body: "If your property does not need us, we will tell you on the call. A customer who should not have signed up is worse than no customer.",
  },
  {
    title: "Money is handled properly",
    body: "Deposits, staged payments, refunds and reconciliation are built by someone who spent a career in payments. This is not a spreadsheet.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            We built this for{" "}
            <span className="text-kokum italic">our own homestay</span> first.
          </>
        }
        sub="Kokum Labs is two engineers — one from Amazon, one from Billdesk — who also run a property of their own. Everything on this site exists because we needed it before anyone else did."
      />

      {/* ───────────────────────────── The story ──────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Why we built this</p>
              <div className="mt-7 space-y-6 text-lg leading-relaxed text-ink-2">
                <p>
                  We did not set out to build a product. We set out to keep our
                  own homestay full — and discovered that most of that work has
                  nothing to do with hospitality.
                </p>
                <p>
                  The enquiry that arrives at eleven at night and is cold by
                  morning. The rate changed on one channel and forgotten on
                  another. The eight weeks a year when the rooms sit empty and
                  the fixed costs do not. The guest who left a five-star review
                  and never heard from us again. Everything described on the home
                  page under <em>the problem</em> is written from experience, not
                  from a survey.
                </p>
                <p>
                  None of that is hospitality work. It is software work — and it
                  is the kind of software work we have spent our careers doing.
                  One of us spent years at{" "}
                  <strong className="font-semibold text-ink">Amazon</strong>{" "}
                  building systems where latency is measured in milliseconds
                  because milliseconds cost money. The other built payment
                  infrastructure at{" "}
                  <strong className="font-semibold text-ink">Billdesk</strong>,
                  where money moving correctly, every time, is the entire job.
                </p>
                <p>
                  So we built what we needed and ran it on our own property
                  first. It answers our guests, keeps our listings straight, and
                  fills months that used to sit empty. That is the only reason we
                  are comfortable offering it to yours — we are not selling you
                  something we would not run ourselves.
                </p>
                <p>
                  The tools sold to independent properties today are either
                  enterprise software scaled down badly, or agencies charging a
                  retainer to do things a machine should be doing. We thought
                  there was a third option: build the machine, and run it for
                  you.
                </p>
                <p>
                  Kokum is the fruit of the Konkan coast — sharp, unmistakable,
                  and quietly essential to everything it goes into. That felt
                  about right.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <PhotoSlot
                src={photos.aboutStory}
                alt="The Basilica of Bom Jesus in Old Goa, on the Konkan coast"
                aspect="aspect-[4/5]"
                tone="clay"
                rounded="rounded-3xl"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ──────────────────────────── Founders ───────────────────────────── */}
      <Section tone="paper-2">
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title="All of it, from both of us."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 110}>
              <article className="flex h-full flex-col">
                <PhotoSlot
                  src={f.photo}
                  alt={`${f.name}, co-founder of Kokum Labs`}
                  aspect="aspect-[3/4]"
                  tone={i === 0 ? "dawn" : "palm"}
                  rounded="rounded-2xl"
                />
                <div className="mt-7 flex-1">
                  <span className="inline-flex w-fit rounded-full bg-kokum-3 px-3 py-1 text-xs font-medium tracking-wide text-kokum uppercase">
                    ex-{f.from}
                  </span>
                  <h3 className="mt-4 text-3xl">{f.name}</h3>
                  <p className="mt-1 text-ink-3">{f.role}</p>
                  <p className="mt-5 leading-relaxed text-ink-2">{f.bio}</p>
                  {f.linkedin && (
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block text-sm text-kokum underline underline-offset-4 hover:text-ink"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────── Principles ──────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="Six things we have committed to."
            sub="Small teams can afford to have principles, because there is nobody to blame when they are broken."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full bg-paper p-8">
                <span className="font-[family-name:var(--font-display)] text-sm text-kokum tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl md:text-[1.375rem]">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-2">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Say hello"
        title="Come and ask us the hard questions."
        sub="Bring the sceptical ones. We would rather answer them now than have you find out later that we were not the right fit."
      />
    </>
  );
}
