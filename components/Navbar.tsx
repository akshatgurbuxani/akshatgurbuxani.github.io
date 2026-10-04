import { NAV_LINKS } from "@/data";
import { PATHS } from "@/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#173a63]/95">
      <div className="site-container flex min-h-16 flex-wrap items-center justify-between gap-x-5 gap-y-1 py-2 sm:flex-nowrap">
        <a href="#hero" className="group flex items-center gap-3 no-underline" aria-label="Akshat Gurbuxani, home">
          <span className="relative grid h-9 w-9 place-items-center border border-[var(--line-strong)] font-serif text-lg text-[var(--chalk)] after:absolute after:-bottom-1 after:-right-1 after:h-2 after:w-2 after:bg-[var(--signal)]">
            A
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] text-[var(--chalk)] sm:block">Akshat Gurbuxani</span>
        </a>

        <nav aria-label="Primary navigation" className="order-3 w-full overflow-x-auto sm:order-none sm:w-auto">
          <ul className="flex min-w-max items-center gap-1">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block px-3 py-2 text-xs font-medium text-[var(--ink-soft)] no-underline transition-colors hover:text-[var(--chalk)]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={PATHS.resume} target="_blank" rel="noreferrer" className="mono shrink-0 border border-[var(--line-strong)] px-3 py-2 text-[0.66rem] uppercase tracking-[0.12em] text-[var(--chalk)] no-underline transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]">
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
