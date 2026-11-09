"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/embroidery", label: "Embroidery" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function SocialIcon({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/";

  const brand = overHero ? "text-ivory" : "text-charcoal";
  const sub = overHero ? "text-gold-soft" : "text-taupe";
  const nav = overHero ? "text-ivory/85 hover:text-ivory" : "text-charcoal/70 hover:text-charcoal";
  const navActive = overHero ? "text-gold-soft" : "text-charcoal";
  const icon = overHero ? "text-ivory/80 hover:text-ivory" : "text-charcoal/65 hover:text-charcoal";

  return (
    <header
      className={
        overHero
          ? "absolute inset-x-0 top-[2.4rem] z-50 md:top-[2.55rem]"
          : "sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4 md:px-8 md:py-5">
        <div className="hidden items-center gap-3 md:flex">
          <SocialIcon
            href="https://www.instagram.com/allclassycollections/"
            label="Instagram"
            className={icon}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </SocialIcon>
          <SocialIcon
            href="https://wa.me/27612341990"
            label="WhatsApp"
            className={icon}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.98.58 3.82 1.58 5.38L2 22l4.96-1.63a9.86 9.86 0 0 0 5.08 1.4h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.75 13.99c-.24.68-1.4 1.24-1.94 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
            </svg>
          </SocialIcon>
          <SocialIcon
            href="https://www.facebook.com/allclassycollectios/"
            label="Facebook"
            className={icon}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M14 9h3V6h-3c-1.9 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9Z" />
            </svg>
          </SocialIcon>
        </div>
        <div className="md:hidden" />

        <Link
          href="/"
          className="relative z-50 justify-self-center text-center"
          onClick={() => setOpen(false)}
        >
          <span className={`font-display text-2xl tracking-[0.1em] md:text-[1.85rem] ${brand}`}>
            ALL CLASSY
          </span>
          <span className={`mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.28em] ${sub}`}>
            We do All things CLASSY
          </span>
        </Link>

        <div className="relative z-50 flex items-center justify-end gap-4">
          <Link
            href="/cart"
            className={`hidden text-[0.72rem] uppercase tracking-[0.22em] sm:inline ${nav}`}
          >
            Cart (0)
          </Link>
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center lg:hidden ${brand}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <nav className="hidden justify-center gap-8 border-t border-transparent pb-4 pt-1 lg:flex">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.72rem] uppercase tracking-[0.22em] transition ${
                active ? navActive : nav
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-noir/95 px-8 pt-28 lg:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ivory"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ivory"
            >
              Cart (0)
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
