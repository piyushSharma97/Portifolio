"use client";

import type { ReactNode } from "react";

type ResumeContent = {
  fileName: string;
  name: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  emailPrefix: string;
  githubPrefix: string;
  profileHeading: string;
  experienceHeading: string;
  skillsHeading: string;
  profile: string;
  skills: string[];
};

type ResumeExperience = {
  title: string;
  company: string;
  dates: string;
  location: string;
  details: string[];
};

export function ResumeDownload({
  content,
  experience,
  label,
  icon,
}: {
  content: ResumeContent;
  experience: ResumeExperience[];
  label: string;
  icon: ReactNode;
}) {
  function downloadResume() {
    const sections = [
      content.name,
      content.headline,
      content.location,
      `${content.emailPrefix} ${content.email}`,
      `${content.githubPrefix} ${content.github}`,
      "",
      content.profileHeading,
      content.profile,
      "",
      content.experienceHeading,
      ...experience.flatMap((role) => [
        "",
        `${role.title} | ${role.company}`,
        `${role.dates} | ${role.location}`,
        ...role.details.map((detail) => `- ${detail}`),
      ]),
      "",
      content.skillsHeading,
      ...content.skills,
    ];
    const file = new Blob([sections.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = content.fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <button className="button button-secondary" onClick={downloadResume} type="button">
      {icon} {label}
    </button>
  );
}
