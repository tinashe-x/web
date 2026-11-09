import { AssetImage as Image } from "@/components/AssetImage";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "About" };

const processSteps = [
  {
    title: "Conversation",
    body: "Share a photo of your space, the mood you want, or a phrase that matters. We start on WhatsApp with Lily.",
  },
  {
    title: "Base & fabric",
    body: "Choose from ivory, neutrals, noir, mustard, or embroidered bases — sized for lounge, bedroom, or gifting.",
  },
  {
    title: "Stitch & finish",
    body: "Custom embroidery is laid out, confirmed, then stitched. Every piece is finished for that signature karate chop.",
  },
  {
    title: "Delivered",
    body: "Packed in Midrand and shipped nationwide — ready to soften and elevate your home.",
  },
];

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
            body="All Classy Collections is a Midrand home décor brand built around cushions that feel considered — plump fills, rich textiles, and embroidery that turns a scatter into a signature."
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70">
            From soft white happiness to noir-and-mustard drama, every piece is made to elevate the lounge, bedroom, or gifting moment. Quiet luxury, stitched with intent.
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

      <section className="bg-noir px-5 py-20 text-ivory md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-soft">Founder note</p>
          <blockquote className="mt-8 font-display text-3xl leading-snug tracking-wide md:text-4xl lg:text-5xl">
            “True luxury whispers. It’s in the weight of a well-filled cushion, the precision of a hand-guided stitch, and the calm of a room that finally feels finished.”
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-ivory/55">
            Lily · All Classy Collections · Midrand
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="From WhatsApp to your sofa."
          body="An in-house, hands-on process — whether you’re buying a ready piece or commissioning embroidery."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="border-t border-gold/40 pt-6">
              <p className="text-[0.68rem] uppercase tracking-[0.25em] text-taupe">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-charcoal/10 bg-mist px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Bespoke"
              title="Embroidery with meaning."
              body="Initials, a short phrase, a date that matters — stitched in gold-tone or tone-on-tone. We confirm the layout before we sew, so the piece arrives exactly as imagined."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/embroidery" variant="primary">
                Start a custom piece
              </Button>
              <Button href="https://wa.me/27612341990" variant="outline">
                WhatsApp Lily
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-cream">
            <Image
              src="/images/lookbook/post-06.jpg"
              alt="Embroidered All Classy cushion detail"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
