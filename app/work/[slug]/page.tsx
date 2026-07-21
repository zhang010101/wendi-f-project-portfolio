import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
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
      <main className="content-wrap py-24">
        <p className="text-sm text-muted">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-2 text-4xl font-semibold">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-muted">
          详情页内容待补充 —— 下一步我们再完善案例背景、设计过程和成果展示。
        </p>
      </main>
      <Footer />
    </>
  );
}
