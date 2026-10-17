import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { MdArrowUpward, MdShield } from "react-icons/md";
import "./styles/Footer.css";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="section-wrapper footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-brand-title">{PERSONAL_INFO.name}</span>
            <span className="footer-brand-role">
              {PERSONAL_INFO.title} • BCA Student
            </span>
            <p className="footer-tagline">
              Dedicated to designing intuitive, accessible enterprise interfaces for {PERSONAL_INFO.targetCompany}.
            </p>
          </div>

          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#process">Process</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <MdArrowUpward />
            <span>Top</span>
          </button>
        </div>

        <div className="footer-bottom">
          <div className="footer-compliance">
            <MdShield className="shield-icon" />
            <span>
              Original Portfolio Concept • Designed &amp; Coded with React, TypeScript &amp; Vanilla CSS • WCAG AA Compliant
            </span>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
