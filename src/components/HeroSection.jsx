import React, { useState } from "react";
import Button from "./Button";
import "../styles/HeroSection.css";
import JoinWaitlistModal from "./JoinWaitlistModal";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleJoinClick = (e) => {
    e.preventDefault(); // ✅ prevent default form or anchor behavior
    setShowModal(true);
  };
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

        <Button
          variant="primary"
          className="hero-cta"
          onClick={handleJoinClick}
        >
          Join the Waitlist
          {/* Optional icon */}
          {/* <img
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/BKPD4iE7dt.svg"
          alt=""
          className="button-icon"
        /> */}
        </Button>

        <JoinWaitlistModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
        <p className="no-credit-card">No credit card needed</p>
      </div>
    </section>
  );
};

export default HeroSection;
