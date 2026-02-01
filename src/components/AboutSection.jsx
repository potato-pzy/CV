import { Link } from 'react-router-dom';
import './AboutSection.css';
import imgWomanWindow from '../assets/ Images/Web Images/HOMEPAGE/Top Right.jpg';
import imgAbstract from '../assets/Asset 1.svg';

function AboutSection() {

    return (
        <section className="about-section">
            <div className="about-glow-top-right">
                <div className="about-glow-ellipse"></div>
            </div>

            <div className="about-content">
                <div className="about-left">
                    <h2 className="about-heading">
                        We think. We build.<br />
                        We stay.
                    </h2>

                    <div className="about-text-container">
                        <p className="about-description">
                            We make AI adoption real.<br /><br />
                            By embedding with your teams, we turn high-value opportunities into production-grade AI agents and stay until they deliver.<br /><br />
                            Not a report. Not a promise. Transformation you can see.
                        </p>
                        <Link to="/whatwedo" className="btn-see-how">SEE HOW WE WORK</Link>
                    </div>

                    <div className="about-image-abstract">
                        <img src={imgAbstract} alt="" className="abstract-image" />
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-image-container">
                        <img src={imgWomanWindow} alt="" className="about-image-main" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
