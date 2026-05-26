/** 平滑滚动到页面区块（兼容单页，不依赖 React Router 路径） */
export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${sectionId}`);
}
