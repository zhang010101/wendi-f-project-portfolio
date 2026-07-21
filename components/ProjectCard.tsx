import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#1E1E1E]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.summary}</p>
        </div>
        <span className="whitespace-nowrap text-xs text-muted">
          {project.category} · {project.year}
        </span>
      </div>
    </Link>
  );
}
