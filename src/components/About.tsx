import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  MdSchool,
  MdLayers,
  MdAccessibilityNew,
  MdCode,
  MdCheck,
  MdAutoAwesome,
  MdTrendingUp,
} from "react-icons/md";
import "./styles/About.css";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <MdAccessibilityNew />,
      title: "Human-Centered Usability",
      description:
        "Deeply curious about user mental models, task friction points, and reducing cognitive load in data-heavy enterprise environments.",
    },
    {
      icon: <MdLayers />,
      title: "Information Architecture",
      description:
        "Structuring complex data into intuitive, scannable hierarchies so operators and managers can make high-stakes decisions faster.",
    },
    {
      icon: <MdCode />,
      title: "Technical Feasibility (BCA)",
      description:
        "My computer applications coursework gives me strong empathy for frontend developers—designing components that are robust and feasible to build.",
    },
    {
      icon: <MdTrendingUp />,
      title: "Systematic Design Craft",
      description:
        "Leveraging Figma auto-layout, tokenized color variables, 8pt spatial rhythm, and WCAG AA contrast standards from day one.",
    },
  ];

  const highlights = [
    "Final-year Bachelor of Computer Applications (BCA) student",
    "Specialized focus on Enterprise UI/UX & Information Architecture",
    "Figma proficiency: Components, Auto-Layout v5 & Interactive Prototyping",
    "Hands-on foundational skills in HTML, CSS, JavaScript, and Git",
    "Targeting the UI/UX Designer role at AssetCues Solutions Pvt. Ltd.",
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MdSchool />
            <span>Academic Background &amp; Design Mindset</span>
          </div>
          <h2 className="section-title">
            Bridging <span>Computer Applications</span> with User Experience
          </h2>
          <p className="section-description">
            An honest, fresher perspective rooted in curiosity, systematic design thinking, and practical software understanding.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Personal Narrative */}
          <div className="about-story-card glass-card">
            <div className="story-header">
              <div className="story-badge">
                <MdAutoAwesome />
                <span>Fresher UI/UX Designer</span>
              </div>
              <h3 className="story-title">Why Enterprise UI/UX Inspires Me</h3>
            </div>

            <p className="story-para">
              As a <strong>Bachelor of Computer Applications (BCA)</strong> student, I quickly realized that the greatest software in the world fails if real human beings cannot navigate it effortlessly.
            </p>

            <p className="story-para">
              While consumer apps prioritize virality, <strong>enterprise solutions—like the asset management, tracking, and compliance platforms built by {PERSONAL_INFO.targetCompany}—solve vital operational realities</strong>. Every saved click, clear status indicator, and well-structured data table saves hours of employee fatigue and prevents costly inventory errors.
            </p>

            <p className="story-para">
              I bring an honest, motivated fresher's work ethic: no outdated assumptions, an eager appetite to learn your team's design systems, and the ability to converse fluidly with frontend developers because I understand the underlying code.
            </p>

            <div className="story-checklist">
              <h4 className="checklist-heading">Key Background Highlights:</h4>
              <ul className="checklist">
                {highlights.map((item, index) => (
                  <li key={index} className="checklist-item">
                    <span className="check-icon">
                      <MdCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="about-pillars">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <div className="pillar-content">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
