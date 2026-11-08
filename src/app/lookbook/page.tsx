import { AssetImage as Image } from "@/components/AssetImage";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Lookbook" };

const shots = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/lookbook/post-${String(i + 1).padStart(2, "0")}.jpg`,
  tall: i % 5 === 0 || i % 7 === 0,
}));

export default function LookbookPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="@allclassycollections"
        title="Lookbook"
        body="Frames from the All Classy Instagram — textures, rooms, and the signature karate chop."
      />
      <div className="mt-14 columns-2 gap-3 md:columns-3 md:gap-4">
        {shots.map((shot, i) => (
          <div
            key={shot.src}
            className={`relative mb-3 overflow-hidden bg-cream md:mb-4 ${
              shot.tall ? "aspect-[3/5]" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={shot.src}
              alt={`All Classy lookbook ${i + 1}`}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-taupe">
        Follow{" "}
        <a
          href="https://www.instagram.com/allclassycollections/"
          target="_blank"
          rel="noreferrer"
          className="text-charcoal underline-offset-4 hover:underline"
        >
          @allclassycollections
        </a>{" "}
        for new drops.
      </p>
    </div>
  );
}
