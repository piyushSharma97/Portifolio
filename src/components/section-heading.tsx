import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: ReactNode;
  detail?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {detail && <span className="section-detail">{detail}</span>}
    </div>
  );
}
