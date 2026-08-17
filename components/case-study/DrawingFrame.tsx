const CORNERS = [
  "-top-px -left-px border-t border-l",
  "-top-px -right-px border-t border-r",
  "-bottom-px -left-px border-b border-l",
  "-bottom-px -right-px border-b border-r",
];

function RegistrationTicks() {
  return (
    <>
      {CORNERS.map((cls) => (
        <span
          key={cls}
          aria-hidden="true"
          className={`pointer-events-none absolute h-3 w-3 border-[var(--pr-cyan)]/70 ${cls}`}
        />
      ))}
    </>
  );
}

export default function DrawingFrame({
  figure,
  caption,
  className = "",
  children,
}: {
  figure: string;
  caption: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={`mt-6 ${className}`}>
      <div className="relative border border-[var(--pr-line)] bg-[var(--pr-panel)] p-1">
        <RegistrationTicks />
        <div className="overflow-hidden">{children}</div>
      </div>
      <figcaption className="mt-3 flex items-baseline gap-2 font-mono text-xs tracking-wide">
        <span className="text-[var(--pr-cyan)]">{figure}</span>
        <span className="text-muted">{caption}</span>
      </figcaption>
    </figure>
  );
}
