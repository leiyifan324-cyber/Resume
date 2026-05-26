import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-[var(--color-border)]/50 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-[var(--color-muted)]">{subtitle}</p>
          )}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
