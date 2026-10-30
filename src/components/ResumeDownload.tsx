import type { ReactNode } from "react";

type ResumeDownloadContent = {
  fileName: string;
  pdfHref: string;
};

export function ResumeDownload({
  content,
  label,
  icon,
}: {
  content: ResumeDownloadContent;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a className="button button-secondary" href={content.pdfHref} download={content.fileName}>
      {icon} {label}
    </a>
  );
}
