import { motion } from "framer-motion";
import type { ResumeData } from "../types/resume";
import { Section } from "./Section";

type Props = { contact: ResumeData["contact"] };

export function Contact({ contact }: Props) {
  return (
    <Section id="contact" title="Contact Me" subtitle="联系我">
      <p className="mb-8 max-w-2xl text-[var(--color-muted)]">{contact.intro}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {contact.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <p className="text-xs tracking-wide text-[var(--color-muted)] uppercase">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="mt-2 block text-lg text-white transition hover:text-[var(--color-accent)]"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-lg text-white">{item.value}</p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
