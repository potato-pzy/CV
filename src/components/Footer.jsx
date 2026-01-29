import './Footer.css';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer_logo.png';
import footerBg from '../assets/footer-bg.svg';
import instagramIcon from '../assets/social_instagram.svg';
import twitterIcon from '../assets/social_twitter.svg';
import linkedinIcon from '../assets/social_linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-bg-mask">
          <img
            src={footerBg}
            className="footer-bg-image"
          />
        </div>
        <div className="footer-glow-right-bottom"></div>
        <div className="footer-glow-left-top"></div>
      </div>

      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo-section">
            <img
              src={footerLogo}
              className="footer-logo-image"
            />
          </div>
          <p className="footer-copyright">© 2026 Chartered Vectorial.<br />All rights reserved.</p>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/charteredvectorial?igsh=MXB5N21wZmM2bzVjbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={instagramIcon} alt="Instagram" className="footer-social-icon-img" />
            </a>
            <a href="https://x.com/cvectorial15617?s=21" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={twitterIcon} alt="X" className="footer-social-icon-img" />
            </a>
            <a href="https://www.linkedin.com/company/charteredvectorial" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon-img" />
            </a>
          </div>
        </div>

        <div className="footer-center">
          <p className="footer-section-title">Chartered Vectorial</p>
          <nav className="footer-nav">
            <Link to="/whoarewe" className="footer-link">About</Link>
            <Link to="/whatwedo" className="footer-link">Products & Solutions</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/terms" className="footer-link">Terms of Use</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </nav>
        </div>

        <div className="footer-right">
          <p className="footer-section-title">Get Connected</p>
          <nav className="footer-nav">
            <Link to="/insights" className="footer-link footer-link-underline">Blog</Link>
            <Link to="/contact" className="footer-link footer-link-underline">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





