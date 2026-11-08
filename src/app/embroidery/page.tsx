"use client";

import { AssetImage as Image } from "@/components/AssetImage";
import { useState } from "react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/products";

const bases = products.filter((p) => p.embroideryOptional).slice(0, 6);

export default function EmbroideryPage() {
  const [base, setBase] = useState(bases[0]?.slug ?? "");
  const [text, setText] = useState("ALL CLASSY");
  const [placement, setPlacement] = useState("Centre");
  const [thread, setThread] = useState("Gold");

  return (
    <div>
      <section className="border-b border-charcoal/10 bg-cream px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Custom embroidery"
            title="Your words. Our stitch."
            body="Choose a cushion base, preview your monogram or phrase, then request a quote. This flow is a UI mock — WhatsApp us to confirm."
          />
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 md:px-8 md:py-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist">
          <Image
            src={bases.find((b) => b.slug === base)?.image ?? "/images/brand/profile.jpg"}
            alt="Embroidery preview base"
            fill
            className="object-cover opacity-90"
            sizes="50vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-3xl tracking-[0.15em] text-gold drop-shadow md:text-4xl">
              {text || "Your text"}
            </p>
          </div>
        </div>

        <form
          className="space-y-7"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
              Cushion base
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {bases.map((b) => (
                <button
                  key={b.slug}
                  type="button"
                  onClick={() => setBase(b.slug)}
                  className={`relative aspect-square overflow-hidden border-2 ${
                    base === b.slug ? "border-gold" : "border-transparent"
                  }`}
                >
                  <Image src={b.image} alt={b.name} fill className="object-cover" sizes="120px" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
              Embroidery text
            </label>
            <input
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 24))}
              className="mt-3 w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              placeholder="Up to 24 characters"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
                Placement
              </label>
              <select
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
                className="mt-3 w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              >
                {["Centre", "Corner", "Lower edge"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">
                Thread
              </label>
              <select
                value={thread}
                onChange={(e) => setThread(e.target.value)}
                className="mt-3 w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              >
                {["Gold", "Ivory", "Charcoal", "Mustard"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact" variant="primary">
              Request quote
            </Button>
            <Button href="https://wa.me/27612341990" variant="outline">
              WhatsApp Lily
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
