function parseRow(raw: string) {
  const [label, ...rest] = raw.split("：");
  return rest.length > 0
    ? { label, value: rest.join("：") }
    : { label: "", value: raw };
}

export default function TitleBlock({ items }: { items: string[] }) {
  return (
    <div className="border border-[var(--pr-line)] bg-[var(--pr-panel)]">
      <div className="border-b border-[var(--pr-line)] px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pr-cyan)]">
          Title Block
        </span>
      </div>
      {items.map((raw) => {
        const { label, value } = parseRow(raw);
        return (
          <div
            key={raw}
            className="flex flex-col gap-1 border-b border-[var(--pr-line)] px-4 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              {label}
            </span>
            <span className="text-sm text-primary sm:text-right">
              {value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
