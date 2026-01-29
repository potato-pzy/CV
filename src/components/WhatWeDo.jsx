import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './WhatWeDo.css';
import Navbar from './Navbar';
import Footer from './Footer';
import AcceleratorsSection from './AcceleratorsSection';
import CTASection from './CTASection';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './HyperSpeedPresets';
import { GlowingEffect } from './GlowingEffect';
import { AnimatePresence, motion } from 'framer-motion';
import envisionLogo from '../assets/envision 1.png';
import proveLogo from '../assets/prove 1.png';
import buildLogo from '../assets/build 1.png';
import adaptLogo from '../assets/Adopt 1.png';
import blog1 from '../assets/discovery_native.jpg';
import blog2 from '../assets/agent_built.jpg';
import blog3 from '../assets/accelerators_native.jpg';

function WhatWeDo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const location = useLocation();

  // Scroll to section if hash is present
  useEffect(() => {
    if (location.hash === '#blog') {
      const scrollToBlog = () => {
        const element = document.getElementById('blog');
        if (element) {
          const headerOffset = 80; // Adjust for sticky navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // Try scrolling after a short delay to ensure DOM is ready
      const timer = setTimeout(scrollToBlog, 100);
      return () => clearTimeout(timer);
    }

    if (location.hash === '#what-we-do-section') {
      const scrollToSection = () => {
        const element = document.getElementById('what-we-do-section');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      const timer = setTimeout(scrollToSection, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.pathname]);

  const frameworks = [
    {
      title: 'Envision',
      description: 'Discover AI transformation opportunities with quantified ROI — so you invest where it matters most.',
      icon: envisionLogo
    },
    {
      title: 'Prove',
      description: 'Validate feasibility fast. Agentic prototypes in weeks — with real ROI data before you commit to scale.',
      icon: proveLogo
    },
    {
      title: 'Build',
      description: 'Production-grade AI at scale. Architected for governance, resilience, and measurable business outcomes.',
      icon: buildLogo
    },
    {
      title: 'Adopt',
      description: 'Enterprise-wide adoption. Continuous enhancement. AI that scales across teams, functions, and markets.',
      icon: adaptLogo
    }
  ];

  const aiSlides = [
    {
      title: 'AI-POWERED DISCOVERY',
      image: blog1,
      text: 'Our AI agents validate transformation hypotheses with consulting-grade rigor, identifying opportunities and quantifying ROI in days, not weeks.',
      blogLink: '/contact'
    },
    {
      title: 'Agent built solutions',
      image: blog2,
      text: 'AI agents analyze, architect, code, and review together. Humans approve what matters. Production-grade output, accelerated timelines.',
      blogLink: '/contact'
    },
    {
      title: 'Pre-built Accelerators',
      image: blog3,
      text: 'Battle-tested components for compliance, document intelligence, and sales enablement. Proven starting points, customized for your context.',
      blogLink: '/contact'
    }
  ];

  const cardVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % aiSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + aiSlides.length) % aiSlides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
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
            <h1 className="what-we-do-title">From strategy to production</h1>
            <p className="what-we-do-subtitle">
              We embed with your team to validate where AI fits, build production-grade agents, and stay until adoption is complete.
            </p>
          </div>
          <div className="scroll-to-explore">
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      <section className="what-we-do-section" id="what-we-do-section">
        <div className="what-we-do-glow"></div>
        <div className="what-we-do-container">

          {/* Framework Cards Grid */}
          <div className="framework-grid">
            {frameworks.map((item, index) => (
              <div key={index} className="framework-card">
                <GlowingEffect
                  blur={0}
                  spread={25}
                  proximity={140}
                  movementDuration={1.2}
                  borderWidth={2}
                  inactiveZone={0.2}
                  disabled={false}
                  className="glowing-effect-overlay"
                />
                <div className="framework-card-inner">
                  <div className="framework-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h3 className="framework-title">{item.title}</h3>
                  <p className="framework-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Discovery card */}
          <div id="blog" className="ai-discovery-section">
            {/* Radial glow effect */}
            <div className="ai-discovery-ellipse-glow" />

            {/* Header */}
            <div className="ai-discovery-header">
              <h2 className="ai-discovery-section-title">AI-native Delivery</h2>
              <p className="ai-discovery-section-subtitle">We use AI to deliver AI transformation</p>
            </div>

            <div className="ai-discovery-carousel-wrapper">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 260, damping: 34, mass: 0.9 },
                    opacity: { duration: 0.25, ease: 'easeOut' }
                  }}
                  className="ai-discovery-card"
                >
                  {/* Image Link Wrapper */}
                  <Link
                    to={aiSlides[currentSlide].blogLink || '#'}
                    className="ai-discovery-image-link"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    {/* Background with image */}
                    <div className="ai-discovery-image-container">
                      <img
                        src={aiSlides[currentSlide].image}
                        alt=""
                        className="ai-discovery-bg-image"
                      />
                      <div className="ai-discovery-gradient-overlay" />

                      {/* Title inside image */}
                      <h3 className="ai-discovery-title">{aiSlides[currentSlide].title}</h3>
                    </div>
                  </Link>

                  {/* Text overlay at bottom */}
                  <div className="ai-discovery-text-overlay">
                    <p className="ai-discovery-text">
                      {aiSlides[currentSlide].text}
                    </p>
                    {aiSlides[currentSlide].blogLink && (
                      <Link
                        to={aiSlides[currentSlide].blogLink}
                        className="ai-discovery-blog-link"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots - outside card */}
            <div className="ai-discovery-pagination">
              {aiSlides.map((_, index) => (
                <span
                  key={index}
                  className={`ai-discovery-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons - outside card */}
            <div className="ai-discovery-controls">
              <button className="ai-discovery-btn ai-discovery-btn-prev" onClick={prevSlide} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="ai-discovery-btn ai-discovery-btn-next" onClick={nextSlide} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
