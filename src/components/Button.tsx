import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-charcoal text-ivory hover:bg-noir",
  gold:
    "bg-gold text-noir hover:bg-gold-soft",
  outline:
    "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  outlineLight:
    "border border-ivory/40 text-ivory hover:bg-ivory hover:text-noir",
} as const;

type Variant = keyof typeof variants;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
