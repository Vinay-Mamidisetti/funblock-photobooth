type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-heading mt-2 max-w-3xl text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
