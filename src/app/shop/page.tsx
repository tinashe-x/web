import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { collections, products } from "@/data/products";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Shop"
        title="Cushions for every corner."
        body="Browse the full All Classy edit. Filters are visual only in this preview."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        <span className="border border-charcoal bg-charcoal px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-ivory">
          All
        </span>
        {collections.map((c) => (
          <span
            key={c.id}
            className="border border-charcoal/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-charcoal/60"
          >
            {c.name}
          </span>
        ))}
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
