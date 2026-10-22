import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type ExperienceContent = {
  eyebrow: string;
  headingStart: string;
  headingHighlight: string;
  detail: string;
  currentLabel: string;
  roles: {
    title: string;
    company: string;
    dates: string;
    location: string;
    details: string[];
    current: boolean;
  }[];
};

export function Experience({ content }: { content: ExperienceContent }) {
  return (
    <section className="section section-alt" id="experience">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={<>{content.headingStart} <span className="gradient-text">{content.headingHighlight}</span></>}
            detail={content.detail}
          />
        </Reveal>
        <div className="timeline">
          {content.roles.map((role, index) => (
            <Reveal className="timeline-item" key={role.company} delay={index * 0.08} direction={index % 2 === 0 ? "left" : "right"}>
              <span className={`timeline-node${role.current ? " timeline-node--current" : ""}`} />
              <article className="experience-card glass-card">
                <div className="experience-top">
                  <div>
                    <span className="experience-date">{role.dates}</span>
                    <h3>{role.title}</h3>
                    <p className="experience-company"><BriefcaseBusiness size={14} />{role.company}</p>
                  </div>
                  {role.current && <span className="current-badge"><i /> {content.currentLabel}</span>}
                </div>
                <span className="experience-location"><MapPin size={13} />{role.location}</span>
                <ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
