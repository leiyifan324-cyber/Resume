import type { MouseEvent, ReactNode } from "react";
import { scrollToSection } from "../utils/scrollToSection";

type Props = {
  sectionId: string;
  children: ReactNode;
  className?: string;
};

export function ScrollLink({ sectionId, children, className }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <a href={`#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
