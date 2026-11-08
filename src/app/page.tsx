import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products, testimonials } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* Hero — one composition, brand first, full-bleed image */}
      <section className="relative min-h-[100svh] overflow-hidden bg-noir">
        <Image
          src="/images/hero/cover.jpg"
          alt="All Classy embroidered cushions"
          fill
          priority
          className="hero-image object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/45 to-noir/25" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <p className="animate-rise text-[0.7rem] uppercase tracking-[0.35em] text-gold-soft">
            Pretoria · Home décor
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.04em] text-ivory md:text-7xl lg:text-8xl">
            ALL CLASSY
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-ivory/80 md:text-lg">
            We do All things CLASSY — cushions with presence, embroidery with meaning.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Button href="/shop" variant="gold">
              Shop cushions
            </Button>
            <Button href="/embroidery" variant="outlineLight">
              Custom embroidery
            </Button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src="/images/brand/profile.jpg"
            alt="Mustard All Classy cushion"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="The atelier"
            title="Soft luxury, stitched with intent."
            body="From ivory karate-chop pillows to noir embroidery and mustard pattern, each piece is made to feel considered — not cluttered. Designed in Pretoria for homes that love quiet drama."
          />
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Our story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-mist px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured" title="Pieces with presence." />
            <Button href="/shop" variant="outline">
              View all
            </Button>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Dark collection strip */}
      <section className="relative overflow-hidden bg-noir text-ivory">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/hero/cover.jpg"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/90 to-noir/55" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:py-28">
          <SectionHeading
            light
            eyebrow="Collection"
            title="Noir & Mustard"
            body="Bold black velvet, cream embroidery, and mustard geometry — for rooms that want contrast without chaos."
          />
          <div className="flex flex-col items-start gap-6 md:items-end md:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-ivory/65">
              A darker accent from the All Classy world — the same craft, a stronger silhouette.
            </p>
            <Button href="/collections/noir-mustard" variant="gold">
              Enter the collection
            </Button>
          </div>
        </div>
      </section>

      {/* Embroidery teaser */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div className="order-2 md:order-1">
          <SectionHeading
            eyebrow="Made for you"
            title="Custom embroidery."
            body="Initials, a short phrase, a date that matters — stitched in gold-tone or tone-on-tone. Start on a product, or build the full request here."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/embroidery" variant="primary">
              Design yours
            </Button>
            <Button href="/shop" variant="outline">
              Browse bases
            </Button>
          </div>
        </div>
        <div className="relative order-1 aspect-square overflow-hidden bg-cream md:order-2">
          <Image
            src="/images/lookbook/post-06.jpg"
            alt="Embroidered cushion detail"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Feedback */}
      <section className="border-y border-charcoal/10 bg-cream px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Client feedback" title="Loved in real homes." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-t border-gold/40 pt-6">
                <p className="font-display text-2xl leading-snug text-charcoal">“{t.quote}”</p>
                <footer className="mt-5 text-xs uppercase tracking-[0.2em] text-taupe">
                  {t.name} · {t.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram lookbook strip */}
      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="@allclassycollections"
              title="From the lookbook."
              body="Lifestyle frames pulled from the All Classy feed."
            />
            <Button href="/lookbook" variant="outline">
              Full lookbook
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <Link
                key={n}
                href="/lookbook"
                className="product-media relative aspect-[3/4] overflow-hidden bg-cream"
              >
                <Image
                  src={`/images/lookbook/post-${String(n).padStart(2, "0")}.jpg`}
                  alt={`All Classy look ${n}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
