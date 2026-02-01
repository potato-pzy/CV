import './CTASection.css';
import { Link } from 'react-router-dom';
import ctaBg from '../assets/cta-background.png';

function CTASection({ title, subtitle, buttonText }) {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <img
          src={ctaBg}
          alt="Background pattern"
          className="cta-bg-image"
        />
      </div>
      <div className="cta-content">
        <h2 className="cta-title">
          {title || (
            <>
              What comes next is worth <br className="cta-title-break" /> building together.
            </>
          )}
        </h2>
        {subtitle && <p className="cta-subtitle">{subtitle}</p>}
        <Link to="/contact">
          <button className="cta-button">{buttonText || "BOOK A DISCOVERY CALL"}</button>
        </Link>
      </div>
    </section>
  );
}

export default CTASection;





