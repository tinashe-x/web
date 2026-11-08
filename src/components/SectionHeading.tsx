export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${light ? "text-ivory" : "text-charcoal"}`}>
      {eyebrow && (
        <p
          className={`text-[0.7rem] uppercase tracking-[0.3em] ${
            light ? "text-gold-soft" : "text-taupe"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-4xl leading-tight tracking-wide md:text-5xl">
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-ivory/75" : "text-charcoal/70"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
