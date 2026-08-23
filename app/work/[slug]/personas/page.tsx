import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy?.personas)
    .map((p) => ({ slug: p.slug }));
}

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
          className={`pointer-events-none absolute z-10 h-3 w-3 border-[var(--pr-cyan)]/70 ${cls}`}
        />
      ))}
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-[var(--pr-line)] px-4 py-3 first:border-t-0 sm:flex-row sm:gap-4">
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pr-cyan)] sm:w-24">
        {label}
      </span>
      <span className="text-sm text-muted">{value}</span>
    </div>
  );
}

type PersonaItem = NonNullable<
  NonNullable<(typeof projects)[number]["caseStudy"]>["personas"]
>["items"][number];

function PersonaCard({ item }: { item: PersonaItem }) {
  return (
    <div className="border border-[var(--pr-line)] bg-[var(--pr-panel)]">
      <div className="relative aspect-[4/5] overflow-hidden border-b border-[var(--pr-line)]">
        <RegistrationTicks />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.photo}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover [filter:saturate(.75)_contrast(1.08)_brightness(.92)]"
        />
        <div
          className="absolute inset-0 bg-[var(--pr-cyan)] mix-blend-color"
          style={{ opacity: 0.4 }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--pr-panel)] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="p-4">
        <p className="font-semibold text-primary">{item.title}</p>
        <span className="mt-2 inline-block border border-[var(--pr-line)] px-2 py-0.5 font-mono text-[11px] tracking-wide text-muted">
          {item.context}
        </span>
      </div>

      <div>
        <SpecRow label="Goal" value={item.goal} />
        <SpecRow label="Pain point" value={item.painPoint} />
        {item.docs && <SpecRow label="Docs" value={item.docs} />}
      </div>
    </div>
  );
}

function ZoneGroup({
  label,
  note,
  items,
}: {
  label: string;
  note: string;
  items: PersonaItem[];
}) {
  return (
    <div className="mt-14 first:mt-0">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-cyan)]">
        <span>{label}</span>
        <span className="h-px flex-1 bg-[var(--pr-line)]" aria-hidden="true" />
        <span className="text-muted normal-case tracking-normal">{note}</span>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <PersonaCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default async function PersonasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const personas = project?.caseStudy?.personas;
  if (!project || !personas) notFound();

  const office = personas.items.filter((i) => i.zone === "office");
  const site = personas.items.filter((i) => i.zone === "site");
  const both = personas.items.filter((i) => i.zone === "both");

  return (
    <div className="case-study">
      <Header />
      <main className="content-wrap py-24 md:py-36">
        <Link
          href={`/work/${slug}`}
          className="font-mono text-sm text-[var(--pr-cyan)] hover:underline"
        >
          ← 返回案例
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
          {personas.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{personas.intro}</p>

        <ZoneGroup
          label="办公室 · Desktop"
          note={`${office.length} 个角色`}
          items={office}
        />
        <ZoneGroup
          label="工地 · Tablet"
          note={`${site.length} 个角色，同一份文档要在这里也一样好用`}
          items={site}
        />
        {both.length > 0 && (
          <ZoneGroup
            label="两栖：办公室 + 工地"
            note={`${both.length} 个角色`}
            items={both}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
