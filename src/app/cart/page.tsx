import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { formatZar, products } from "@/data/products";

export const metadata = { title: "Cart" };

export default function CartPage() {
  const sample = products.slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Cart"
        title="Your selection"
        body="Static preview with sample items — totals and checkout are not connected yet."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
        <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
          {sample.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-cream">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
              </div>
              <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-start">
                <div>
                  <Link href={`/shop/${item.slug}`} className="font-display text-2xl tracking-wide">
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-taupe">45×45 · Ivory</p>
                  <p className="mt-2 text-xs text-taupe">Qty 1</p>
                </div>
                <p className="mt-3 text-sm sm:mt-0">{formatZar(item.price)}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-charcoal/10 bg-mist p-6">
          <h2 className="font-display text-2xl">Order summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-taupe">Subtotal</dt>
              <dd>{formatZar(sample.reduce((s, p) => s + p.price, 0))}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-taupe">Delivery</dt>
              <dd>Calculated at checkout</dd>
            </div>
            <div className="gold-rule my-2" />
            <div className="flex justify-between text-base">
              <dt>Total</dt>
              <dd>{formatZar(sample.reduce((s, p) => s + p.price, 0))}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <Button href="/checkout" variant="primary" className="w-full">
              Checkout
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
