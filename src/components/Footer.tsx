import { ArrowUpRight, Heart } from "lucide-react";

type FooterContent = {
  logoText: string;
  logoSuffix: string;
  logoLabel: string;
  credit: string;
  githubLabel: string;
  emailLabel: string;
  copyrightSuffix: string;
  githubHref: string;
  emailHref: string;
};

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="footer-brand" href="#home" aria-label={content.logoLabel}>{content.logoText}<span>{content.logoSuffix}</span></a>
        <p>{content.credit} <Heart size={13} fill="currentColor" /></p>
        <div className="footer-links">
          <a href={content.githubHref} rel="noreferrer" target="_blank">
            {content.githubLabel} <ArrowUpRight size={12} />
          </a>
          <a href={content.emailHref}>
            {content.emailLabel} <ArrowUpRight size={12} />
          </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} {content.copyrightSuffix}</span>
      </div>
    </footer>
  );
}
