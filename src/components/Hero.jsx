import { Link } from 'react-router-dom';
import './Hero.css';
import Navbar from './Navbar';
import heroVideo from '../assets/Output_converted(3).MP4';

function Hero() {
    return (
        <div className="hero">
            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-content">
                <Navbar />

                {/* Main Content */}
                <div className="hero-main">
                    <h1 className="hero-title">
                        Engineering Intelligence. Creating Value.
                    </h1>
                    <p className="hero-subtitle blauer-neue">
                        AI-NATIVE. EMBEDDED. STRATEGY TO PRODUCTION
                    </p>
                    <Link to="/contact">
                        <button className="btn-primary">
                            <div className="btn-primary-text">BOOK A DISCOVERY CALL</div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
