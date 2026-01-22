import './CareersSection.css';
import Navbar from './Navbar';
import CTASection from './CTASection';
import Footer from './Footer';
import { TextGradientScroll } from './ui/text-gradient-scroll';
import { useState } from 'react';

function CareersSection() {
    const [activeRole, setActiveRole] = useState('vectors');
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
                                Real World AI <br />
                                Needs Real World Thinking.
                            </h1>

                            {/* Subtitle */}
                            <div className="careers-hero-subtitle-wrapper">
                                <p className="careers-hero-subtitle">
                                    At Chartered Vectorial, AI agents are teammates, not just tools. We're building a new kind of firm for people who want to shape what's next.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statement Section */}
                <section className="careers-statement">
                    {/* Decorative gradient behind text */}
                    <div className="careers-statement-gradient"></div>

                    <div className="careers-statement-container">
                        <div className="careers-statement-content">
                            <TextGradientScroll
                                text="Most companies talk about AI. We run on it. Our agents validate hypotheses, debate architecture, review code, and flag risks—before humans make the call. Fewer meetings. More shipping. Real accountability."
                                type="letter"
                                textOpacity="soft"
                                className="careers-statement-text"
                            />
                        </div>
                    </div>
                </section>

                {/* Who Thrives Here Section */}
                <section className="careers-who-thrives">
                    <h2 className="careers-who-thrives-title">
                        Who thrives here
                    </h2>

                    <div className="careers-who-thrives-grid">
                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Visionaries</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    You see where AI is heading, not just where it is. You think in systems, not tasks.
                                </p>
                            </div>
                        </div>

                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Orchestrators</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    You don't just execute. You direct AI agents, connect the dots, and know when to step in.
                                </p>
                            </div>
                        </div>

                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Builders</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    You ship. Prototypes, production systems, client demos — you'd rather show than tell.
                                </p>
                            </div>
                        </div>

                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Learners</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    AI moves fast. You move faster. You're curious, adaptable, and energised by change.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Roles Section */}
                <section className="careers-roles">
                    <div className="careers-roles-header">
                        <div className="careers-roles-header-left">
                            <h2 className="careers-roles-title">
                                Types of Roles
                            </h2>
                        </div>
                        <div className="careers-roles-header-right">
                            <p className="careers-roles-description">
                                <span className="careers-roles-topline">Three roles. One mission.</span> <br className="hidden md:block" />
                                <div className="careers-roles-lines">
                                    <span className="careers-roles-sub">Vectors deploy. Forgers build. Pathfinders discover.</span>
                                    <span className="careers-roles-sub">Together, they move clients from vision to production.</span>
                                </div>
                            </p>
                        </div>
                    </div>

                    <div className="careers-roles-container">
                        <div className="careers-roles-list">
                            <div className={`careers-role-item ${activeRole === 'vectors' ? 'active' : ''}`} onClick={() => setActiveRole('vectors')}>
                                <div className="careers-role-name-wrapper">
                                    <span className={`careers-role-name ${activeRole === 'vectors' ? 'active' : 'inactive'}`}>Vectors</span>
                                    <div className={`careers-role-line ${activeRole === 'vectors' ? 'active' : ''}`}></div>
                                </div>
                            </div>

                            <div className={`careers-role-item ${activeRole === 'forgers' ? 'active' : ''}`} onClick={() => setActiveRole('forgers')}>
                                <div className="careers-role-name-wrapper">
                                    <span className={`careers-role-name ${activeRole === 'forgers' ? 'active' : 'inactive'}`}>Forgers</span>
                                    <div className={`careers-role-line ${activeRole === 'forgers' ? 'active' : ''}`}></div>
                                </div>
                            </div>

                            <div className={`careers-role-item ${activeRole === 'pathfinders' ? 'active' : ''}`} onClick={() => setActiveRole('pathfinders')}>
                                <div className="careers-role-name-wrapper">
                                    <span className={`careers-role-name ${activeRole === 'pathfinders' ? 'active' : 'inactive'}`}>Pathfinders</span>
                                    <div className={`careers-role-line ${activeRole === 'pathfinders' ? 'active' : ''}`}></div>
                                </div>
                            </div>
                        </div>

                        <div className="careers-role-description">
                            {activeRole === 'vectors' && (
                                <div className="careers-role-content">
                                    <h3 className="careers-role-heading">Vectors deploy</h3>
                                    <p className="careers-role-text">
                                        You embed with clients, ship AI to production, and stay until adoption is complete. In a world of prototypes and pilots, you deliver outcomes. Vectors are adaptable, client-facing, and own the last mile.
                                    </p>
                                </div>
                            )}
                            {activeRole === 'forgers' && (
                                <div className="careers-role-content">
                                    <h3 className="careers-role-heading">Forgers build</h3>
                                    <p className="careers-role-text">
                                        You create the accelerators, platforms, and tools that make Vectors faster. You're deep technical, craft-driven, and obsessed with building systems that scale. Forgers turn repeatable problems into reusable solutions.
                                    </p>
                                </div>
                            )}
                            {activeRole === 'pathfinders' && (
                                <div className="careers-role-content">
                                    <h3 className="careers-role-heading">Pathfinders discover</h3>
                                    <p className="careers-role-text">
                                        You create the accelerators, platforms, and tools that make Vectors faster. You're deep technical, craft-driven, and obsessed with building systems that scale. Forgers turn repeatable problems into reusable solutions.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <CTASection 
                title="Shape what is next"
                subtitle="We're always looking for exceptional people. Reach out."
                buttonText="BOOK A DISCOVERY CALL"
            />
            <Footer />
        </div>
    );
}

export default CareersSection;

