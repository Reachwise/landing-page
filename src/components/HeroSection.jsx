import React from "react";
import Button from "./Button";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <span className="badge-text">LinkedIn Outreach On Autopilot</span>
      </div>

      <div className="hero-content">
        <h2 className="hero-title">
          Your day is too short for
          <br />
          endless manual <span className="highlighted-word">outreach?</span>
        </h2>

        <p className="hero-description">
          Meet <strong>Reachwise</strong>. It understands your ICP and brand
          voice, and quietly handles the details. While you focus on calls and
          demos, Reachwise is <em>flying</em> the LinkedIn outreach: finding
          prospects, tailoring intros, and scheduling follow-ups.
        </p>

        <Button variant="primary" className="hero-cta">
          Join the Waitlist
          {/* <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/BKPD4iE7dt.svg"
            alt=""
            className="button-icon"
          /> */}
        </Button>

        <p className="no-credit-card">No credit card needed</p>
      </div>
    </section>
  );
};

export default HeroSection;
