import { useEffect } from "react";
import resume from "./data/resume.json";
import type { ResumeData } from "./types/resume";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Competencies } from "./components/Competencies";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { LifeInterests } from "./components/LifeInterests";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { scrollToSection } from "./utils/scrollToSection";

const data = resume as ResumeData;

document.title = data.meta.siteTitle;

export default function App() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) scrollToSection(hash);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-ink)]">
      <div className="grain" aria-hidden />
      <div
        className="glow-orb -top-32 left-1/4 h-96 w-96 bg-[var(--color-accent)]/20"
        aria-hidden
      />
      <div
        className="glow-orb top-1/3 -right-20 h-80 w-80 bg-[var(--color-warm)]/15"
        aria-hidden
      />

      <Navbar profile={data.profile} links={data.nav} />
      <main>
        <Hero profile={data.profile} />
        <Projects projects={data.projects} />
        <Competencies items={data.competencies} />
        <TechStack skills={data.techStack} />
        <LifeInterests life={data.life} />
        <Contact contact={data.contact} />
      </main>
      <Footer text={data.footer} />
    </div>
  );
}
