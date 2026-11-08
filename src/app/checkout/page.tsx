import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Checkout"
        title="Almost there."
        body="This is a static shell. Payment and order creation will arrive in a later phase."
      />

      <div className="mt-12 space-y-8">
        <fieldset className="space-y-4">
          <legend className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
            Contact
          </legend>
          <input
            className="w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
            placeholder="Email or phone"
            disabled
          />
        </fieldset>

        <fieldset className="grid gap-4 sm:grid-cols-2">
          <legend className="col-span-full text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
            Delivery
          </legend>
          <input className="border border-charcoal/15 bg-ivory px-4 py-3 text-sm sm:col-span-2" placeholder="Full name" disabled />
          <input className="border border-charcoal/15 bg-ivory px-4 py-3 text-sm sm:col-span-2" placeholder="Address" disabled />
          <input className="border border-charcoal/15 bg-ivory px-4 py-3 text-sm" placeholder="City" disabled />
          <input className="border border-charcoal/15 bg-ivory px-4 py-3 text-sm" placeholder="Postal code" disabled />
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
            Payment
          </legend>
          <div className="border border-dashed border-charcoal/20 bg-mist px-4 py-8 text-center text-sm text-taupe">
            Payment provider placeholder
          </div>
        </fieldset>

        <Button href="/contact" variant="primary">
          Place order (coming soon)
        </Button>
      </div>
    </div>
  );
}
