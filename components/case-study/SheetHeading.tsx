export default function SheetHeading({
  sheet,
  label,
  heading,
}: {
  sheet: string;
  label: string;
  heading: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-cyan)]">
        <span>Sheet {sheet}</span>
        <span className="h-px w-8 bg-[var(--pr-line)]" aria-hidden="true" />
        <span className="text-muted">{label}</span>
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        {heading}
      </h2>
    </div>
  );
}
