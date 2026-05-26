import { motion } from "framer-motion";
import { Section } from "./Section";

type Props = { skills: string[] };

export function TechStack({ skills }: Props) {
  return (
    <Section id="stack" title="Tech Stack" subtitle="技术栈">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-white"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
