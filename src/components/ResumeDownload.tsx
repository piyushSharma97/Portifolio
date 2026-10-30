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
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const href = content.pdfHref.startsWith("/")
    ? `${basePath}${content.pdfHref}`
    : content.pdfHref;

  return (
    <a className="button button-secondary" href={href} download={content.fileName}>
      {icon} {label}
    </a>
  );
}
