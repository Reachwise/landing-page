import React from 'react'
import '../styles/MainContent.css'

const MainContent = () => {
  return (
    <section className="main-content">
      <div className="hero-image-container">
        <div className="hero-image-background"></div>
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/WBaG9yAOtu.png" 
          alt="Reachwise Dashboard Interface" 
          className="hero-image"
        />
      </div>
    </section>
  )
}

export default MainContent
