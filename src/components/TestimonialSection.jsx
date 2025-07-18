import React from 'react'
import '../styles/TestimonialSection.css'

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <blockquote className="testimonial-quote">
          Reachwise is hands down the smartest addition to our sales stack. In just two weeks, it <mark>filled our pipeline with pre‑qualified</mark> LinkedIn leads so our team finally focuses on closing, not chasing.
        </blockquote>
        <cite className="testimonial-author">Alexandra Chen, an early adopter</cite>
      </div>
    </section>
  )
}

export default TestimonialSection
