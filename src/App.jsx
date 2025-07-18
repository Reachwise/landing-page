import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MainContent from './components/MainContent'
import FeaturesSection from './components/FeaturesSection'
import TestimonialSection from './components/TestimonialSection'
import CTASection from './components/CTASection'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <MainContent />
        <FeaturesSection />
        <TestimonialSection />
        <CTASection />
      </main>
    </div>
  )
}

export default App
