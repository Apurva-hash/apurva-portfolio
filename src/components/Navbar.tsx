import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  MdMenu,
  MdClose,
  MdFileDownload,
  MdWorkOutline,
  MdPersonOutline,
  MdLightbulbOutline,
  MdMailOutline,
  MdLayers,
} from "react-icons/md";
import "./styles/Navbar.css";

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "process", "resume", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-mark">
            <span>AH</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{PERSONAL_INFO.name}</span>
            <span className="brand-role">UI/UX Portfolio</span>
          </div>
        </a>

        {/* Target Role Tag (Discreet & Professional) */}
        <div className="target-pill">
          <span className="target-dot"></span>
          <span>Target: {PERSONAL_INFO.targetCompany}</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
              >
                Featured Work
              </a>
            </li>
            <li>
              <a
                href="#process"
                className={`nav-link ${activeSection === "process" ? "active" : ""}`}
              >
                Design Process
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <a
            href={PERSONAL_INFO.resumePath}
            download="Apurva_Hippargi_Resume.pdf"
            className="btn btn-secondary resume-btn"
            title="Download PDF Resume"
          >
            <MdFileDownload />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <nav aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            <li>
              <a href="#about" onClick={closeMenu}>
                <MdPersonOutline /> About Me
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                <MdLayers /> Skills &amp; Tools
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                <MdWorkOutline /> Featured Projects
              </a>
            </li>
            <li>
              <a href="#process" onClick={closeMenu}>
                <MdLightbulbOutline /> Design Process
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <MdMailOutline /> Contact
              </a>
            </li>
            <li className="mobile-resume-item">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Apurva_Hippargi_Resume.pdf"
                className="btn btn-primary"
                onClick={closeMenu}
              >
                <MdFileDownload /> Download Resume (PDF)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
