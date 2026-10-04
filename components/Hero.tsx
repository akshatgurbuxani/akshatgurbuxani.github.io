import { PERSONAL, SOCIAL_LINKS } from "@/data";
import { PATHS } from "@/constants";
import PixelScene from "./PixelScene";

export default function Hero() {
  const github = SOCIAL_LINKS.find((link) => link.name === "GitHub")?.url ?? "#";

  return (
    <section id="hero" className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <PixelScene />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-between py-12 sm:py-16 lg:py-20">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-12">
          <div className="max-w-4xl lg:col-span-8">
            <p className="eyebrow mb-7">AI engineer · San Francisco</p>
            <h1 className="display-type max-w-[940px] text-[clamp(4rem,10vw,8.8rem)] leading-[0.82] text-[var(--chalk)]">
              Research,
              <span className="block pl-[0.36em] italic text-[var(--ink-soft)]">made real.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg sm:leading-8">
              I&apos;m {PERSONAL.name}, an AI researcher building language, vision, and multi-agent systems that survive the distance from paper to production.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="#projects" className="text-link">Explore selected work <span aria-hidden="true">↓</span></a>
              <a href={github} target="_blank" rel="noreferrer" className="text-link">GitHub <span aria-hidden="true">↗</span></a>
              <a href={PATHS.resume} target="_blank" rel="noreferrer" className="text-link">Résumé <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="hidden self-end pb-12 lg:col-span-4 lg:block">
            <div className="ml-auto w-56 rotate-[-1.5deg] border-l border-[var(--line-strong)] pl-5 text-sm leading-6 text-[var(--ink-soft)]">
              <span className="mono mb-2 block text-[0.62rem] uppercase tracking-[0.16em] text-[var(--signal)]">Current coordinates</span>
              Building production AI at <a href={PERSONAL.companyUrl} target="_blank" rel="noreferrer" className="text-[var(--chalk)] underline decoration-dotted underline-offset-4">{PERSONAL.company}</a>.
            </div>
          </aside>
        </div>

        <dl className="grid border-y border-[var(--line)] sm:grid-cols-3">
          {[
            ["Focus", "Applied AI systems"],
            ["Approach", "Research → production"],
            ["Signal", "Available for conversation"],
          ].map(([label, value], index) => (
            <div key={label} className={`flex items-center justify-between gap-4 py-4 sm:block sm:px-6 ${index ? "sm:border-l sm:border-[var(--line)]" : "sm:pl-0"}`}>
              <dt className="mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">{label}</dt>
              <dd className="mt-1 text-sm text-[var(--chalk)]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
