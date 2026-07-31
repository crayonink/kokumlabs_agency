import { faqs } from "@/lib/site";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item, i) => (
        <Reveal key={item.q} delay={i * 50}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
              <h3 className="text-xl leading-snug transition-colors group-hover:text-kokum md:text-[1.375rem]">
                {item.q}
              </h3>
              <span
                aria-hidden="true"
                className="relative mt-2 block h-3.5 w-3.5 shrink-0"
              >
                <span className="absolute top-1/2 left-0 h-px w-full bg-ink-2" />
                <span className="absolute top-1/2 left-0 h-px w-full bg-ink-2 transition-transform duration-300 group-open:rotate-0 rotate-90" />
              </span>
            </summary>
            <p className="max-w-3xl pb-7 leading-relaxed text-ink-2">
              {item.a}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
