import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products, testimonials, formatZar } from "@/data/products";
import { layerTiles, moodShops, sofaBundles } from "@/data/site";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* Hero — brand first, full-bleed; named collection as CTA focus */}
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
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 md:px-8 md:pb-24 md:pt-44">
          <p className="animate-rise text-[0.7rem] uppercase tracking-[0.35em] text-gold-soft">
            Featured · Noir & Mustard
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.04em] text-ivory md:text-7xl lg:text-8xl">
            ALL CLASSY
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-ivory/80 md:text-lg">
            We do All things CLASSY — cushions with presence, embroidery with meaning.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Button href="/collections/noir-mustard" variant="gold">
              Shop Noir & Mustard
            </Button>
            <Button href="/embroidery" variant="outlineLight">
              Custom embroidery
            </Button>
          </div>
        </div>
      </section>

      {/* Shop by mood */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Shop by mood"
            title="Find your palette."
            body="Enter by colour and feeling — then layer from there."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {moodShops.map((mood) => (
              <Link
                key={mood.id}
                href={mood.href}
                className="product-media group relative aspect-[3/4] overflow-hidden bg-cream"
              >
                <Image
                  src={mood.image}
                  alt={mood.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/75 via-noir/15 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 font-display text-xl text-ivory md:p-5 md:text-2xl">
                  {mood.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Style the sofa — designer combinations */}
      <section className="bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Style the sofa"
              title="Designer combinations."
              body="Curated cushion sets — balanced, elevated, or bold — ready to layer."
            />
            <Button href="/shop" variant="outline">
              Shop all
            </Button>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {sofaBundles.map((bundle) => (
              <Link key={bundle.id} href={bundle.href} className="group block">
                <div className="product-media relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={bundle.image}
                    alt={bundle.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
                  Set · from {formatZar(bundle.price)}
                </p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{bundle.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{bundle.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Layer your space */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Layer your space"
            title="Where to begin."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {layerTiles.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="group relative min-h-[280px] overflow-hidden bg-cream md:min-h-[340px]"
              >
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory md:p-8">
                  <p className="font-display text-3xl">{tile.title}</p>
                  <p className="mt-2 max-w-xs text-sm text-ivory/75">{tile.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Bestsellers" title="Pieces with presence." />
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
            eyebrow="Collection drop"
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
            <Button href="https://wa.me/27612341990" variant="outline">
              Send a sofa photo
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

      {/* Stronger reviews */}
      <section className="border-y border-charcoal/10 bg-mist px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Customer love"
              title="Loved in real homes."
              body="What Midrand and Joburg clients say after the cushions land."
            />
            <Button href="/contact" variant="outline">
              Ask Lily
            </Button>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex h-full flex-col border border-charcoal/10 bg-ivory p-7 md:p-8"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">★★★★★</p>
                <p className="mt-5 flex-1 font-display text-2xl leading-snug text-charcoal">
                  “{t.quote}”
                </p>
                <footer className="mt-8 border-t border-charcoal/10 pt-5 text-xs uppercase tracking-[0.2em] text-taupe">
                  {t.name} · {t.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <SectionHeading
            eyebrow="Questions, answered"
            title="Before you order."
            body="Sizes, embroidery, shipping, and styling help — or WhatsApp us anytime."
          />
          <FaqAccordion />
        </div>
      </section>

      {/* Instagram lookbook strip */}
      <section className="bg-cream px-5 py-24 md:px-8 md:py-28">
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
                className="product-media relative aspect-[3/4] overflow-hidden bg-mist"
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
