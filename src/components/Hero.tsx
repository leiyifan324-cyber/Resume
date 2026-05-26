import { motion } from "framer-motion";
import type { ResumeData } from "../types/resume";
import { ScrollLink } from "./ScrollLink";

type Props = {
  profile: ResumeData["profile"];
};

const heroCtas: { label: string; section: string; primary?: boolean }[] = [
  { label: "查看项目", section: "projects", primary: true },
  { label: "联系我", section: "contact" },
  { label: "生活与兴趣", section: "life" },
  { label: "技能", section: "skills" },
];

export function Hero({ profile }: Props) {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl scroll-mt-20 px-6 pb-20 pt-16 md:pt-24"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 text-sm tracking-widest text-[var(--color-accent)] uppercase"
      >
        Portfolio
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-[family-name:var(--font-display)] text-5xl leading-tight text-white md:text-7xl"
      >
        Hi, 我是 {profile.name}
      </motion.h1>
      {profile.nameEn && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-lg text-[var(--color-muted)]"
        >
          {profile.nameEn}
        </motion.p>
      )}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-4 text-lg text-[var(--color-accent-dim)] md:text-xl"
      >
        {profile.headline}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
      >
        {profile.bio}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {heroCtas.map((btn) => (
          <ScrollLink
            key={`${btn.section}-${btn.label}`}
            sectionId={btn.section}
            className={
              btn.primary
                ? "rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:brightness-110"
                : "rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            }
          >
            {btn.label}
          </ScrollLink>
        ))}
      </motion.div>
    </section>
  );
}
