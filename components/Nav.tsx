"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <Logo className="h-7 w-7" />
            <span className="font-[family-name:var(--font-display)] text-[1.0625rem] tracking-tight">
              {site.name}
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.9375rem] transition-colors ${
                    active ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-kokum" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-kokum-deep px-5 py-2.5 text-[0.9375rem] font-medium text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-kokum hover:shadow-lg hover:shadow-kokum/35"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1/2 -rotate-45" : "top-3.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line/70 bg-paper transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3.5 font-[family-name:var(--font-display)] text-xl text-ink last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-kokum-deep px-6 py-3.5 font-medium text-paper transition-colors hover:bg-kokum"
          >
            Book a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
