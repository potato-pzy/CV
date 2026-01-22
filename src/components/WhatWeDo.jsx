import { useState } from 'react';
import './WhatWeDo.css';
import Navbar from './Navbar';
import Footer from './Footer';
import AcceleratorsSection from './AcceleratorsSection';
import CTASection from './CTASection';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './HyperSpeedPresets';
import { GlowingEffect } from './GlowingEffect';

// Placeholder images - replace with actual assets
const imgBackground = 'https://www.figma.com/api/mcp/asset/d5590780-6fd5-4a77-a667-2dd5b58164c9';
const imgCarousel1 = 'https://www.figma.com/api/mcp/asset/25591f7e-9e9b-4d30-b145-083fbcfd3fdb';

function WhatWeDo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const frameworks = [
    {
      title: 'Envision',
      description: 'Discover AI transformation opportunities with quantified ROI — so you invest where it matters most.',
      icon: '👁️'
    },
    {
      title: 'Prove',
      description: 'Validate feasibility fast. Agentic prototypes in weeks — with real ROI data before you commit to scale.',
      icon: '🔬'
    },
    {
      title: 'Build',
      description: 'Production-grade AI at scale. Architected for governance, resilience, and measurable business outcomes.',
      icon: '🔨'
    },
    {
      title: 'Adapt',
      description: 'Enterprise-wide adoption. Continuous enhancement. AI that scales across teams, functions, and markets.',
      icon: '🔄'
    }
  ];

  const slides = [
    {
      image: imgCarousel1,
      text: 'Our AI agents validate transformation hypotheses with consulting-grade rigor, identifying opportunities and quantifying ROI in days, not weeks.'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="what-we-do-page">
      <Navbar />

      {/* Hero Section with Hyperspeed */}
      <section className="what-we-do-hero-section">
        <div className="hyperspeed-container">
          <Hyperspeed effectOptions={hyperspeedPresets.one} />
        </div>
        <div className="hero-content-overlay">
          <div className="what-we-do-hero">
            <h1 className="what-we-do-title">The vectorial framework</h1>
            <p className="what-we-do-subtitle">
              <span>From vision to adoption</span>
              <span className="highlight"> — accelerated by AI.</span>
            </p>
            <p className="what-we-do-tagline">We use AI to deliver AI transformation</p>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="what-we-do-container">

          {/* Framework Cards Grid */}
          <div className="framework-grid">
            {frameworks.map((item, index) => (
              <div key={index} className="framework-card">
                <GlowingEffect
                  blur={24}
                  spread={45}
                  proximity={160}
                  movementDuration={1.2}
                  borderWidth={2}
                  inactiveZone={0.3}
                  disabled={false}
                  className="glowing-effect-overlay"
                />
                <div className="framework-card-inner">
                  <div className="framework-icon">{item.icon}</div>
                  <h3 className="framework-title">{item.title}</h3>
                  <p className="framework-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* AI-Native Delivery Section */}
          <div className="ai-delivery-section">
            <div className="ai-delivery-header">
              <h2 className="ai-delivery-title">AI-Native Delivery</h2>
              <p className="ai-delivery-subtitle">We use AI to deliver AI transformation</p>
            </div>

            {/* Carousel */}
            <div className="carousel-container">
              <div className="carousel-image-wrapper">
                <img 
                  src={slides[currentSlide].image} 
                  alt="AI Delivery" 
                  className="carousel-image"
                />
              </div>
              
              <div className="carousel-text-overlay">
                <p>{slides[currentSlide].text}</p>
              </div>

              {/* Pagination Dots */}
              <div className="carousel-pagination">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="carousel-controls">
              <button 
                className="carousel-btn carousel-btn-prev" 
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button 
                className="carousel-btn carousel-btn-next" 
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      <AcceleratorsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default WhatWeDo;
