export type CollectionId = "white" | "neutrals" | "noir-mustard" | "embroidered";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  collection: CollectionId;
  description: string;
  image: string;
  images: string[];
  colors: string[];
  sizes: string[];
  embroideryOptional?: boolean;
  featured?: boolean;
};

export const collections: {
  id: CollectionId;
  name: string;
  blurb: string;
  image: string;
  tone: "light" | "dark";
}[] = [
  {
    id: "white",
    name: "White Happiness",
    blurb: "Ivory and cloud tones that soften every room.",
    image: "/images/lookbook/post-04.jpg",
    tone: "light",
  },
  {
    id: "neutrals",
    name: "Neutrals",
    blurb: "Taupe, sand, and soft stone for everyday class.",
    image: "/images/lookbook/post-05.jpg",
    tone: "light",
  },
  {
    id: "noir-mustard",
    name: "Noir & Mustard",
    blurb: "Bold contrast — black velvet meets ochre pattern.",
    image: "/images/hero/cover.jpg",
    tone: "dark",
  },
  {
    id: "embroidered",
    name: "Embroidered",
    blurb: "Monograms and custom stitchwork, made for you.",
    image: "/images/brand/profile.jpg",
    tone: "light",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "ivory-karate-chop",
    name: "Ivory Karate Chop",
    price: 450,
    collection: "white",
    description:
      "Signature plump fill with the All Classy karate chop. Soft ivory velvet that catches the light.",
    image: "/images/lookbook/post-01.jpg",
    images: [
      "/images/lookbook/post-01.jpg",
      "/images/lookbook/post-04.jpg",
      "/images/brand/profile.jpg",
    ],
    colors: ["Ivory", "Cream"],
    sizes: ["45×45", "50×50", "60×60"],
    embroideryOptional: true,
    featured: true,
  },
  {
    id: "2",
    slug: "bedroom-cloud-set",
    name: "Bedroom Cloud Set",
    price: 1200,
    collection: "white",
    description:
      "Layered whites for the bed — textured fronts styled for that hotel finish.",
    image: "/images/lookbook/post-03.jpg",
    images: ["/images/lookbook/post-03.jpg", "/images/lookbook/post-04.jpg"],
    colors: ["White", "Ivory"],
    sizes: ["Set of 4"],
    embroideryOptional: true,
    featured: true,
  },
  {
    id: "3",
    slug: "lounge-taupe",
    name: "Lounge Taupe",
    price: 480,
    collection: "neutrals",
    description:
      "Warm taupe weave for sofas and reading chairs. Quiet luxury, everyday comfort.",
    image: "/images/lookbook/post-05.jpg",
    images: ["/images/lookbook/post-05.jpg", "/images/lookbook/post-02.jpg"],
    colors: ["Taupe", "Sand"],
    sizes: ["45×45", "50×50"],
    embroideryOptional: true,
    featured: true,
  },
  {
    id: "4",
    slug: "sofa-story",
    name: "Sofa Story",
    price: 520,
    collection: "neutrals",
    description:
      "Lifestyle-ready scatter with deep fill — styled as seen on our Midrand shoots.",
    image: "/images/lookbook/post-02.jpg",
    images: ["/images/lookbook/post-02.jpg", "/images/lookbook/post-08.jpg"],
    colors: ["Stone", "Greige"],
    sizes: ["50×50", "60×60"],
    featured: true,
  },
  {
    id: "5",
    slug: "noir-maze",
    name: "Noir Maze Embroidery",
    price: 680,
    collection: "noir-mustard",
    description:
      "Intricate cream-on-black embroidery with companion black velvet cushions.",
    image: "/images/hero/cover.jpg",
    images: ["/images/hero/cover.jpg", "/images/products/fb-04.jpg"],
    colors: ["Black", "Cream"],
    sizes: ["45×45", "50×50"],
    embroideryOptional: true,
    featured: true,
  },
  {
    id: "6",
    slug: "mustard-geo",
    name: "Mustard Geo",
    price: 560,
    collection: "noir-mustard",
    description:
      "Mustard ground with white organic geometry — the Facebook cover favourite.",
    image: "/images/brand/profile.jpg",
    images: ["/images/brand/profile.jpg", "/images/hero/cover.jpg"],
    colors: ["Mustard", "White"],
    sizes: ["45×45", "50×50"],
    featured: true,
  },
  {
    id: "7",
    slug: "evening-velvet",
    name: "Evening Velvet",
    price: 490,
    collection: "noir-mustard",
    description: "Matte black velvet with gold piping energy. Dramatic and soft.",
    image: "/images/lookbook/post-07.jpg",
    images: ["/images/lookbook/post-07.jpg", "/images/hero/cover.jpg"],
    colors: ["Black"],
    sizes: ["45×45", "50×50"],
  },
  {
    id: "8",
    slug: "monogram-cream",
    name: "Monogram Cream",
    price: 620,
    collection: "embroidered",
    description:
      "Cream cushion ready for your initials or a short phrase in gold-tone stitch.",
    image: "/images/lookbook/post-06.jpg",
    images: ["/images/lookbook/post-06.jpg", "/images/brand/logo-cushion.jpg"],
    colors: ["Cream", "Ivory"],
    sizes: ["45×45", "50×50"],
    embroideryOptional: true,
    featured: true,
  },
  {
    id: "9",
    slug: "textured-charcoal",
    name: "Textured Charcoal",
    price: 500,
    collection: "neutrals",
    description: "Deep charcoal weave that grounds a light lounge palette.",
    image: "/images/lookbook/post-08.jpg",
    images: ["/images/lookbook/post-08.jpg", "/images/lookbook/post-11.jpg"],
    colors: ["Charcoal"],
    sizes: ["45×45", "60×60"],
  },
  {
    id: "10",
    slug: "layered-lounge",
    name: "Layered Lounge",
    price: 980,
    collection: "neutrals",
    description: "A styled trio for the sofa — mix of solid and patterned fronts.",
    image: "/images/lookbook/post-09.jpg",
    images: ["/images/lookbook/post-09.jpg", "/images/lookbook/post-12.jpg"],
    colors: ["Mixed"],
    sizes: ["Set of 3"],
  },
  {
    id: "11",
    slug: "soft-fold",
    name: "Soft Fold",
    price: 470,
    collection: "white",
    description: "Plush white with a soft fold — made for beds and daybeds.",
    image: "/images/lookbook/post-10.jpg",
    images: ["/images/lookbook/post-10.jpg", "/images/lookbook/post-01.jpg"],
    colors: ["White"],
    sizes: ["45×45", "50×50"],
    embroideryOptional: true,
  },
  {
    id: "12",
    slug: "atelier-stitch",
    name: "Atelier Stitch",
    price: 650,
    collection: "embroidered",
    description: "Custom embroidery showcase piece — request your own wording.",
    image: "/images/lookbook/post-12.jpg",
    images: ["/images/lookbook/post-12.jpg", "/images/brand/profile.jpg"],
    colors: ["Ivory", "Black"],
    sizes: ["45×45", "50×50"],
    embroideryOptional: true,
  },
];

export const testimonials = [
  {
    quote:
      "I sent Lily a photo of our sofa and she built the perfect mix — ivory, taupe, and one embroidered piece. The lounge finally looks finished.",
    name: "Thandi M.",
    place: "Midrand",
  },
  {
    quote:
      "Embroidery arrived perfect — gold stitch on cream is everything. Guests keep asking where we bought them.",
    name: "Lebo K.",
    place: "Johannesburg",
  },
  {
    quote:
      "The fill holds the karate chop for weeks. Texture and colour feel richer in person than in the photos.",
    name: "Ayesha R.",
    place: "Centurion",
  },
  {
    quote:
      "Noir & Mustard is dramatic without being loud. Exactly the quiet luxury we wanted for the guest suite.",
    name: "Naledi S.",
    place: "Sandton",
  },
  {
    quote:
      "Ordered a bedroom set and a monogrammed gift cushion. Communication on WhatsApp was clear, and delivery was on time.",
    name: "Michelle D.",
    place: "Midrand",
  },
];

export function formatZar(amount: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCollection(id: string) {
  return collections.find((c) => c.id === id);
}

export function productsByCollection(id: CollectionId) {
  return products.filter((p) => p.collection === id);
}
