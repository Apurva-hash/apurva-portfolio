import React, { useState } from "react";
import { PROJECTS, Project } from "../data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";
import {
  MdWorkOutline,
  MdArrowForward,
  MdVisibility,
} from "react-icons/md";
import "./styles/Projects.css";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterOptions = [
    { id: "all", label: "All Work", count: PROJECTS.length },
    { id: "Enterprise UX Concept", label: "Enterprise UX Concept", count: 1 },
    { id: "BI Dashboard & UX", label: "BI Dashboard & UX", count: 1 },
    { id: "Data Storytelling & UX", label: "Data Storytelling & UX", count: 1 },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === "all") return true;
    return p.category === selectedFilter;
  });

  return (
    <section className="projects-section" id="projects">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MdWorkOutline />
            <span>Curated Portfolio Work</span>
          </div>
          <h2 className="section-title">
            Featured <span>Projects &amp; Case Studies</span>
          </h2>
          <p className="section-description">
            Carefully structured case studies highlighting enterprise design systems, information architecture, business intelligence dashboards, and cognitive load reduction.
          </p>
        </div>

        {/* Filter Chips Bar */}
        <div className="projects-filter-bar">
          <div className="filter-chips">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                className={`filter-chip ${selectedFilter === opt.id ? "active" : ""}`}
                onClick={() => setSelectedFilter(opt.id)}
              >
                <span>{opt.label}</span>
                <span className="filter-count">{opt.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((project, index) => (
            <article key={project.id} className="project-card glass-card">
              {/* Card Image Banner */}
              <div
                className="project-image-container"
                onClick={() => setActiveModalProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveModalProject(project);
                  }
                }}
                aria-label={`Open case study for ${project.title}`}
              >
                <img
                  src={project.heroImage}
                  alt={`${project.title} Interface Preview`}
                  className="project-thumbnail"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span className="view-case-study-pill">
                    <MdVisibility /> View Full Case Study
                  </span>
                </div>

                {/* Category Floating Badge */}
                <div className="card-badge-floating">
                  <span
                    className={`badge badge-${
                      project.badgeType === "concept"
                        ? "concept"
                        : project.badgeType === "bi-project"
                        ? "bi"
                        : "data"
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-content">
                <div className="project-number-tag">0{index + 1}</div>

                <h3 className="project-heading">
                  <button
                    className="project-heading-btn"
                    onClick={() => setActiveModalProject(project)}
                  >
                    {project.title}
                  </button>
                </h3>

                <p className="project-tagline">{project.tagline}</p>

                {/* Summary Excerpt */}
                <p className="project-summary-text">{project.summary}</p>

                {/* Key Metrics / Highlights Row */}
                {project.overview.keyMetrics && (
                  <div className="project-card-metrics">
                    {project.overview.keyMetrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="card-metric">
                        <span className="metric-badge-value">{m.value}</span>
                        <span className="metric-badge-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tools Chips */}
                <div className="project-tools-row">
                  {project.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="project-tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Card Footer CTA */}
                <div className="project-card-footer">
                  <button
                    className="btn btn-outline card-cta-btn"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <span>Read Complete Case Study</span>
                    <MdArrowForward />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal Deep Dive Reader */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
