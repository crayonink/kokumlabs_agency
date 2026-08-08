import type { Metadata } from "next";
import { founders, manifesto, photos } from "@/lib/site";
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
        sub="Two engineers — one from Amazon, one from Billdesk — who also run a place of their own. Everything here exists because we needed it before anyone else did."
      />

      {/* ───────────────────────────── The story ──────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Why we built this</p>
              <div className="mt-7 space-y-6 text-lg leading-relaxed text-ink-2">
                <p>
                  We didn&rsquo;t set out to build a product. We were trying to
                  keep our own homestay full, and it turned out most of that work
                  has nothing to do with hospitality.
                </p>
                <p>
                  The enquiry that comes in at 11pm and is dead by morning. The
                  rate you changed on one channel and forgot on another. The
                  eight weeks a year when nobody comes and the bills don&rsquo;t
                  care. The guest who left five stars and never heard from you
                  again. All of that is stuff that happened to us.
                </p>
                <p>
                  None of it is hospitality. It&rsquo;s software. And software is
                  what we do — one of us at{" "}
                  <strong className="font-semibold text-ink">Amazon</strong>,
                  where things have to stay up and stay fast because slow costs
                  money, the other building payment systems at{" "}
                  <strong className="font-semibold text-ink">Billdesk</strong>,
                  where money moving correctly every single time is the entire
                  job.
                </p>
                <p>
                  So we built what we needed and ran it on our own place first.
                  It answers our guests, keeps our listings straight, and fills
                  months that used to sit empty. That&rsquo;s the only reason
                  we&rsquo;re comfortable selling it to you. We&rsquo;re not
                  going to sell you something we wouldn&rsquo;t run ourselves.
                </p>
                <p>
                  What&rsquo;s out there is either enterprise software cut down
                  badly, or an agency charging a retainer to do things a computer
                  should be doing. We thought there was a third option. Build the
                  machine, and run it for you.
                </p>
                <p>
                  Kokum is the fruit you get on the Konkan coast. Sharp,
                  unmistakable, quietly essential to whatever it goes into. Felt
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

      {/* ─────────────────────── What we hold ourselves to ─────────────────── */}
      <Section tone="ink">
        <figure className="mx-auto max-w-4xl text-center">
          <Reveal>
            <blockquote className="font-[family-name:var(--font-display)] text-[1.75rem] leading-[1.3] text-paper italic sm:text-4xl lg:text-[2.75rem]">
              &ldquo;{manifesto.quote.text}&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <figcaption className="mt-9">
              <span className="block font-medium text-paper">
                {manifesto.quote.attribution}
              </span>
              <span className="mt-1 block text-paper-3/70">
                {manifesto.quote.context}
              </span>
            </figcaption>
          </Reveal>
        </figure>
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
