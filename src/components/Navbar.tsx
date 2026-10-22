"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavigationData = {
  logoLabel: string;
  logoText: string;
  brandName: string;
  brandSuffix: string;
  ariaLabel: string;
  openMenu: string;
  closeMenu: string;
  switchToLight: string;
  switchToDark: string;
  links: { label: string; href: string }[];
};

export function Navbar({ navigation }: { navigation: NavigationData }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation.links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navigation.links]);

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="nav-inner page-shell">
        <a className="brand" href="#home" aria-label={navigation.logoLabel}>
          <span className="brand-mark">{navigation.logoText}</span>
          <span className="brand-name">{navigation.brandName}<span>{navigation.brandSuffix}</span></span>
        </a>
        <nav className={`nav-links${menuOpen ? " nav-links--open" : ""}`} aria-label={navigation.ariaLabel}>
          {navigation.links.map(({ label, href }) => (
            <a
              aria-current={activeSection === href.slice(1) ? "location" : undefined}
              href={href}
              key={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle labels={{ light: navigation.switchToLight, dark: navigation.switchToDark }} />
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? navigation.closeMenu : navigation.openMenu}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
