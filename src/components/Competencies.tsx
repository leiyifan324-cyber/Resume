import { motion } from "framer-motion";
import { Section } from "./Section";

type Props = { items: string[] };

export function Competencies({ items }: Props) {
  return (
    <Section id="skills" title="Core Competencies" subtitle="核心能力">
      <ul className="space-y-4">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-3 text-[var(--color-muted)] leading-relaxed"
          >
            <span className="text-[var(--color-accent)]">✦</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
