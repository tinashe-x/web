import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src="/images/hero/cover.jpg"
            alt="All Classy cushions"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="About"
            title="We do All things CLASSY."
            body="All Classy Collections is a Pretoria home décor brand built around cushions that feel considered — plump fills, rich textiles, and embroidery that turns a scatter into a signature."
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70">
            From soft white happiness to noir-and-mustard drama, every piece is made to elevate the lounge, bedroom, or gifting moment. Follow the journey on Instagram and Facebook, or message Lily for custom work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/shop" variant="primary">
              Shop the edit
            </Button>
            <Button href="/contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
