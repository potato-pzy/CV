import { Link } from 'react-router-dom';
import './NewPage.css'
import './AboutSection.css'
import './ProductsSection.css'
import Hero from './Hero'
import ProductsSection from './ProductsSection'
import WhySection from './WhySection'
import CaseStudiesSection from './CaseStudiesSection'
import TestimonialsCarousel from './TestimonialsCarousel'
import CTASection from './CTASection'
import Footer from './Footer'
import aboutLogo from '../assets/about logo .png'
import aboutLeft from '../assets/ Images/Web Images/HOMEPAGE/Top Right.jpg'

function AboutGlow() {
  return (
    <div className="about-glow-top-right">
      <div className="about-glow-ellipse" />
    </div>
  )
}

function NewPage() {
  return (
    <div className="new-page">
      <Hero />
      <section className="about-section">
        <AboutGlow />
        <div className="about-content">
          <div className="about-left">
            <h2 className="about-heading">
              <span className="about-heading-green">AI products</span> <br className="about-mob-break" />
              built for<br />
              how you work.
            </h2>
            <div className="about-text-container">
              <p className="about-description">
                A new model for AI adoption.<br /><br />
                Production-ready AI products, configured to how you work. From our library or built for you, deployed in weeks.<br /><br />
                No adaptation. No compromise. Just results.
              </p>
              <Link to="/whatwedo" className="btn-see-how">See it in Action</Link>
            </div>
            <div className="about-image-abstract">
              <img src={aboutLogo} alt="" className="abstract-image" />
            </div>
          </div>
          <div className="about-right">
            <div className="about-image-container">
              <img src={aboutLeft} alt="" className="about-image-main" />
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />
      <WhySection variant="embedded" />
      <CaseStudiesSection />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </div>
  )
}

export default NewPage
