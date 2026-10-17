import React, { useState, useEffect } from "react";
import { Project } from "../data/portfolioData";
import {
  MdClose,
  MdSpeed,
  MdInfoOutline,
  MdSearch,
  MdCheckCircle,
  MdRefresh,
} from "react-icons/md";
import "./styles/CaseStudyModal.css";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "ux" | "interface" | "testing">("overview");

  // Interactive Live Table Simulation for AssetPulse Concept
  const [tableSearch, setTableSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Sample mock assets for live interactive demo
  const sampleAssets = [
    { id: "AST-8841", name: 'MacBook Pro 16" M3 Max', serial: "C02FG920MD6R", category: "IT Hardware", dept: "Engineering", status: "Active", audit: "Verified Today", rfid: "RFID-9921" },
    { id: "AST-8842", name: "Dell PowerEdge R750 Server", serial: "8H7K2B3", category: "IT Hardware", dept: "Infrastructure", status: "Audit Due", audit: "14 Days Overdue", rfid: "RFID-4412" },
    { id: "AST-8843", name: "Industrial Zebra RFID Scanner", serial: "ZBR-990-21", category: "Warehouse", dept: "Logistics", status: "Maintenance", audit: "Yesterday", rfid: "RFID-1109" },
    { id: "AST-8844", name: "Cisco Catalyst 9300 Switch", serial: "FCW2410L03", category: "Network", dept: "NetOps", status: "Active", audit: "3 Days Ago", rfid: "RFID-8832" },
    { id: "AST-8845", name: 'HP LaserJet Enterprise M608', serial: "PHB883190", category: "Office Gear", dept: "Operations", status: "Active", audit: "Verified Today", rfid: "RFID-5521" },
  ];

  const filteredAssets = sampleAssets.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
      item.id.toLowerCase().includes(tableSearch.toLowerCase()) ||
      item.serial.toLowerCase().includes(tableSearch.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && item.status === "Active") ||
      (statusFilter === "audit-due" && item.status === "Audit Due") ||
      (statusFilter === "maintenance" && item.status === "Maintenance");
    return matchesSearch && matchesStatus;
  });

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Sticky Header */}
        <div className="modal-top-bar">
          <div className="modal-title-group">
            <span
              className={`badge badge-${project.badgeType === "concept" ? "concept" : project.badgeType === "bi-project" ? "bi" : "data"}`}
            >
              {project.badge}
            </span>
            <h3 id="modal-project-title" className="modal-title">
              {project.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
            <MdClose size={24} />
          </button>
        </div>

        {/* Disclaimer Banner for Concept Clarity */}
        {project.isConcept && project.conceptDisclaimer && (
          <div className="modal-disclaimer-banner">
            <MdInfoOutline className="disclaimer-icon" />
            <p>{project.conceptDisclaimer}</p>
          </div>
        )}

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs-bar">
          <button
            className={`modal-tab ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview &amp; Context
          </button>
          <button
            className={`modal-tab ${activeTab === "ux" ? "active" : ""}`}
            onClick={() => setActiveTab("ux")}
          >
            UX Architecture &amp; Rationale
          </button>
          <button
            className={`modal-tab ${activeTab === "interface" ? "active" : ""}`}
            onClick={() => setActiveTab("interface")}
          >
            Visual Interface {project.id === "asset-management-concept" && "& Live Demo"}
          </button>
          <button
            className={`modal-tab ${activeTab === "testing" ? "active" : ""}`}
            onClick={() => setActiveTab("testing")}
          >
            Testing &amp; Key Learnings
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="tab-pane">
              {/* Hero Image */}
              <div className="case-hero-image-wrapper">
                <img
                  src={project.heroImage}
                  alt={`${project.title} Interface Preview`}
                  className="case-hero-image"
                />
              </div>

              {/* Meta Stats Row */}
              <div className="case-meta-grid">
                <div className="case-meta-item">
                  <span className="meta-label">My Role</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="case-meta-item">
                  <span className="meta-label">Timeline</span>
                  <span className="meta-value">{project.timeline}</span>
                </div>
                <div className="case-meta-item">
                  <span className="meta-label">Target Audience</span>
                  <span className="meta-value">{project.audience}</span>
                </div>
                <div className="case-meta-item">
                  <span className="meta-label">Tools &amp; Tech</span>
                  <div className="meta-tools-chips">
                    {project.tools.map((t, i) => (
                      <span key={i} className="tool-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Problem & Objective Box */}
              <div className="case-problem-section">
                <div className="problem-box">
                  <h4 className="box-title">The Challenge &amp; Problem Statement</h4>
                  <p className="box-text">{project.overview.problem}</p>
                </div>
                <div className="objective-box">
                  <h4 className="box-title">UX Objective &amp; Design Goal</h4>
                  <p className="box-text">{project.overview.objective}</p>
                </div>
              </div>

              {/* Target Key Metrics */}
              {project.overview.keyMetrics && (
                <div className="case-metrics-container">
                  <h4 className="metrics-title">Target Impact &amp; Usability Benchmarks</h4>
                  <div className="case-metrics-grid">
                    {project.overview.keyMetrics.map((metric, idx) => (
                      <div key={idx} className="metric-card">
                        <span className="metric-val">{metric.value}</span>
                        <span className="metric-lbl">{metric.label}</span>
                        <span className="metric-desc">{metric.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables List */}
              <div className="case-deliverables">
                <h4 className="deliverables-title">Key Artifacts &amp; Deliverables Created</h4>
                <div className="deliverables-chips">
                  {project.deliverables.map((item, idx) => (
                    <span key={idx} className="deliverable-chip">
                      <MdCheckCircle /> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: UX BREAKDOWN */}
          {activeTab === "ux" && (
            <div className="tab-pane">
              <div className="ux-sections-list">
                {project.uxBreakdown.map((section, idx) => (
                  <div key={idx} className="ux-breakdown-card">
                    <h4 className="breakdown-heading">{section.title}</h4>
                    <p className="breakdown-lead">{section.description}</p>
                    <div className="breakdown-points">
                      {section.points.map((pt, pIdx) => (
                        <div key={pIdx} className="breakdown-point">
                          <h5 className="point-title">{pt.heading}</h5>
                          <p className="point-detail">{pt.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: VISUAL INTERFACE & INTERACTIVE DEMO */}
          {activeTab === "interface" && (
            <div className="tab-pane">
              <div className="interface-showcase">
                <h4 className="interface-title">High-Fidelity Interface System</h4>
                <p className="interface-subtitle">
                  Engineered with an 8pt baseline spatial grid, WCAG 2.1 AA/AAA compliant color tokens, and cognitive hierarchy.
                </p>

                <div className="interface-full-preview">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} Full Interface`}
                    className="full-preview-image"
                  />
                </div>

                {/* Interactive Simulator only for AssetPulse Concept */}
                {project.id === "asset-management-concept" && (
                  <div className="live-demo-interactive-box">
                    <div className="interactive-header">
                      <div>
                        <h4 className="demo-title">
                          <MdSpeed /> Interactive Asset Table Prototype
                        </h4>
                        <p className="demo-desc">
                          Test search, status filters, and row inspection directly in this sandbox to evaluate table usability and feedback states.
                        </p>
                      </div>
                      <button
                        className="btn btn-outline reset-demo-btn"
                        onClick={() => {
                          setTableSearch("");
                          setStatusFilter("all");
                          setSelectedAsset(null);
                        }}
                      >
                        <MdRefresh /> Reset Filters
                      </button>
                    </div>

                    {/* Filter & Search Bar */}
                    <div className="demo-filter-bar">
                      <div className="demo-search-box">
                        <MdSearch className="search-icon" />
                        <input
                          type="text"
                          placeholder="Search asset name, ID, or serial..."
                          value={tableSearch}
                          onChange={(e) => setTableSearch(e.target.value)}
                          className="demo-search-input"
                        />
                      </div>

                      <div className="demo-chips">
                        <button
                          className={`demo-filter-chip ${statusFilter === "all" ? "active" : ""}`}
                          onClick={() => setStatusFilter("all")}
                        >
                          All ({sampleAssets.length})
                        </button>
                        <button
                          className={`demo-filter-chip ${statusFilter === "active" ? "active" : ""}`}
                          onClick={() => setStatusFilter("active")}
                        >
                          Active
                        </button>
                        <button
                          className={`demo-filter-chip ${statusFilter === "audit-due" ? "active" : ""}`}
                          onClick={() => setStatusFilter("audit-due")}
                        >
                          Audit Due
                        </button>
                        <button
                          className={`demo-filter-chip ${statusFilter === "maintenance" ? "active" : ""}`}
                          onClick={() => setStatusFilter("maintenance")}
                        >
                          Maintenance
                        </button>
                      </div>
                    </div>

                    {/* Live Data Table */}
                    <div className="demo-table-wrapper">
                      <table className="demo-table">
                        <thead>
                          <tr>
                            <th>Asset ID</th>
                            <th>Item Specification</th>
                            <th>Department</th>
                            <th>Status Badge</th>
                            <th>Audit Verification</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredAssets.length > 0 ? (
                            filteredAssets.map((asset) => (
                              <tr
                                key={asset.id}
                                className={selectedAsset === asset.id ? "row-selected" : ""}
                              >
                                <td className="mono-text">{asset.id}</td>
                                <td>
                                  <div className="cell-strong">{asset.name}</div>
                                  <div className="cell-sub">{asset.serial}</div>
                                </td>
                                <td>{asset.dept}</td>
                                <td>
                                  <span
                                    className={`table-status-badge status-${asset.status.toLowerCase().replace(/\s+/g, "-")}`}
                                  >
                                    {asset.status}
                                  </span>
                                </td>
                                <td className="cell-sub">{asset.audit}</td>
                                <td>
                                  <button
                                    className="table-action-btn"
                                    onClick={() =>
                                      setSelectedAsset(
                                        selectedAsset === asset.id ? null : asset.id
                                      )
                                    }
                                  >
                                    {selectedAsset === asset.id ? "Done" : "Inspect"}
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={6} className="table-empty">
                                No assets match the filter criteria.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Quick Inspection Drawer Simulation */}
                    {selectedAsset && (
                      <div className="demo-inspect-drawer">
                        <div className="drawer-header">
                          <h5 className="drawer-title">
                            Quick Inspector: {selectedAsset}
                          </h5>
                          <button
                            className="drawer-close"
                            onClick={() => setSelectedAsset(null)}
                          >
                            ✕
                          </button>
                        </div>
                        <p className="drawer-body">
                          Simulated drawer overlay for physical audit verification. Handheld barcode scan automatically triggers timestamp record and updates AssetCues compliance audit trail without full page navigation.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: USABILITY TESTING & REFLECTION */}
          {activeTab === "testing" && (
            <div className="tab-pane">
              <div className="reflection-card glass-card">
                <h4 className="reflection-title">Design Learnings &amp; Insights</h4>
                <p className="reflection-text">{project.reflection.learned}</p>

                <h4 className="reflection-title" style={{ marginTop: "24px" }}>
                  Future Evolution &amp; Production Roadmap
                </h4>
                <p className="reflection-text">{project.reflection.nextSteps}</p>

                {/* Usability Testing Protocol for Concept */}
                {project.id === "asset-management-concept" && (
                  <div className="testing-protocol-box">
                    <h5 className="protocol-title">Recommended Usability Testing Framework</h5>
                    <ul className="protocol-list">
                      <li>
                        <strong>Method:</strong> Moderated Think-Aloud Protocol with 5 Enterprise Asset Managers &amp; Field Auditors.
                      </li>
                      <li>
                        <strong>Task Scenario 1:</strong> "Locate the Dell PowerEdge Server due for audit in Campus East and reassign to NetOps."
                      </li>
                      <li>
                        <strong>Task Scenario 2:</strong> "Perform batch status update on 3 RFID scanners marked 'In Calibration'."
                      </li>
                      <li>
                        <strong>Success Metric:</strong> System Usability Scale (SUS) target score of ≥ 82, and Time-On-Task reduction of ≥ 35%.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
