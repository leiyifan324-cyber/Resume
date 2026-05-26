export function Footer({ text }: { text: string }) {
  return (
    <footer className="border-t border-[var(--color-border)]/50 py-8 text-center text-sm text-[var(--color-muted)]">
      {text}
    </footer>
  );
}
