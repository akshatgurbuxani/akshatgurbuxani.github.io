import { EDUCATION, PUBLICATIONS } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="site-section">
      <div className="site-container">
        <SectionHeader index="04 / Learning" title="Ideas need foundations." />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Education</p>
            <div className="border-t border-[var(--line-strong)]">
              {EDUCATION.map((education) => (
                <article key={education.id} className="grid gap-5 border-b border-[var(--line)] py-7 sm:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="display-type text-3xl text-[var(--chalk)]">{education.institution}</h3>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">{education.degree} · {education.field}</p>
                    {education.activities?.map((activity) => <p key={activity} className="mt-3 max-w-xl text-xs leading-5 text-[var(--ink-faint)]">{activity}</p>)}
                  </div>
                  <div className="sm:text-right">
                    <p className="mono text-[0.64rem] uppercase tracking-[0.1em] text-[var(--signal)]">{education.startDate} — {education.endDate}</p>
                    <p className="mt-2 text-xs text-[var(--ink-faint)]">{education.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Publication</p>
            {PUBLICATIONS.map((publication) => (
              <article key={publication.id} className="relative border border-dashed border-[var(--line-strong)] p-7 before:absolute before:-left-1.5 before:-top-1.5 before:h-3 before:w-3 before:bg-[var(--signal)]">
                <p className="mono text-[0.64rem] uppercase tracking-[0.12em] text-[var(--signal)]">{publication.status}</p>
                <h3 className="display-type mt-5 text-3xl leading-tight text-[var(--chalk)]">{publication.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--ink-soft)]">{publication.description}</p>
                {publication.url && <a className="text-link mt-7" href={publication.url} target="_blank" rel="noreferrer">Read citation ↗</a>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
