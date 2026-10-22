import { ArrowUpRight, Bot, ExternalLink, HeartPulse, Layers3, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectTilt } from "@/components/ProjectTilt";

const icons: Record<string, LucideIcon> = { Bot, HeartPulse, Layers3, Sparkles };

type ProjectsContent = {
  eyebrow: string;
  headingStart: string;
  headingHighlight: string;
  detail: string;
  subtitle: string;
  projectPrefix: string;
  items: {
    number: string;
    title: string;
    description: string;
    tags: string[];
    badge: string;
    icon: string;
    className: string;
    links: { label: string; href: string }[];
  }[];
};

export function Projects({ content }: { content: ProjectsContent }) {
  return (
    <section className="section page-shell" id="projects">
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={<>{content.headingStart} <span className="gradient-text">{content.headingHighlight}</span></>}
          detail={content.detail}
        />
      </Reveal>
      <p className="projects-subtitle">{content.subtitle}</p>
      <div className="projects-grid">
        {content.items.map(({ number, title, description, tags, badge, icon, className, links }, index) => {
          const Icon = icons[icon];
          return (
            <Reveal className={`project-reveal ${className}`} key={number} delay={index * 0.06}>
              <ProjectTilt className="project-tilt">
                <article className="project-card glass-card">
                  <div className="project-topline">
                    <span className="project-number">{content.projectPrefix} / {number}</span>
                    <span className={`project-badge${badge === "LIVE" ? " badge-live" : badge === "AI" ? " badge-ai" : ""}`}>
                      <i />{badge}
                    </span>
                  </div>
                  <div className="project-icon"><Icon size={23} strokeWidth={1.6} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {links.length > 0 && (
                    <div className="project-links">
                      {links.map((link) => (
                        <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                          {link.label}<ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  )}
                  <span className="project-card-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
                </article>
              </ProjectTilt>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
