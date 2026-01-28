import './CareersSection.css';
import Navbar from './Navbar';
import CareersCTASection from './CareersCTASection';
import Footer from './Footer';
import { TextGradientScroll } from './ui/text-gradient-scroll';
import { GlowingEffect } from './GlowingEffect';
import GlassBorder from './GlassBorder';
import RolesSection from './RolesSection';
import { useState } from 'react';

function CareersSection() {
    return (
        <div className="careers-page">
            {/* Background Elements */}
            <div className="careers-background">
                <div className="careers-grid-pattern"></div>
                <div className="careers-gradient-blob"></div>
            </div>

            <main className="careers-main">
                {/* Hero Section */}
                <section className="careers-hero">
                    <Navbar />
                    <div className="careers-hero-container">
                        {/* Main Headline */}
                        <div className="careers-hero-content">
                            <h1 className="careers-hero-title">
                                REAL WORLD AI<br />
                                NEEDS <span className="careers-hero-title-green">REAL WORLD THINKING.</span>
                            </h1>

                            {/* Subtitle */}
                            <div className="careers-hero-subtitle-wrapper">
                                <p className="careers-hero-subtitle">
                                    At Chartered Vectorial, AI agents are teammates, not just tools. We're building a new kind of firm for people who want to shape what's next.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="careers-scroll-to-explore">
                        <span>Scroll to explore</span>
                    </div>
                </section>

                {/* Statement Section */}
                <section className="careers-statement">
                    {/* Decorative gradient behind text */}
                    <div className="careers-statement-gradient"></div>

                    <div className="careers-statement-container">
                        <div className="careers-statement-content">
                            <h2 className="careers-statement-title">How we work</h2>
                            <TextGradientScroll
                                text="Most companies talk about AI. We run on it. Our agents validate hypotheses, debate architecture, review code, and flag risks—before humans make the call. Fewer meetings. More shipping. Real accountability."
                                type="letter"
                                textOpacity="soft"
                                className="careers-statement-text"
                            />
                        </div>
                    </div>
                </section>

                {/* Decorative Ellipse Section */}
                <section className="careers-ellipse-section">
                    <div className="careers-ellipse-container">
                        <div className="careers-ellipse-glow"></div>
                    </div>
                </section>

                {/* Who Thrives Here Section */}
                <section className="careers-who-thrives">
                    {/* Glow Ellipse */}
                    <div className="careers-who-thrives-glow"></div>
                    <h2 className="careers-who-thrives-title">
                        Who thrives here
                    </h2>

                    <div className="careers-who-thrives-grid">
                        <div className="careers-who-thrives-card">
                            <GlowingEffect
                                blur={0}
                                spread={15}
                                proximity={60}
                                movementDuration={1.2}
                                borderWidth={1}
                                inactiveZone={0.2}
                                disabled={false}
                                variant="white"
                                className="glowing-effect-overlay"
                            />
                            <GlassBorder />
                            <div className="careers-who-thrives-card-content">
                                <h3 className="careers-who-thrives-card-title">Visionaries</h3>
                            </div>
                            <p className="careers-who-thrives-card-text">
                                You see where AI is heading, not just where it is. You think in systems, not tasks.
                            </p>
                        </div>

                        <div className="careers-who-thrives-card">
                            <GlowingEffect
                                blur={0}
                                spread={15}
                                proximity={60}
                                movementDuration={1.2}
                                borderWidth={1}
                                inactiveZone={0.2}
                                disabled={false}
                                variant="white"
                                className="glowing-effect-overlay"
                            />
                            <GlassBorder />
                            <div className="careers-who-thrives-card-content">
                                <h3 className="careers-who-thrives-card-title">Orchestrators</h3>
                            </div>
                            <p className="careers-who-thrives-card-text">
                                You don't just execute. You direct AI agents, connect the dots, and know when to step in.
                            </p>
                        </div>

                        <div className="careers-who-thrives-card">
                            <GlowingEffect
                                blur={0}
                                spread={15}
                                proximity={60}
                                movementDuration={1.2}
                                borderWidth={1}
                                inactiveZone={0.2}
                                disabled={false}
                                variant="white"
                                className="glowing-effect-overlay"
                            />
                            <GlassBorder />
                            <div className="careers-who-thrives-card-content">
                                <h3 className="careers-who-thrives-card-title">Builders</h3>
                            </div>
                            <p className="careers-who-thrives-card-text">
                                You ship. Prototypes, production systems, client demos — you'd rather show than tell.
                            </p>
                        </div>

                        <div className="careers-who-thrives-card">
                            <GlowingEffect
                                blur={0}
                                spread={15}
                                proximity={60}
                                movementDuration={1.2}
                                borderWidth={1}
                                inactiveZone={0.2}
                                disabled={false}
                                variant="white"
                                className="glowing-effect-overlay"
                            />
                            <GlassBorder />
                            <div className="careers-who-thrives-card-content">
                                <h3 className="careers-who-thrives-card-title">Learners</h3>
                            </div>
                            <p className="careers-who-thrives-card-text">
                                AI moves fast. You move faster. You're curious, adaptable, and energised by change.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Types of Roles Section */}
                {/* Types of Roles Section */}
                <RolesSection />
            </main>

            <CareersCTASection
            />
            <Footer />
        </div>
    );
}

export default CareersSection;

