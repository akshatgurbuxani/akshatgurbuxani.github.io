import { PERSONAL, getTopSkills } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const skills = getTopSkills(8);

  return (
    <section id="about" className="site-section">
      <div className="site-container">
        <SectionHeader
          index="01 / About"
          title="Between theory and the real world."
          description="I care about the messy middle: the engineering, evaluation, and judgment required to make ambitious models genuinely useful."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="display-type border-l border-[var(--signal)] pl-6 text-3xl leading-[1.18] text-[var(--chalk)] sm:text-4xl">
              “The interesting work starts where the paper ends.”
            </p>
            <div className="mt-12 rotate-[-1deg] border border-dashed border-[var(--line)] p-5">
              <p className="mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">Working vocabulary</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={skill.name} className={`border px-3 py-1.5 text-xs ${index % 3 === 0 ? "border-[var(--line-strong)] text-[var(--chalk)]" : "border-[var(--line)] text-[var(--ink-soft)]"}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-7 lg:col-span-7 lg:pt-5">
            {PERSONAL.bio.map((paragraph, index) => (
              <div key={paragraph} className="grid grid-cols-[2.4rem_1fr] gap-3">
                <span className="mono pt-1 text-xs text-[var(--signal)]">0{index + 1}</span>
                <p className="text-base leading-8 text-[var(--ink-soft)] sm:text-lg">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
