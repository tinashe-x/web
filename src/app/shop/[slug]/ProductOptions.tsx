"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

export function ProductOptions({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [embroidery, setEmbroidery] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="mt-8 space-y-7">
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">Colour</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className={`border px-4 py-2 text-sm transition ${
                color === c
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-charcoal/20 text-charcoal hover:border-charcoal/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-taupe">Size</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`border px-4 py-2 text-sm transition ${
                size === s
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-charcoal/20 text-charcoal hover:border-charcoal/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {product.embroideryOptional && (
        <div className="border border-charcoal/10 bg-mist p-5">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={embroidery}
              onChange={(e) => setEmbroidery(e.target.checked)}
              className="size-4 accent-gold"
            />
            <span className="text-sm text-charcoal">Add custom embroidery (+ quote)</span>
          </label>
          {embroidery && (
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g. initials or short phrase"
              className="mt-4 w-full border border-charcoal/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
            />
          )}
        </div>
      )}
    </div>
  );
}
