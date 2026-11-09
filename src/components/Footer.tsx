import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.06em] text-charcoal">ALL CLASSY</p>
          <p className="mt-2 text-sm uppercase tracking-[0.28em] text-taupe">Collections</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal/70">
            We do All things CLASSY — handcrafted cushions from Midrand, made to soften and elevate your home.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-taupe">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            <li><Link href="/shop" className="hover:text-charcoal">Shop</Link></li>
            <li><Link href="/collections" className="hover:text-charcoal">Collections</Link></li>
            <li><Link href="/embroidery" className="hover:text-charcoal">Custom Embroidery</Link></li>
            <li><Link href="/lookbook" className="hover:text-charcoal">Lookbook</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-taupe">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            <li>Midrand, South Africa</li>
            <li>
              <a href="tel:+27612341990" className="hover:text-charcoal">
                +27 61 234 1990
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/27612341990"
                target="_blank"
                rel="noreferrer"
                className="hover:text-charcoal"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/allclassycollections/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-charcoal"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/allclassycollectios/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-charcoal"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal/10 px-5 py-5 text-center text-xs tracking-wide text-taupe md:px-8">
        © 2026 All Classy Collections. UI preview — checkout coming soon.
      </div>
    </footer>
  );
}
