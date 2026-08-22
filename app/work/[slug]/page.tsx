import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import TitleBlock from "@/components/case-study/TitleBlock";
import DrawingFrame from "@/components/case-study/DrawingFrame";
import SheetHeading from "@/components/case-study/SheetHeading";
import DimensionRule from "@/components/case-study/DimensionRule";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function fig(n: number) {
  return `FIG. ${String(n).padStart(2, "0")}`;
}

function renderWithEmphasis(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[var(--pr-cyan)]">
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
          <div className="case-study">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
              {project.caseStudy.hero.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {project.caseStudy.hero.subtitle}
            </p>

            <div className="mt-10 max-w-md">
              <TitleBlock items={project.caseStudy.hero.keyInfo} />
            </div>

            <DrawingFrame
              figure={fig(0)}
              caption="Document grid —— 三栏经典布局：Structure 树 / 文档表格 / Detail 预览"
              className="mt-12"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover}
                alt={project.title}
                className="w-full object-cover"
              />
            </DrawingFrame>

            {project.caseStudy.background && (
              <section>
                <DimensionRule />
                <SheetHeading
                  sheet="01"
                  label="Context"
                  heading={project.caseStudy.background.heading}
                />
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
                        className="flex items-center justify-between border border-[var(--pr-line)] bg-[var(--pr-panel)] px-4 py-3 text-sm"
                      >
                        <span className="font-mono text-[var(--pr-ink)]">
                          {s.tool}
                        </span>
                        <span className="text-muted">{s.use}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="hidden flex-col items-center gap-1 sm:flex"
                    aria-hidden="true"
                  >
                    <span className="h-px w-10 bg-[var(--pr-line)]" />
                    <span className="font-mono text-lg text-[var(--pr-cyan)]">
                      →
                    </span>
                    <span className="h-px w-10 bg-[var(--pr-line)]" />
                  </div>
                  <div className="flex items-center justify-center border border-[var(--pr-cyan)]/50 bg-[var(--pr-panel)] px-10 py-8 text-center">
                    <span className="font-mono text-lg font-semibold text-[var(--pr-cyan)]">
                      PR
                    </span>
                  </div>
                </div>
              </section>
            )}

            {project.caseStudy.personas && (
              <section>
                <DimensionRule />
                <SheetHeading
                  sheet="02"
                  label="Personas"
                  heading={project.caseStudy.personas.heading}
                />
                <p className="mt-6 max-w-2xl text-muted">
                  {project.caseStudy.personas.intro}
                </p>
                <Link
                  href={`/work/${slug}/personas`}
                  className="mt-6 inline-block font-mono text-sm text-[var(--pr-cyan)] hover:underline"
                >
                  {project.caseStudy.personas.entryLabel}
                </Link>
              </section>
            )}

            {project.caseStudy.systemDesign && (
              <section>
                <DimensionRule />
                <SheetHeading
                  sheet="03"
                  label="System"
                  heading={project.caseStudy.systemDesign.heading}
                />
                <div className="mt-6 max-w-2xl space-y-4 text-muted">
                  {project.caseStudy.systemDesign.intro.map((p, i) => (
                    <p key={i}>{renderWithEmphasis(p)}</p>
                  ))}
                </div>

                <DrawingFrame figure={fig(1)} caption="角色协作流程图 Functional Map">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.caseStudy.systemDesign.functionalMapImage}
                    alt="角色协作流程图"
                    className="w-full object-cover"
                  />
                </DrawingFrame>

                <p className="mt-10 max-w-2xl text-muted">
                  {project.caseStudy.systemDesign.storyMapIntro}
                </p>
                <DrawingFrame
                  figure={fig(2)}
                  caption="User Story Map —— Activities → Steps → Details，按 P0/P1/P2 分 Release"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.caseStudy.systemDesign.storyMapImage}
                    alt="User Story Map"
                    className="w-full object-cover"
                  />
                </DrawingFrame>

                <p className="mt-10 max-w-2xl text-muted">
                  {project.caseStudy.systemDesign.decisionsIntro}
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.systemDesign.decisions.map((d) => (
                    <div
                      key={d.title}
                      className="border border-[var(--pr-line)] bg-[var(--pr-panel)] p-5"
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
                <div className="mt-4 overflow-hidden border border-[var(--pr-line)]">
                  {project.caseStudy.systemDesign.features.map((f, i) => (
                    <div
                      key={f.name}
                      className={`flex flex-col gap-1 bg-[var(--pr-panel)] px-5 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                        i !== 0 ? "border-t border-[var(--pr-line)]" : ""
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

            {project.caseStudy.roles && (
              <section>
                <DimensionRule />
                <SheetHeading
                  sheet="04"
                  label="People"
                  heading={project.caseStudy.roles.heading}
                />
                <p className="mt-6 max-w-2xl text-muted">
                  {project.caseStudy.roles.intro}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.roles.items.map((item) => (
                    <div
                      key={item.title}
                      className="border border-[var(--pr-line)] bg-[var(--pr-panel)] p-5"
                    >
                      <p className="font-semibold text-primary">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.caseStudy.deepDive && (
              <section>
                <DimensionRule />
                <SheetHeading
                  sheet="05"
                  label="Case Study"
                  heading={project.caseStudy.deepDive.heading}
                />
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
                  {project.caseStudy.deepDive.process.images.map((img, i) => (
                    <DrawingFrame
                      key={img.src}
                      figure={fig(3 + i)}
                      caption={img.caption}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full object-cover"
                      />
                    </DrawingFrame>
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
                  {project.caseStudy.deepDive.decision.images.map(
                    (img, i) => (
                      <DrawingFrame
                        key={img.src}
                        figure={fig(6 + i)}
                        caption={img.caption}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full object-cover"
                        />
                      </DrawingFrame>
                    )
                  )}
                </div>

                <h3 className="mt-14 text-lg font-semibold">
                  {project.caseStudy.deepDive.result.heading}
                </h3>
                <div className="mt-4 max-w-2xl space-y-4">
                  {project.caseStudy.deepDive.result.paragraphs.map(
                    (p, i) =>
                      i === 1 ? (
                        <p
                          key={i}
                          className="flex gap-3 border-l-2 border-accent py-0.5 pl-4 text-muted"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span>{renderWithEmphasis(p)}</span>
                        </p>
                      ) : (
                        <p key={i} className="text-muted">
                          {renderWithEmphasis(p)}
                        </p>
                      )
                  )}
                </div>
                <DrawingFrame
                  figure={fig(8)}
                  caption="新建文档流程完成后的文档网格视图"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.caseStudy.deepDive.result.image}
                    alt="新建文档流程完成后的文档网格视图"
                    className="w-full object-cover"
                  />
                </DrawingFrame>
                <DrawingFrame
                  figure={fig(9)}
                  caption="操作录屏 —— 新建/上传文档完整流程，73 秒"
                >
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video
                    src={project.caseStudy.deepDive.result.video}
                    controls
                    className="w-full"
                  />
                </DrawingFrame>
              </section>
            )}

            {project.caseStudy.systemsThinking && (
              <section>
                <DimensionRule />
                <SheetHeading
                  sheet="06"
                  label="Spec"
                  heading={project.caseStudy.systemsThinking.heading}
                />
                <p className="mt-6 max-w-2xl text-muted">
                  {project.caseStudy.systemsThinking.intro}
                </p>

                <p className="mt-10 max-w-2xl text-muted">
                  {renderWithEmphasis(
                    project.caseStudy.systemsThinking.panelWidths.paragraph
                  )}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "RECORDS ≥ 422PX",
                    "DETAIL ≥ 400PX · 默认 1/3",
                    "FILTER 默认 1/4",
                    "VIEWER ≥ 560PX",
                  ].map((s) => (
                    <span
                      key={s}
                      className="border border-[var(--pr-line)] bg-[var(--pr-panel)] px-3 py-1.5 font-mono text-[11px] tracking-wide text-[var(--pr-ink)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {project.caseStudy.systemsThinking.panelWidths.images.map(
                    (img, i) => (
                      <DrawingFrame
                        key={img.src}
                        figure={fig(10 + i)}
                        caption={img.caption}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full object-cover"
                        />
                      </DrawingFrame>
                    )
                  )}
                </div>

                <p className="mt-14 max-w-2xl text-muted">
                  {renderWithEmphasis(
                    project.caseStudy.systemsThinking.structure.paragraph
                  )}
                </p>
                <DrawingFrame
                  figure={fig(12)}
                  caption={project.caseStudy.systemsThinking.structure.caption}
                  className="max-w-md"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.caseStudy.systemsThinking.structure.image}
                    alt={project.caseStudy.systemsThinking.structure.caption}
                    className="w-full object-cover"
                  />
                </DrawingFrame>
              </section>
            )}

            {project.caseStudy.impact && (
              <section>
                <DimensionRule />
                <SheetHeading
                  sheet="07"
                  label="Results"
                  heading={project.caseStudy.impact.heading}
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.impact.items.map((item) => (
                    <div
                      key={item.title}
                      className="border border-[var(--pr-line)] bg-[var(--pr-panel)] p-5"
                    >
                      <p className="font-semibold text-primary">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 max-w-2xl border border-dashed border-[var(--pr-line)] px-4 py-3 font-mono text-xs text-muted">
                  <span className="text-[var(--pr-cyan)]">PENDING —— </span>
                  {project.caseStudy.impact.note}
                </div>
              </section>
            )}
          </div>
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
