import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  collections,
  getCollection,
  productsByCollection,
  type CollectionId,
} from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  return { title: collection?.name ?? "Collection" };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const items = productsByCollection(collection.id as CollectionId);
  const isDark = collection.tone === "dark";

  return (
    <div>
      <section
        className={`px-5 py-20 md:px-8 md:py-24 ${
          isDark ? "bg-noir text-ivory" : "bg-cream"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            light={isDark}
            eyebrow="Collection"
            title={collection.name}
            body={collection.blurb}
          />
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
