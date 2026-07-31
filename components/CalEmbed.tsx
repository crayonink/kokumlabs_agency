import { contact, whatsappUrl } from "@/lib/site";
import { Arrow, WhatsAppIcon } from "./ui";

/**
 * Renders the cal.com scheduler once `contact.calLink` is set in lib/site.ts.
 * Until then it shows the direct contact routes, so the page is never broken —
 * it just offers a different way in.
 */
export default function CalEmbed() {
  if (contact.calLink) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
        <iframe
          src={`https://cal.com/${contact.calLink}?embed=true&theme=light`}
          title="Book a demo with Kokum Labs"
          className="h-[42rem] w-full border-0"
          loading="lazy"
        />
      </div>
    );
  }

  const routes = [
    {
      label: "WhatsApp",
      value: "Fastest reply, usually within the hour",
      href: whatsappUrl(),
      external: true,
      icon: <WhatsAppIcon className="h-5 w-5" />,
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: <span className="text-lg leading-none">✉</span>,
    },
    {
      label: "Phone",
      value: contact.phoneDisplay,
      href: `tel:${contact.phoneHref}`,
      external: false,
      icon: <span className="text-lg leading-none">☎</span>,
    },
  ];

  return (
    <div className="rounded-2xl border border-line bg-paper p-7 shadow-sm md:p-9">
      <h3 className="text-2xl">Pick whichever suits you</h3>
      <p className="mt-2 text-ink-2">
        Tell us the property name and where it is. We will come to the call
        having already looked at your listings.
      </p>

      <ul className="mt-8 divide-y divide-line">
        {routes.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              {...(r.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-4 py-5 transition-colors"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper-2 text-kokum transition-colors group-hover:bg-kokum group-hover:text-paper">
                {r.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-ink">{r.label}</span>
                <span className="block truncate text-sm text-ink-3">
                  {r.value}
                </span>
              </span>
              <Arrow className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-kokum" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
