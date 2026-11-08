"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/embroidery", label: "Embroidery" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/";

  const brand = overHero ? "text-ivory" : "text-charcoal";
  const sub = overHero ? "text-gold-soft" : "text-taupe";
  const nav = overHero ? "text-ivory/85 hover:text-ivory" : "text-charcoal/70 hover:text-charcoal";
  const navActive = overHero ? "text-gold-soft" : "text-charcoal";

  return (
    <header
      className={
        overHero
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="relative z-50" onClick={() => setOpen(false)}>
          <span className={`font-display text-2xl tracking-[0.08em] md:text-[1.7rem] ${brand}`}>
            ALL CLASSY
          </span>
          <span className={`mt-0.5 block text-[0.65rem] font-medium uppercase tracking-[0.35em] ${sub}`}>
            Collections
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.78rem] uppercase tracking-[0.22em] transition ${
                  active ? navActive : nav
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-50 flex items-center gap-4">
          <Link
            href="/cart"
            className={`text-[0.78rem] uppercase tracking-[0.22em] ${nav}`}
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
          </nav>
        </div>
      )}
    </header>
  );
}
