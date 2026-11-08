import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { collections } from "@/data/products";

export const metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Collections"
        title="Four ways to feel classy."
        body="White Happiness, Neutrals, Noir & Mustard, and Embroidered — each with its own mood."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {collections.map((c) => (
          <Link
            key={c.id}
            href={`/collections/${c.id}`}
            className="group relative min-h-[360px] overflow-hidden"
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div
              className={`absolute inset-0 ${
                c.tone === "dark"
                  ? "bg-gradient-to-t from-noir via-noir/50 to-transparent"
                  : "bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent"
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold-soft">Collection</p>
              <h2 className="mt-2 font-display text-4xl tracking-wide">{c.name}</h2>
              <p className="mt-3 max-w-sm text-sm text-ivory/75">{c.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
