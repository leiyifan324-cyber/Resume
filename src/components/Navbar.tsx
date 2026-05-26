import { motion } from "framer-motion";
import type { ResumeData } from "../types/resume";
import { ScrollLink } from "./ScrollLink";

type Props = {
  profile: ResumeData["profile"];
  links: ResumeData["nav"];
};

export function Navbar({ profile, links }: Props) {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-[var(--color-border)]/60 bg-[var(--color-ink)]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <ScrollLink
          sectionId="top"
          className="font-[family-name:var(--font-display)] text-xl text-white transition hover:text-[var(--color-accent)]"
        >
          {profile.name}
        </ScrollLink>
        <nav className="hidden gap-6 text-sm text-[var(--color-muted)] sm:flex">
          {links.map((link) => (
            <ScrollLink
              key={link.section}
              sectionId={link.section}
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
