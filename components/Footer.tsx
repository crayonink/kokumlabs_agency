import Link from "next/link";
import { contact, nav, site, whatsappUrl } from "@/lib/site";
import Logo from "./Logo";
import { WhatsAppIcon } from "./ui";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-[family-name:var(--font-display)] text-xl tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-2">
              An AI-native platform for hotels, resorts, homestays and mid-term
              rentals. Built by engineers from Amazon and Billdesk.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Site</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-2 transition-colors hover:text-kokum"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Get in touch</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-kokum"
                >
                  <WhatsAppIcon />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ink-2 transition-colors hover:text-kokum"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="text-ink-2 transition-colors hover:text-kokum"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-5">
              {contact.social.linkedin && (
                <a
                  href={contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-3 transition-colors hover:text-kokum"
                >
                  LinkedIn
                </a>
              )}
              {contact.social.instagram && (
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-3 transition-colors hover:text-kokum"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-display)] italic">
            Made for properties that would rather be hosting.
          </p>
        </div>
      </div>
    </footer>
  );
}
