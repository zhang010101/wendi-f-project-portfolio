import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function CaptionedImage({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="mt-6">
      <div className="overflow-hidden rounded-2xl border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption} className="w-full object-cover" />
      </div>
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

function renderWithEmphasis(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-accent font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="content-wrap py-24 md:py-36">
        {project.caseStudy ? (
          <>
            <p className="text-sm text-muted">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
              {project.caseStudy.hero.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {project.caseStudy.hero.subtitle}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
              {project.caseStudy.hero.keyInfo.map((info) => (
                <li key={info} className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {info}
                </li>
              ))}
            </ul>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            {project.caseStudy.background && (
              <section className="mt-24 md:mt-32">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {project.caseStudy.background.heading}
                </h2>
                <div className="mt-6 max-w-2xl space-y-4 text-muted">
                  {project.caseStudy.background.paragraphs.map((p, i) => (
                    <p key={i}>{renderWithEmphasis(p)}</p>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6">
                  <div className="space-y-3">
                    {project.caseStudy.background.systems.map((s) => (
                      <div
                        key={s.tool}
                        className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                      >
                        <span>{s.tool}</span>
                        <span className="text-muted">{s.use}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden text-2xl text-muted sm:block">→</div>
                  <div className="flex items-center justify-center rounded-2xl border border-accent/40 bg-surface px-10 py-8 text-center">
                    <span className="text-lg font-semibold text-accent">
                      PR
                    </span>
                  </div>
                </div>
              </section>
            )}

            {project.caseStudy.systemDesign && (
              <section className="mt-24 md:mt-32">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {project.caseStudy.systemDesign.heading}
                </h2>
                <div className="mt-6 max-w-2xl space-y-4 text-muted">
                  {project.caseStudy.systemDesign.intro.map((p, i) => (
                    <p key={i}>{renderWithEmphasis(p)}</p>
                  ))}
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.caseStudy.systemDesign.functionalMapImage}
                    alt="角色协作流程图"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-10 max-w-2xl text-muted">
                  {project.caseStudy.systemDesign.storyMapIntro}
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.caseStudy.systemDesign.storyMapImage}
                    alt="User Story Map"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-10 max-w-2xl text-muted">
                  {project.caseStudy.systemDesign.decisionsIntro}
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.systemDesign.decisions.map((d) => (
                    <div
                      key={d.title}
                      className="rounded-lg border border-border bg-surface p-5"
                    >
                      <p className="font-semibold text-primary">{d.title}</p>
                      <p className="mt-2 text-sm text-muted">
                        {d.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-14 text-lg font-semibold">
                  {project.caseStudy.systemDesign.featuresHeading}
                </h3>
                <div className="mt-4 overflow-hidden rounded-lg border border-border">
                  {project.caseStudy.systemDesign.features.map((f, i) => (
                    <div
                      key={f.name}
                      className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                        i !== 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <span className="sm:w-48 sm:shrink-0 font-medium">
                        {f.name}
                      </span>
                      <span className="text-sm text-muted">
                        {f.description}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 max-w-2xl text-muted">
                  {project.caseStudy.systemDesign.closing}
                </p>
              </section>
            )}

            {project.caseStudy.deepDive && (
              <section className="mt-24 md:mt-32">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {project.caseStudy.deepDive.heading}
                </h2>
                <p className="mt-6 max-w-2xl text-muted">
                  {project.caseStudy.deepDive.intro}
                </p>

                <h3 className="mt-14 text-lg font-semibold">
                  {project.caseStudy.deepDive.problem.heading}
                </h3>
                <div className="mt-4 max-w-2xl space-y-4 text-muted">
                  {project.caseStudy.deepDive.problem.paragraphs.map(
                    (p, i) => (
                      <p key={i}>{renderWithEmphasis(p)}</p>
                    )
                  )}
                </div>

                <h3 className="mt-14 text-lg font-semibold">
                  {project.caseStudy.deepDive.process.heading}
                </h3>
                <div className="mt-4 max-w-2xl space-y-4 text-muted">
                  {project.caseStudy.deepDive.process.paragraphs.map(
                    (p, i) => (
                      <p key={i}>{renderWithEmphasis(p)}</p>
                    )
                  )}
                </div>
                <div className="mt-2 grid gap-6 sm:grid-cols-2">
                  {project.caseStudy.deepDive.process.images.map((img) => (
                    <CaptionedImage key={img.src} {...img} />
                  ))}
                </div>

                <h3 className="mt-14 text-lg font-semibold">
                  {project.caseStudy.deepDive.decision.heading}
                </h3>
                <div className="mt-4 max-w-2xl space-y-4 text-muted">
                  {project.caseStudy.deepDive.decision.paragraphs.map(
                    (p, i) => (
                      <p key={i}>{renderWithEmphasis(p)}</p>
                    )
                  )}
                </div>
                <div className="mt-2 grid gap-6 sm:grid-cols-2">
                  {project.caseStudy.deepDive.decision.images.map((img) => (
                    <CaptionedImage key={img.src} {...img} />
                  ))}
                </div>

                <h3 className="mt-14 text-lg font-semibold">
                  {project.caseStudy.deepDive.result.heading}
                </h3>
                <div className="mt-4 max-w-2xl space-y-4 text-muted">
                  {project.caseStudy.deepDive.result.paragraphs.map(
                    (p, i) => (
                      <p key={i}>{renderWithEmphasis(p)}</p>
                    )
                  )}
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.caseStudy.deepDive.result.image}
                    alt="新建文档流程完成后的文档网格视图"
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video
                    src={project.caseStudy.deepDive.result.video}
                    controls
                    className="w-full"
                  />
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            <p className="text-sm text-muted">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-2 text-4xl font-semibold">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-muted">
              详情页内容待补充 —— 下一步我们再完善案例背景、设计过程和成果展示。
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
