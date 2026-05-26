import { motion } from "framer-motion";
import type { LifeSection } from "../types/resume";
import { Section } from "./Section";

const iconMap: Record<string, string> = {
  basketball: "🏀",
  badminton: "🏸",
  gaming: "🎯",
  default: "✦",
};

type Props = { life: LifeSection };

export function LifeInterests({ life }: Props) {
  return (
    <Section id="life" title={life.title} subtitle={life.subtitle}>
      <p className="mb-8 max-w-2xl text-[var(--color-muted)]">{life.intro}</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {life.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-ink-soft)] p-6 md:p-7"
          >
            <div
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--color-accent)]/10 blur-2xl transition group-hover:bg-[var(--color-warm)]/15"
              aria-hidden
            />
            <span className="text-3xl" role="img" aria-hidden>
              {iconMap[item.icon] ?? iconMap.default}
            </span>
            {item.badge && (
              <span className="ml-3 inline-block rounded-full border border-[var(--color-warm)]/50 bg-[var(--color-warm)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-warm)]">
                {item.badge}
              </span>
            )}
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              {item.description}
            </p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.highlights.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm text-[var(--color-muted)]"
                  >
                    <span className="text-[var(--color-accent)]">·</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
