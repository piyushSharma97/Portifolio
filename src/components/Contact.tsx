import { ArrowUpRight, Globe2, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<string, LucideIcon> = { ArrowUpRight, Globe2, Mail, MapPin };
type ContactContent = {
  eyebrow: string;
  headingStart: string;
  headingHighlight: string;
  intro: string;
  availability: string;
  emailTo: string;
  cards: { label: string; value: string; href: string; icon: string }[];
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    sentLabel: string;
    note: string;
    emailSubjectPrefix: string;
    senderPrefix: string;
  };
};

export function Contact({ content }: { content: ContactContent }) {
  return (
    <section className="section page-shell contact-section" id="contact">
      <Reveal>
        <SectionHeading eyebrow={content.eyebrow} title={<>{content.headingStart} <span className="gradient-text">{content.headingHighlight}</span></>} />
      </Reveal>
      <p className="contact-intro">{content.intro}</p>
      <div className="contact-layout">
        <Reveal className="contact-details">
          <div className="contact-cards">
            {content.cards.map(({ label, value, href, icon }) => {
              const Icon = icons[icon];
              return (
              <a className="contact-card glass-card" href={href} key={label} rel={href.startsWith("http") ? "noreferrer" : undefined} target={href.startsWith("http") ? "_blank" : undefined}>
                <span className="contact-card-icon"><Icon size={17} /></span>
                <span className="contact-card-copy"><small>{label}</small><strong>{value}</strong></span>
                <ArrowUpRight size={15} className="contact-arrow" />
              </a>
              );
            })}
          </div>
          <div className="availability"><span /> {content.availability}</div>
        </Reveal>
        <Reveal delay={0.1}><ContactForm form={content.form} email={content.emailTo} /></Reveal>
      </div>
    </section>
  );
}
