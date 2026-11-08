import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { formatZar, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="product-media relative aspect-[4/5] overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width:768px) 50vw, 25vw"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl tracking-wide text-charcoal group-hover:text-charcoal/80">
            {product.name}
          </h3>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-taupe">
            {product.collection.replace("-", " & ")}
          </p>
        </div>
        <p className="shrink-0 text-sm text-charcoal/80">{formatZar(product.price)}</p>
      </div>
    </Link>
  );
}
