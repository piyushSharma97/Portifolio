import {
  Bot, Braces, CloudCog, CodeXml, Database, FlaskConical, GitBranch,
  Layers3, MessageSquareCode, Network, Server, Sparkles, Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<string, LucideIcon> = {
  Bot, Braces, CloudCog, CodeXml, Database, FlaskConical, GitBranch,
  Layers3, MessageSquareCode, Network, Server, Sparkles, Workflow,
};

type SkillsContent = {
  eyebrow: string;
  headingStart: string;
  headingHighlight: string;
  detail: string;
  groups: { name: string; icon: string; skills: string[] }[];
  constellationIcons: string[];
  constellationLabel: string;
};

export function Skills({ content }: { content: SkillsContent }) {
  return (
    <section className="section section-alt" id="skills">
      <div className="page-shell">
        <Reveal><SectionHeading eyebrow={content.eyebrow} title={<>{content.headingStart} <span className="gradient-text">{content.headingHighlight}</span></>} detail={content.detail} /></Reveal>
        <div className="skills-grid">
          {content.groups.map(({ name, icon, skills }, index) => {
            const Icon = icons[icon];
            return (
            <Reveal key={name} delay={index * 0.07} direction={index % 2 === 0 ? "left" : "right"}>
              <article className="skill-card glass-card">
                <div className="skill-heading">
                  <span className="skill-icon"><Icon size={19} /></span>
                  <h3>{name}</h3>
                  <span className="skill-count">{String(skills.length).padStart(2, "0")}</span>
                </div>
                <div className="skill-tags">
                  {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
        <div className="skill-constellation" aria-hidden="true">
          {content.constellationIcons.map((name, index) => {
            const Icon = icons[name];
            return Icon ? <Icon key={name} size={14 + (index % 3) * 2} /> : null;
          })}
          <span>{content.constellationLabel}</span>
        </div>
      </div>
    </section>
  );
}
