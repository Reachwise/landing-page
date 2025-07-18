import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <h1 className="logo-text">Reachwise</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
