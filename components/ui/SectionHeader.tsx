interface SectionHeaderProps {
  title: string;
  description?: string;
  index?: string;
  className?: string;
}

export default function SectionHeader({ title, description, index = "", className = "" }: SectionHeaderProps) {
  return (
    <header className={`mb-12 grid gap-5 md:mb-16 md:grid-cols-12 ${className}`}>
      <div className="md:col-span-7">
        <p className="eyebrow mb-4">{index || "Field notes"}</p>
        <h2 className="display-type text-[clamp(3rem,7vw,6.4rem)] leading-[0.88] text-[var(--chalk)]">{title}</h2>
      </div>
      {description && <p className="max-w-lg self-end text-sm leading-7 text-[var(--ink-soft)] md:col-span-5 md:justify-self-end">{description}</p>}
    </header>
  );
}
