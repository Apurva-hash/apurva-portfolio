import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  MdArrowDownward,
  MdFileDownload,
  MdCheckCircle,
  MdAutoAwesome,
  MdGridOn,
  MdGridOff,
  MdPalette,
  MdAspectRatio,
  MdShield,
  MdOpenInNew,
} from "react-icons/md";
import "./styles/Hero.css";

export const Hero: React.FC = () => {
  // Interactive Design Studio State
  const [accentColor, setAccentColor] = useState<"indigo" | "emerald" | "cyan">("indigo");
  const [borderRadius, setBorderRadius] = useState<"sharp" | "standard" | "pill">("standard");
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [componentState, setComponentState] = useState<"default" | "hover" | "loading" | "verified">("default");

  const colors = {
    indigo: { hex: "#6366f1", bg: "rgba(99, 102, 241, 0.15)", name: "Indigo Primary" },
    emerald: { hex: "#10b981", bg: "rgba(16, 185, 129, 0.15)", name: "Emerald System" },
    cyan: { hex: "#06b6d4", bg: "rgba(6, 182, 212, 0.15)", name: "Cyan Analytics" },
  };

  const radii = {
    sharp: { px: "4px", label: "4px (Compact)" },
    standard: { px: "12px", label: "12px (Standard)" },
    pill: { px: "24px", label: "24px (Soft)" },
  };

  return (
    <section className="hero-section" id="hero">
      <div className="section-wrapper hero-container">
        {/* Left Column: Intro & Value Proposition */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="live-dot"></span>
            <span>Applying for UI/UX Designer • AssetCues Solutions Pvt. Ltd.</span>
          </div>

          <h1 className="hero-title">
            Hello, I'm <span className="highlight-name">{PERSONAL_INFO.name}</span>
            <span className="hero-subtitle-block">{PERSONAL_INFO.title}</span>
          </h1>

          <p className="hero-bio">
            Final-year BCA student passionate about human-centered design. I design{" "}
            <strong>intuitive, accessible, and user-centered digital experiences</strong> for
            complex enterprise workflows—bridging user research, wireframing, and design systems
            with frontend feasibility.
          </p>

          {/* Core Highlights Pills */}
          <div className="hero-tags">
            <span className="hero-tag">
              <MdShield className="tag-icon" /> WCAG AA Accessibility
            </span>
            <span className="hero-tag">
              <MdAspectRatio className="tag-icon" /> 8pt Grid Systems
            </span>
            <span className="hero-tag">
              <MdAutoAwesome className="tag-icon" /> Interactive Prototyping
            </span>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View My Work</span>
              <MdArrowDownward />
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Apurva_Hippargi_Resume.pdf"
              className="btn btn-secondary hero-btn"
            >
              <MdFileDownload />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick Credibility Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">In-Depth Case Studies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Original UX Research</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">BCA</span>
              <span className="stat-label">Technical Foundation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Design System Inspector (Creativity Element) */}
        <div className="hero-visual">
          <div className="design-studio-card">
            {/* Studio Header Bar */}
            <div className="studio-topbar">
              <div className="studio-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-amber"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="studio-title">
                <span>Design System Inspector</span>
                <span className="studio-badge">Live Interactive Canvas</span>
              </div>
              <button
                className={`grid-toggle-btn ${showGrid ? "active" : ""}`}
                onClick={() => setShowGrid(!showGrid)}
                title="Toggle 8pt Grid Overlay"
              >
                {showGrid ? <MdGridOff /> : <MdGridOn />}
                <span>8pt Grid</span>
              </button>
            </div>

            {/* Studio Canvas Area with Optional 8pt Grid */}
            <div className={`studio-canvas ${showGrid ? "grid-active" : ""}`}>
              {/* Interactive Component Card Being Inspected */}
              <div
                className={`inspect-target-card state-${componentState}`}
                style={{
                  borderRadius: radii[borderRadius].px,
                  borderColor: colors[accentColor].hex,
                }}
              >
                <div className="card-status-bar">
                  <div
                    className="status-chip"
                    style={{
                      backgroundColor: colors[accentColor].bg,
                      color: colors[accentColor].hex,
                    }}
                  >
                    <MdCheckCircle size={14} />
                    <span>Asset #AST-8841 • Active</span>
                  </div>
                  <span className="audit-time">Audit Score: 98.2%</span>
                </div>

                <div className="card-content-body">
                  <h4 className="inspect-item-title">Enterprise Fixed Asset Tracker</h4>
                  <p className="inspect-item-desc">
                    Dual-coded RFID status badge with 8pt baseline padding and WCAG 4.5:1 compliant contrast.
                  </p>
                </div>

                {/* Simulated Action Row */}
                <div className="card-footer-actions">
                  <button
                    className="inspect-action-btn"
                    style={{
                      backgroundColor: colors[accentColor].hex,
                      borderRadius: radii[borderRadius].px,
                    }}
                    onClick={() =>
                      setComponentState(
                        componentState === "verified" ? "default" : "verified"
                      )
                    }
                  >
                    {componentState === "verified" ? (
                      <>
                        <MdCheckCircle /> Verified in Audit
                      </>
                    ) : (
                      <>
                        <span>Scan &amp; Reconcile</span>
                        <MdOpenInNew size={14} />
                      </>
                    )}
                  </button>

                  <span className="inspect-meta-tag">Figma Auto-Layout v5</span>
                </div>
              </div>
            </div>

            {/* Interactive Token Controls (Recruiters can play with these!) */}
            <div className="studio-controls">
              <div className="control-row">
                <span className="control-label">
                  <MdPalette /> Brand Accent:
                </span>
                <div className="token-pills">
                  {(["indigo", "emerald", "cyan"] as const).map((c) => (
                    <button
                      key={c}
                      className={`token-pill ${accentColor === c ? "selected" : ""}`}
                      onClick={() => setAccentColor(c)}
                    >
                      <span
                        className="color-sample"
                        style={{ backgroundColor: colors[c].hex }}
                      ></span>
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="control-row">
                <span className="control-label">
                  <MdAspectRatio /> Corner Radius:
                </span>
                <div className="token-pills">
                  {(["sharp", "standard", "pill"] as const).map((r) => (
                    <button
                      key={r}
                      className={`token-pill ${borderRadius === r ? "selected" : ""}`}
                      onClick={() => setBorderRadius(r)}
                    >
                      {radii[r].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Realtime Accessibility & Token Metric Output */}
              <div className="studio-telemetry">
                <div className="telemetry-item">
                  <span className="telemetry-label">Contrast:</span>
                  <span className="telemetry-value text-emerald">8.4:1 (AAA)</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">Spatial Unit:</span>
                  <span className="telemetry-value">8px Base Grid</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">Token:</span>
                  <span className="telemetry-value font-mono">
                    {colors[accentColor].hex}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
