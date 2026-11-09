import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Say hello."
          body="Orders, embroidery quotes, and styling questions — Midrand based, shipping across South Africa."
        />
        <ul className="mt-10 space-y-4 text-sm text-charcoal/80">
          <li>
            <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
              Phone / WhatsApp
            </span>
            <a href="tel:+27612341990" className="mt-1 inline-block text-lg text-charcoal">
              +27 61 234 1990
            </a>
          </li>
          <li>
            <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
              Location
            </span>
            <p className="mt-1 text-lg text-charcoal">Midrand, South Africa</p>
          </li>
          <li>
            <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
              Social
            </span>
            <div className="mt-2 flex gap-4">
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
            </div>
          </li>
        </ul>
        <div className="mt-8">
          <Button href="https://wa.me/27612341990" variant="gold">
            Open WhatsApp
          </Button>
        </div>
      </div>

      <form className="space-y-4 border border-charcoal/10 bg-mist p-6 md:p-8">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
          Message form (UI only)
        </p>
        <input
          className="w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
          placeholder="Name"
          disabled
        />
        <input
          className="w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
          placeholder="Email"
          disabled
        />
        <textarea
          className="min-h-36 w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
          placeholder="How can we help?"
          disabled
        />
        <button
          type="button"
          className="bg-charcoal px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-ivory opacity-60"
          disabled
        >
          Send message
        </button>
      </form>
    </div>
  );
}
