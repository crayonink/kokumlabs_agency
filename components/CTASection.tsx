import { whatsappUrl } from "@/lib/site";
import Reveal from "./Reveal";
import { Arrow, Button, WhatsAppIcon } from "./ui";

export default function CTASection({
  title = "Would a quick demo be useful?",
  sub = "Twenty minutes. We will look at your property, your listings and where your bookings come from today, and show you what the platform would do with them. No slides.",
  eyebrow = "Next step",
}: {
  title?: string;
  sub?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-ink text-paper-2">
      <div className="container-page py-20 md:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-kokum-2">{eyebrow}</p>
          <h2 className="text-[2.125rem] leading-[1.08] text-paper sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper-3/75">
            {sub}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="/contact"
              size="lg"
              className="w-full bg-paper text-ink hover:bg-kokum hover:text-paper sm:w-auto"
            >
              Book a demo
              <Arrow />
            </Button>
            <Button
              href={whatsappUrl()}
              size="lg"
              external
              className="w-full border border-paper-3/25 text-paper-2 hover:border-paper hover:bg-paper hover:text-ink sm:w-auto"
            >
              <WhatsAppIcon />
              Message on WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
