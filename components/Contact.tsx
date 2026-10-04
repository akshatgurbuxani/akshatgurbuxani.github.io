import { PERSONAL, SOCIAL_LINKS } from "@/data";

export default function Contact() {
  return (
    <footer id="contact" className="site-section pb-8">
      <div className="site-container">
        <div className="relative overflow-hidden border-y border-[var(--line-strong)] py-16 sm:py-24">
          <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 grid-cols-9 gap-1 opacity-20 md:grid" aria-hidden="true">
            {Array.from({ length: 81 }, (_, index) => <i key={index} className={`h-2 w-2 ${((index * 11) % 9) < 5 ? "bg-[var(--chalk)]" : "bg-transparent"}`} />)}
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="eyebrow mb-6">05 / Contact</p>
            <h2 className="display-type text-[clamp(3.7rem,9vw,8.2rem)] leading-[0.84] text-[var(--chalk)]">
              Let&apos;s make the
              <span className="block italic text-[var(--ink-soft)]">next idea useful.</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-[var(--ink-soft)]">For research, engineering, or a thoughtful conversation about systems that do more than look good in a demo.</p>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
              {SOCIAL_LINKS.map((link) => <a key={link.name} href={link.url} target={link.url.startsWith("http") ? "_blank" : undefined} rel={link.url.startsWith("http") ? "noreferrer" : undefined} className="text-link">{link.name} ↗</a>)}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-7 text-xs text-[var(--ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {PERSONAL.name}</p>
          <p className="mono text-[0.6rem] uppercase tracking-[0.12em]">Drawn in code · San Francisco</p>
        </div>
      </div>
    </footer>
  );
}
