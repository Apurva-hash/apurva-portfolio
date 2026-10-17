import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import {
  MdLayers,
  MdPalette,
  MdDesignServices,
  MdCode,
  MdCheckCircleOutline,
  MdInfoOutline,
} from "react-icons/md";
import "./styles/Skills.css";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categoryIcons = [
    <MdLayers key="ux" />,
    <MdPalette key="ui" />,
    <MdDesignServices key="tools" />,
    <MdCode key="tech" />,
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MdLayers />
            <span>Honest &amp; Verified Skillset</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span>Design Competencies</span>
          </h2>
          <p className="section-description">
            Organized across UX methodologies, UI systems, industry design tools, and supporting technical fundamentals. No unverified claims—strictly practiced competencies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs" role="tablist">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeTab === idx}
                className={`tab-btn ${activeTab === idx ? "active" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="tab-icon">{categoryIcons[idx]}</span>
                <span className="tab-text">{cat.title}</span>
                <span className="tab-count">{cat.skills.length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Panel */}
        <div className="skills-content-panel">
          <div className="panel-header">
            <h3 className="panel-category-title">{SKILL_CATEGORIES[activeTab].title}</h3>
            <p className="panel-category-desc">{SKILL_CATEGORIES[activeTab].description}</p>
          </div>

          <div className="skills-cards-grid">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
              <div key={index} className="skill-card glass-card">
                <div className="skill-card-top">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span
                    className={`skill-level-badge level-${skill.level
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <MdCheckCircleOutline size={13} />
                    {skill.level}
                  </span>
                </div>
                <p className="skill-detail">{skill.details}</p>
              </div>
            ))}
          </div>

          {/* Transparency Disclaimer Note */}
          <div className="skills-disclaimer">
            <MdInfoOutline className="disclaimer-icon" />
            <span>
              <strong>Fresher Transparency Commitment:</strong> I do not claim senior or 5-year expert status. Every skill listed represents techniques practiced in college capstones, independent case studies, and hands-on Figma exploration.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
