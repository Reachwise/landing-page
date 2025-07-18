import React from 'react'
import Button from './Button'
import '../styles/CTASection.css'

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-background-text">Reachwise</div>
      </div>
      <div className="cta-content">
        <h2 className="cta-title">Stop chasing, start closing</h2>
        <p className="cta-description">
          Don't let another lead slip away, reserve your spot now and wake up to new meetings.
        </p>
        <Button variant="secondary" className="cta-button">
          Reserve My Spot
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/4S8RU7ruRZ.svg" alt="" className="button-icon" />
        </Button>
      </div>
    </section>
  )
}

export default CTASection
