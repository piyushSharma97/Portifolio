import { Braces, BriefcaseBusiness, FlaskConical, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatCard } from "@/components/StatCard";

const statIcons: Record<string, LucideIcon> = { BriefcaseBusiness, FlaskConical, Braces };
type AboutContent = {
  eyebrow: string;
  headingStart: string;
  headingHighlight: string;
  title: string;
  bio: string;
  avatarInitials: string;
  avatarCaption: string;
  stats: { value: number; suffix: string; label: string; icon: string }[];
};

export function About({ content }: { content: AboutContent }) {
  return (
    <section className="section page-shell" id="about">
      <Reveal><SectionHeading eyebrow={content.eyebrow} title={<>{content.headingStart} <span className="gradient-text">{content.headingHighlight}</span></>} /></Reveal>
      <div className="about-layout">
        <Reveal className="about-visual-wrap">
          <div className="about-visual glass-card">
            <div className="avatar-orbit avatar-orbit--outer" />
            <div className="avatar-orbit avatar-orbit--inner" />
            <div className="avatar-glow" />
            <div className="avatar-initials">{content.avatarInitials}</div>
            <Sparkles className="avatar-sparkle" size={22} />
            <span className="avatar-caption">{content.avatarCaption}</span>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <h3 className="about-title">{content.title}</h3>
          <p className="body-copy">{content.bio}</p>
        </Reveal>
      </div>
      <div className="stats-grid">
        {content.stats.map(({ value, suffix, label, icon }, index) => {
          const Icon = statIcons[icon];
          return (
          <Reveal key={label} delay={index * 0.08}>
            <StatCard value={value} suffix={suffix} label={label} icon={Icon} />
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
