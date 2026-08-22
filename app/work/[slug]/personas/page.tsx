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

export default async function PersonasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const personas = project?.caseStudy?.personas;
  if (!project || !personas) notFound();

  return (
    <>
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {personas.items.map((item) => (
            <div
              key={item.title}
              className="border border-[var(--pr-line)] bg-[var(--pr-panel)] p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--pr-cyan)]/50 font-mono text-lg font-semibold text-[var(--pr-cyan)]"
                  aria-hidden="true"
                >
                  {item.title.trim().charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-primary">{item.title}</p>
                  <span className="mt-1 inline-block border border-[var(--pr-line)] px-2 py-0.5 font-mono text-[11px] tracking-wide text-muted">
                    {item.context}
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-cyan)]">
                    Goal
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.goal}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-cyan)]">
                    Pain point
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.painPoint}</p>
                </div>
                {item.docs && (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-cyan)]">
                      Docs
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.docs}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
