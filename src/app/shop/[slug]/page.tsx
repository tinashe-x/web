import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { formatZar, getProduct, products } from "@/data/products";
import { ProductOptions } from "./ProductOptions";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-taupe">
        <Link href="/shop" className="hover:text-charcoal">
          Shop
        </Link>{" "}
        / {product.name}
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex h-[calc(100dvh-9rem)] max-h-[calc(100dvh-9rem)] flex-col gap-3 lg:sticky lg:top-24">
          <div className="relative min-h-0 flex-1 overflow-hidden bg-cream">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid h-[18%] min-h-[4.5rem] shrink-0 grid-cols-3 gap-3">
            {product.images.map((src) => (
              <div key={src} className="relative h-full overflow-hidden bg-cream">
                <Image src={src} alt="" fill className="object-cover" sizes="15vw" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-taupe">
            {product.collection.replace("-", " & ")}
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-wide text-charcoal md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-charcoal/80">{formatZar(product.price)}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            {product.description}
          </p>

          <ProductOptions product={product} />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/cart" variant="primary">
              Add to cart
            </Button>
            {product.embroideryOptional && (
              <Button href="/embroidery" variant="outline">
                Add embroidery
              </Button>
            )}
          </div>
          <p className="mt-4 text-xs text-taupe">
            Preview only — cart actions are not live yet.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl tracking-wide">You may also like</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
