import React, { useState } from "react";
import { DESIGN_PROCESS_STEPS } from "../data/portfolioData";
import {
  MdLightbulbOutline,
  MdExplore,
  MdTune,
  MdAutoAwesome,
  MdBrush,
  MdDevices,
  MdFactCheck,
  MdCheck,
  MdFormatQuote,
} from "react-icons/md";
import "./styles/DesignProcess.css";

export const DesignProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    <MdExplore key="0" />,
    <MdTune key="1" />,
    <MdLightbulbOutline key="2" />,
    <MdBrush key="3" />,
    <MdDevices key="4" />,
    <MdFactCheck key="5" />,
  ];

  const currentStep = DESIGN_PROCESS_STEPS[activeStep];

  return (
    <section className="process-section" id="process">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MdAutoAwesome />
            <span>Human-Centered Methodology</span>
          </div>
          <h2 className="section-title">
            Structured <span>Design Process</span>
          </h2>
          <p className="section-description">
            A rigorous 6-stage framework balancing exploratory user empathy with systematic interface execution and heuristic validation.
          </p>
        </div>

        {/* Process Stepper Timeline */}
        <div className="stepper-container">
          <div className="stepper-track">
            {DESIGN_PROCESS_STEPS.map((s, index) => (
              <button
                key={s.step}
                className={`step-node ${activeStep === index ? "active" : ""} ${
                  index < activeStep ? "completed" : ""
                }`}
                onClick={() => setActiveStep(index)}
                aria-label={`Step ${s.step}: ${s.title}`}
              >
                <div className="step-circle">
                  <span className="step-icon">{stepIcons[index]}</span>
                  <span className="step-num">{s.step}</span>
                </div>
                <span className="step-title-label">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Active Step Card */}
        <div className="active-step-card glass-card">
          <div className="step-card-header">
            <div className="step-num-pill">Stage {currentStep.step} of 06</div>
            <h3 className="step-heading">
              {currentStep.title} — <span className="step-tagline">{currentStep.tagline}</span>
            </h3>
            <p className="step-main-desc">{currentStep.description}</p>
          </div>

          <div className="step-columns-grid">
            {/* Activities List */}
            <div className="step-column">
              <h4 className="column-heading">Key Activities &amp; Methodologies</h4>
              <ul className="step-items-list">
                {currentStep.activities.map((act, i) => (
                  <li key={i} className="step-item">
                    <span className="item-bullet">
                      <MdCheck />
                    </span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables List */}
            <div className="step-column">
              <h4 className="column-heading">Core UX Artifacts &amp; Deliverables</h4>
              <ul className="step-items-list">
                {currentStep.deliverables.map((del, i) => (
                  <li key={i} className="step-item deliverable-item">
                    <span className="item-bullet bullet-cyan">✦</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>

              {/* Philosophy Quote Box */}
              <div className="philosophy-box">
                <MdFormatQuote className="quote-icon" />
                <p className="philosophy-text">{currentStep.uxPhilosophy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
