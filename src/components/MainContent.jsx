import React from 'react'
import '../styles/MainContent.css'

const MainContent = () => {
  return (
    <section className="main-content">
      <div className="hero-image-container">
        <div className="hero-image-background"></div>
        <img 
          src="src/images/image.png" 
          alt="Reachwise Dashboard Interface" 
          className="hero-image"
        />
      </div>
    </section>
  )
}

export default MainContent
