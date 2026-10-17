import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  MdMailOutline,
  MdContentCopy,
  MdCheck,
  MdSend,
  MdCorporateFare,
} from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles/Contact.css";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Inquiry regarding UI/UX Designer role at AssetCues",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MdMailOutline />
            <span>Let's Connect</span>
          </div>
          <h2 className="section-title">
            Start a <span>Conversation</span>
          </h2>
          <p className="section-description">
            Eager to discuss how my UI/UX design thinking, information architecture, and technical frontend foundations can add value to {PERSONAL_INFO.targetCompany}.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Channels & Company Alignment */}
          <div className="contact-channels-card glass-card">
            <div className="channels-header">
              <h3 className="channels-title">Direct Contact Channels</h3>
              <p className="channels-desc">
                Feel free to reach out directly via email, connect on LinkedIn, or inspect my repositories on GitHub.
              </p>
            </div>

            {/* Email Channel Card */}
            <div className="channel-box">
              <div className="channel-icon-box">
                <MdMailOutline />
              </div>
              <div className="channel-info">
                <span className="channel-label">Email Address</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="channel-value">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <MdCheck className="text-emerald" /> : <MdContentCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* LinkedIn Channel Card */}
            <div className="channel-box">
              <div className="channel-icon-box icon-linkedin">
                <FaLinkedin />
              </div>
              <div className="channel-info">
                <span className="channel-label">LinkedIn Profile</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                >
                  linkedin.com/in/apurva-hippargi
                </a>
              </div>
            </div>

            {/* GitHub Channel Card */}
            <div className="channel-box">
              <div className="channel-icon-box icon-github">
                <FaGithub />
              </div>
              <div className="channel-info">
                <span className="channel-label">GitHub Repository</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                >
                  github.com/Apurva-hash
                </a>
              </div>
            </div>

            {/* Application Alignment Statement */}
            <div className="company-alignment-box">
              <div className="alignment-icon-badge">
                <MdCorporateFare />
              </div>
              <div>
                <h4 className="alignment-title">Dedicated to {PERSONAL_INFO.targetCompany}</h4>
                <p className="alignment-text">
                  "I am actively seeking an entry-level UI/UX Designer role where I can specialize in enterprise systems, asset management workflows, and accessible design systems under experienced product mentors."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-card glass-card">
            {formSubmitted ? (
              <div className="form-success-state">
                <div className="success-icon-box">
                  <MdCheck size={36} />
                </div>
                <h3 className="success-title">Message Sent Successfully!</h3>
                <p className="success-desc">
                  Thank you for reviewing my portfolio and reaching out. I will respond to your message within 24 hours.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      subject: "Inquiry regarding UI/UX Designer role at AssetCues",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send a Direct Message</h3>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. AssetCues Hiring Team"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. hr@assetcues.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Share feedback, interview invitation, or project inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <span>Send Message</span>
                  <MdSend />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
