import type { Metadata } from "next";
import { contact, whatsappUrl } from "@/lib/site";
import CalEmbed from "@/components/CalEmbed";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, Button, Section, WhatsAppIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Twenty minutes, no slides. We look at your property, your listings and your enquiry channels, and show you what the Kokum Labs platform would do with them.",
};

const agenda = [
  {
    t: "You tell us about the property",
    d: "Size, location, seasonality, and where your bookings come from today. Five minutes.",
  },
  {
    t: "We show you your own listings",
    d: "We will have already looked at your OTA listings and your website. We will point out what is losing you bookings, whether or not you sign up.",
  },
  {
    t: "We show you the platform",
    d: "Live, on your property's data where we can. Not a slide deck and not a recorded video.",
  },
  {
    t: "You get numbers",
    d: "Exact pricing, exact setup timeline, and an honest view of whether mid-term stays will work in your location.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title={
          <>
            Twenty minutes.{" "}
            <span className="text-kokum italic">No slides.</span>
          </>
        }
        sub="Would a quick demo be useful? Pick a time, or just message us — whichever is easier. We will come to the call having already looked at your property."
      />

      {/* ──────────────────────── Scheduler + routes ──────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <CalEmbed />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <h2 className="text-3xl">What the call looks like</h2>
              <ol className="mt-8 space-y-7">
                {agenda.map((a, i) => (
                  <li key={a.t} className="flex gap-5">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-kokum/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg">{a.t}</h3>
                      <p className="mt-1.5 leading-relaxed text-ink-2">{a.d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {contact.calLink && (
                <div className="mt-10 rounded-2xl border border-line bg-paper-2 p-7">
                  <p className="text-ink-2">
                    Prefer not to book a slot? Message us instead.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Button href={whatsappUrl()} external>
                      <WhatsAppIcon />
                      WhatsApp
                    </Button>
                    <Button
                      href={`mailto:${contact.email}`}
                      variant="secondary"
                      external
                    >
                      Email us
                      <Arrow />
                    </Button>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ───────────────────────── Reassurance strip ─────────────────────── */}
      <section className="border-t border-line bg-paper-2">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                t: "No obligation",
                d: "If it is not a fit for your property, we will say so on the call and you will still leave with the listing audit.",
              },
              {
                t: "No long contract",
                d: "Monthly. If we stop earning it, you stop paying for it — and your data comes with you.",
              },
              {
                t: "You talk to the founders",
                d: "Both demo calls and support go to the two people who built the thing. There is no one else here.",
              },
            ].map((r, i) => (
              <Reveal key={r.t} delay={i * 80}>
                <div className="border-t border-line-2/60 pt-6">
                  <h3 className="text-xl">{r.t}</h3>
                  <p className="mt-2.5 leading-relaxed text-ink-2">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
