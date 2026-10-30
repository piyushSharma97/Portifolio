"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { FloatingShapes } from "@/components/FloatingShapes";
import { ResumeDownload } from "@/components/ResumeDownload";

type HeroContent = {
  roles: string[];
  eyebrow: string;
  firstName: string;
  lastName: string;
  tagline: string;
  experienceValue: string;
  experienceNote: string;
  experienceDetail: string;
  floatingTech: { label: string; symbol: string; style: string }[];
  primaryAction: string;
  resumeAction: string;
  scrollCue: string;
  techNote: string;
  availability: string;
  coordinates: string;
};

type ResumeContent = {
  fileName: string;
  pdfHref: string;
};

export function Hero({
  content,
  resume,
}: {
  content: HeroContent;
  resume: ResumeContent;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 100]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % content.roles.length), 2800);
    return () => window.clearInterval(timer);
  }, [content.roles.length, reduceMotion]);

  return (
    <section className="hero-section" id="home">
      <FloatingShapes techItems={content.floatingTech} />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <motion.div className="hero-content page-shell" style={{ y }}>
        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</p>
          <h1 className="hero-title">
            {content.firstName} <span className="gradient-text">{content.lastName}</span>
          </h1>
          <div className="role-line" aria-live="polite">
            <span className="role-prefix">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className="role-text"
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 10 }}
                key={content.roles[roleIndex]}
                transition={{ duration: 0.28 }}
              >
                {content.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="typing-cursor" aria-hidden="true" />
          </div>
          <div className="hero-experience-proof">
            <span className="proof-mark">{content.experienceValue}</span>
            <span className="proof-copy">
              <strong>{content.experienceNote}</strong>
              <small>{content.experienceDetail}</small>
            </span>
          </div>
          <p className="hero-tagline">
            {content.tagline}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">{content.primaryAction} <ArrowUpRight size={17} /></a>
            <ResumeDownload
              content={resume}
              label={content.resumeAction}
              icon={<ArrowDownToLine size={16} />}
            />
          </div>
          <a className="scroll-cue" href="#about"><span>{content.scrollCue}</span><ArrowDown size={14} /></a>
        </motion.div>
      </motion.div>
      <div className="hero-bottom-note">
        <span>{content.techNote}</span><span className="hero-availability"><i /> {content.availability}</span><span>{content.coordinates}</span>
      </div>
    </section>
  );
}
