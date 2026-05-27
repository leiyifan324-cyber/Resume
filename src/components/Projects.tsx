import { motion } from "framer-motion";
import type { Project } from "../types/resume";
import { Section } from "./Section";

const statusLabel: Record<Project["status"], string> = {
  Completed: "已完成",
  "In Progress": "进行中",
  Planned: "规划中",
};

const statusColor: Record<Project["status"], string> = {
  Completed: "text-emerald-400 border-emerald-500/40",
  "In Progress": "text-amber-400 border-amber-500/40",
  Planned: "text-sky-400 border-sky-500/40",
};

type Props = { projects: Project[] };

export function Projects({ projects }: Props) {
  return (
    <Section id="projects" title="Projects" subtitle="项目经历（STAR 结构）">
      <div className="space-y-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-ink-soft)] p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span
                  className={`inline-block rounded-full border px-3 py-0.5 text-xs ${statusColor[project.status]}`}
                >
                  {statusLabel[project.status]}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                  {project.title}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center text-sm text-[var(--color-accent)] transition hover:text-white"
                  >
                    View GitHub Repository <span aria-hidden="true" className="ml-1">-&gt;</span>
                  </a>
                )}
              </div>
              <time className="text-sm text-[var(--color-muted)]">{project.period}</time>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-relaxed md:text-base">
              <StarBlock label="S" title="Situation / 情境" text={project.star.situation} />
              <StarBlock label="T" title="Task / 任务" text={project.star.task} />
              <div>
                <p className="mb-2 font-medium text-[var(--color-accent)]">
                  <span className="mr-2 font-bold">A</span>Action / 行动
                </p>
                <ul className="list-inside list-disc space-y-2 text-[var(--color-muted)]">
                  {project.star.action.map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              </div>
              <StarBlock label="R" title="Result / 成果" text={project.star.result} accent />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--color-surface)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function StarBlock({
  label,
  title,
  text,
  accent,
}: {
  label: string;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className={`mb-1 font-medium ${accent ? "text-[var(--color-warm)]" : "text-[var(--color-accent)]"}`}>
        <span className="mr-2 font-bold">{label}</span>
        {title}
      </p>
      <p className="text-[var(--color-muted)]">{text}</p>
    </div>
  );
}
