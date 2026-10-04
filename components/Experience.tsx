import { EXPERIENCES } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="site-section">
      <div className="site-container">
        <SectionHeader
          index="02 / Experience"
          title="Work that moved the needle."
          description="A record of applied research, production systems, and the measurable changes they created."
        />

        <div className="border-t border-[var(--line-strong)]">
          {EXPERIENCES.map((experience, index) => (
            <article key={experience.id} className="grid gap-7 border-b border-[var(--line)] py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <div className="md:col-span-3">
                <div className="flex items-start justify-between gap-4 md:block">
                  <span className="mono text-xs text-[var(--signal)]">{String(index + 1).padStart(2, "0")}</span>
                  <div className="text-right md:mt-7 md:text-left">
                    <p className="text-sm text-[var(--chalk)]">{experience.startDate} — {experience.endDate}</p>
                    <p className="mono mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--ink-faint)]">{experience.location}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="display-type text-3xl text-[var(--chalk)] sm:text-4xl">{experience.role}</h3>
                  <span className="text-sm text-[var(--signal)]">@ {experience.company}</span>
                </div>

                <ul className="mt-7 grid gap-4 text-sm leading-7 text-[var(--ink-soft)] lg:grid-cols-2">
                  {experience.description.map((bullet, bulletIndex) => (
                    <li key={bullet.text} className={`relative pl-5 before:absolute before:left-0 before:top-[0.72rem] before:h-1.5 before:w-1.5 before:bg-[var(--ink-faint)] ${bulletIndex === experience.description.length - 1 && experience.description.length % 2 ? "lg:col-span-2 lg:max-w-[52%]" : ""}`}>
                      {bullet.text}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {experience.technologies?.map((technology) => (
                    <span key={technology} className="mono border border-[var(--line)] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.08em] text-[var(--ink-faint)]">{technology}</span>
                  ))}
                  {(experience.githubUrl || experience.websiteUrl) && <span className="mx-1 h-px w-5 bg-[var(--line)]" />}
                  {experience.githubUrl && <a className="text-link" href={experience.githubUrl} target="_blank" rel="noreferrer">Code ↗</a>}
                  {experience.websiteUrl && <a className="text-link" href={experience.websiteUrl} target="_blank" rel="noreferrer">Visit ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
