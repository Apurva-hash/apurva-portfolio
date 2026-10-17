import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  MdFileDownload,
  MdDescription,
  MdSchool,
  MdCheckCircle,
  MdWorkHistory,
  MdContactPage,
} from "react-icons/md";
import "./styles/ResumeSection.css";

export const ResumeSection: React.FC = () => {
  const [showFullPreview, setShowFullPreview] = useState(false);

  return (
    <section className="resume-section" id="resume">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MdContactPage />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Curriculum <span>Vitae &amp; Resume</span>
          </h2>
          <p className="section-description">
            Prepared specifically for my application for the UI/UX Designer role at {PERSONAL_INFO.targetCompany}. Fully ATS-compliant, text-parseable, and verified.
          </p>
        </div>

        {/* Resume Card Layout */}
        <div className="resume-display-card glass-card">
          <div className="resume-card-header">
            <div className="resume-applicant-info">
              <div className="resume-doc-icon">
                <MdDescription size={28} />
              </div>
              <div>
                <h3 className="applicant-name">{PERSONAL_INFO.name}</h3>
                <p className="applicant-target">
                  {PERSONAL_INFO.title} • BCA Student • Target: {PERSONAL_INFO.targetCompany}
                </p>
              </div>
            </div>

            <div className="resume-cta-buttons">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Apurva_Hippargi_Resume.pdf"
                className="btn btn-primary resume-download-cta"
              >
                <MdFileDownload size={18} />
                <span>Download PDF Resume</span>
              </a>
              <button
                className="btn btn-secondary"
                onClick={() => setShowFullPreview(!showFullPreview)}
              >
                <span>{showFullPreview ? "Hide Preview" : "Quick View Document"}</span>
              </button>
            </div>
          </div>

          {/* Quick Resume Highlights (Scannable for HR) */}
          <div className="resume-highlights-grid">
            <div className="highlight-column">
              <h4 className="column-title">
                <MdSchool /> Education &amp; Degree
              </h4>
              <div className="highlight-content-box">
                <div className="box-title-bold">Bachelor of Computer Applications (BCA)</div>
                <div className="box-sub">Graduating Class of 2026</div>
                <p className="box-desc">
                  Key Coursework: Human-Computer Interaction, Web Technologies, Database Management Systems, Software Engineering Methodologies.
                </p>
              </div>
            </div>

            <div className="highlight-column">
              <h4 className="column-title">
                <MdWorkHistory /> Key Case Studies
              </h4>
              <ul className="highlight-list">
                <li>
                  <strong>AssetPulse:</strong> Enterprise Asset Management &amp; Audit Reconciliation UX Concept.
                </li>
                <li>
                  <strong>HotelRevAI:</strong> Business Intelligence Dashboard UX with Power BI &amp; SQL.
                </li>
                <li>
                  <strong>Bank Marketing EDA:</strong> Customer conversion funnel &amp; cognitive information design.
                </li>
              </ul>
            </div>

            <div className="highlight-column">
              <h4 className="column-title">
                <MdCheckCircle /> Core Toolkit
              </h4>
              <div className="toolkit-pills">
                <span className="toolkit-pill">Figma (Auto-Layout v5)</span>
                <span className="toolkit-pill">Design Systems</span>
                <span className="toolkit-pill">Wireframing</span>
                <span className="toolkit-pill">WCAG AA</span>
                <span className="toolkit-pill">HTML / CSS / JS</span>
                <span className="toolkit-pill">Canva</span>
              </div>
            </div>
          </div>

          {/* Expandable Document Preview */}
          {showFullPreview && (
            <div className="embedded-resume-preview">
              <div className="document-mock-sheet">
                <div className="sheet-header">
                  <div className="sheet-name">{PERSONAL_INFO.name}</div>
                  <div className="sheet-title">
                    {PERSONAL_INFO.title} • BCA Student • Candidate for {PERSONAL_INFO.targetCompany}
                  </div>
                  <div className="sheet-contact">
                    {PERSONAL_INFO.email} • {PERSONAL_INFO.phone} • {PERSONAL_INFO.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
                  </div>
                </div>

                <div className="sheet-divider"></div>

                <div className="sheet-section">
                  <h5 className="sheet-section-title">PROFESSIONAL SUMMARY</h5>
                  <p className="sheet-text">{PERSONAL_INFO.bio}</p>
                </div>

                <div className="sheet-section">
                  <h5 className="sheet-section-title">CORE COMPETENCIES</h5>
                  <p className="sheet-text">
                    <strong>UX:</strong> User Research, Information Architecture, User Flows, Wireframing, Usability Heuristics.<br />
                    <strong>UI:</strong> Design Systems, Typography, 8pt Grid Layouts, WCAG AA Accessibility, Micro-interactions.<br />
                    <strong>Tools:</strong> Figma (Auto-layout, Components, Interactive Prototyping), Canva, Whimsical.<br />
                    <strong>Technical:</strong> HTML5, CSS3, JavaScript / TypeScript, Git, Developer Handoff.
                  </p>
                </div>

                <div className="sheet-section">
                  <h5 className="sheet-section-title">FEATURED PROJECTS</h5>
                  <p className="sheet-text">
                    <strong>1. AssetPulse — Enterprise Asset Management Dashboard Concept</strong><br />
                    Designed enterprise fixed asset tracking, audit compliance, and inventory status interface tailored for enterprise platforms.<br />
                    <strong>2. HotelRevAI — Revenue Analysis BI Dashboard</strong><br />
                    Engineered executive Power BI dashboard using SQL &amp; DAX with UX information hierarchy.<br />
                    <strong>3. Bank Marketing Exploratory Data Analysis</strong><br />
                    Synthesized 45,000+ records into a 3-tier conversion funnel and customer segmentation matrix.
                  </p>
                </div>

                <div className="sheet-section">
                  <h5 className="sheet-section-title">EDUCATION</h5>
                  <p className="sheet-text">
                    <strong>Bachelor of Computer Applications (BCA)</strong> | Expected 2026<br />
                    Focus: Software Engineering, HCI, Frontend Development &amp; Systems.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
