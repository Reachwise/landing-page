import React from "react";
import "../styles/FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <article className="feature-card deep-insight">
          <div>
            <h3 className="feature-title">Deep Prospect Insight</h3>
            <p className="feature-description">
              We analyse 42 LinkedIn signals role changes, activity spikes,
              company size to surface only your most responsive prospects.
            </p>
          </div>
          <div className="prospect-card">
            <div className="prospect-info">
              <img
                src="/src/images/profileimage.png"
                alt="Joseph Mercer"
                className="prospect-avatar"
              />
              <div className="prospect-details">
                <h4 className="prospect-name">Joseph Mercer</h4>
                <p className="prospect-role">Head of CX Research at Triox</p>
              </div>
            </div>
            <img
              src="/src/images/linkedin.png"
              alt="LinkedIn"
              className="linkedin-icon"
            />
          </div>
        </article>

        <article className="feature-card personalization">
          <div className="message-preview">
            <div className="message-header">
              <span className="message-label">Subject:</span>
              <span className="message-subject">Scaling Triox sales team?</span>
            </div>
            <div className="message-body">
              Hey Ali, thanks for connecting! We've found a unique way to turn
              cold outreach into warm, qualified leads. Would you be interested
              <br />
              if i send over a quick invite?
            </div>
          </div>
          <h3 className="feature-title">True Personalization</h3>
          <p className="feature-description">
            Our AI learns your tone and weaves in real profile details, job
            milestone and interests, so every message reads as if you wrote it,
            not a bot ever.
          </p>
        </article>

        <article className="feature-card automation">
          <div className="activity-log">
            <div className="activity-item">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/D4qHzanAy5.svg"
                alt=""
                className="activity-icon"
              />
              <span className="activity-text">
                Connection request was sent to <span className="name-color">Aubrey Lau</span>
              </span>
              <span className="activity-time">Today, 04:56 pm</span>
            </div>
            <div className="activity-item">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/uvrho2HFHM.svg"
                alt=""
                className="activity-icon"
              />
              <span className="activity-text">
                Follow-up message sent to <span className="name-color">Suanne Hall</span>
              </span>
              <span className="activity-time">Today, 03:18 pm</span>
            </div>
            <div className="activity-item">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/uPTKq3vDXj.svg"
                alt=""
                className="activity-icon"
              />
              <span className="activity-text">
                Viewed profile of <span className="name-color">Aubrey Lau</span>
              </span>
              <span className="activity-time">Today, 03:02 pm</span>
            </div>
          </div>
          <h3 className="feature-title">Set It And Forget It</h3>
          <p className="feature-description">
            Reachwise handles follow‑ups, retries, and scheduling around the
            clock day and night so you never leave a lead waiting for your next
            move.
          </p>
        </article>
      </div>
    </section>
  );
};

export default FeaturesSection;
