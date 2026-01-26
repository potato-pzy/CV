import { useState } from 'react';
import './ProductsSection.css';
import { AnimatePresence, motion } from 'framer-motion';
// import ComplianceIcon from './ComplianceIcon';
// import SalesEnablementIcon from './SalesEnablementIcon';
// import DocumentSyncIcon from './DocumentSyncIcon';
import imgVector from '../assets/Document.png';
import imgVector1 from '../assets/background.png';
import imgValidate2 from '../assets/validate 2.png';
import imgValidate3 from '../assets/validate 3.png';
import imgAcceleratorLeft from '../assets/acceleratorleft.png';
import imgAcceleratorCenter from '../assets/acceleratorcenter.png';
import imgAcceleratorRight from '../assets/acceleratorright.png';

function ProductsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);



    // const imgB9HUcC1 = "https://www.figma.com/api/mcp/asset/22f55e5f-ec3a-4832-8975-84b282fb97b2";
    // const imgB9HUcC = "https://www.figma.com/api/mcp/asset/8d0bb8df-5091-42e5-937a-02c7a8db3970";
    // const imgVector = "https://www.figma.com/api/mcp/asset/fdc6a13d-3c7e-4a44-bf35-bec61bd392ad";
    // const imgVector1 = "https://www.figma.com/api/mcp/asset/800b7d90-1b1c-4d56-a18d-b948de88826f";

    const slides = [
        {
            title: "Validate",
            description: "1-week sprint to identify high-value AI opportunities and build business case before committing budget.",
            images: {
                base: imgVector1,
                mask: imgVector,
                vector: imgVector,
                border: imgVector1
            }
        },
        {
            title: "Transform",
            description: "Strategy and engineering together, delivering production-grade AI systems in 60–90 days — not decks or pilots.",
            images: {
                base: imgValidate2,
                mask: imgValidate2,
                vector: imgValidate2,
                border: imgValidate2
            }
        },
        {
            title: "Evolve",
            description: "Embed with teams to turn deployed systems into organizational capability and identify what's next.",
            images: {
                base: imgValidate3,
                mask: imgValidate3,
                vector: imgValidate3,
                border: imgValidate3
            }
        }
    ];

    const panelVariants = {
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
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentImages = slides[currentSlide].images;

    return (
        <>
            <section className="products-section">
                <div className="products-container">
                    {/* Left Side - Text Content */}
                    <div className="products-left">
                        <p className="products-label">PRODUCTS & SOLUTIONS</p>
                        <h2 className="products-title">
                            Turn manual, rule-driven processes into fast, consistent agentic workflows.
                        </h2>
                        <button className="btn-explore">
                            EXPLORE MORE
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H12M12 5L8 1M12 5L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Side - Card Carousel */}
                    <div className="products-right">
                        <div className="validate-card">
                            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                <motion.div
                                    key={currentSlide}
                                    custom={direction}
                                    variants={panelVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: 'spring', stiffness: 260, damping: 34, mass: 0.9 },
                                        opacity: { duration: 0.25, ease: 'easeOut' }
                                    }}
                                    className="validate-inner"
                                >
                                    <div className="validate-content-left">
                                        <h3 className="validate-title">{slides[currentSlide].title}</h3>
                                        <p className="validate-description">{slides[currentSlide].description}</p>
                                        <button className="validate-cta">Start a Discovery</button>
                                    </div>
                                    <div className="validate-image-right">
                                        <img
                                            src={currentImages.base}
                                            alt=""
                                            className="validate-image"
                                        />
                                    </div>
                                    <div
                                        className="validate-gradient-overlay"
                                        style={{
                                            background: 'linear-gradient(90deg, #001119 36.54%, rgba(0, 28, 30, 0.97) 59%, rgba(0, 72, 49, 0.65) 81%, rgba(0, 147, 82, 0.18) 96%, rgba(0, 177, 95, 0.00) 100%)',
                                            border: '1px solid rgba(0, 0, 0, 0.00)'
                                        }}
                                    ></div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="carousel-controls">
                            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous slide">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next slide">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accelerators Section */}
            <div className="accelerators-section-wrapper">
                {/* Gradient Circle */}
                <div className="gradient-circle"></div>

                <div className="accelerators-heading">
                    <div className="accelerators-bottom-label">
                        <p className="products-label">ACCELERATORS</p>
                    </div>
                    <h2 className="products-title accelerators-heading-text">
                        Proven. Adaptable. Production-Ready.
                    </h2>
                    <p className="accelerators-description">
                        Positioned as pre-built, battle-tested components (not off-the-shelf SaaS) customized for each client:
                    </p>
                </div>

                {/* Accelerator Cards */}
                <div className="accelerator-cards-grid">
                    {/* Compliance Accelerator Card */}
                    <div className="accelerator-card compliance-card">
                        <div className="accelerator-image-section compliance-image-section">
                            <img src={imgAcceleratorLeft} alt="Compliance Accelerator" className="compliance-icon" />
                        </div>
                        <div className="accelerator-content compliance-content">
                            <h3 className="accelerator-title compliance-title">Compliance<br />Accelerator</h3>
                            <p className="accelerator-description compliance-description">
                                AI-powered document review for regulatory checks. Audit-ready decisions in seconds.
                            </p>
                            <div className="accelerator-proof compliance-proof">
                                <span className="proof-label">PROOF POINT:</span>
                                <span className="proof-value">97% FASTER (PWM JAPAN)</span>
                            </div>
                        </div>
                    </div>

                    {/* Sales Enablement Accelerator Card */}
                    <div className="accelerator-card sales-enablement-card">
                        <div className="accelerator-image-section sales-enablement-image-section">
                            <img src={imgAcceleratorCenter} alt="Sales Enablement Accelerator" className="sales-enablement-icon" />
                        </div>
                        <div className="accelerator-content sales-enablement-content">
                            <h3 className="accelerator-title sales-enablement-title">Sales Enablement Accelerator</h3>
                            <p className="accelerator-description sales-enablement-description">
                                Instant answers from product docs, policies and FAQs.
                            </p>
                            <div className="accelerator-proof sales-enablement-proof">
                                <span className="proof-label">PROOF POINT:</span>
                                <span className="proof-value">2-4 HRS → +20 MIN (Cis)</span>
                            </div>
                        </div>
                    </div>

                    {/* Document Sync Accelerator Card */}
                    <div className="accelerator-card document-sync-card">
                        <div className="accelerator-image-section document-sync-image-section">
                            <img src={imgAcceleratorRight} alt="Document Sync Accelerator" className="document-sync-icon" />
                        </div>
                        <div className="accelerator-content document-sync-content">
                            <h3 className="accelerator-title document-sync-title">Document Sync Accelerator</h3>
                            <p className="accelerator-description document-sync-description">
                                Keep legal and policy documents aligned as regulations change, with automated updates at scale.
                            </p>
                            <div className="accelerator-proof document-sync-proof">
                                <span className="proof-label">PROOF POINT:</span>
                                <span className="proof-value">INSTANT VS. MANUAL LOOKUP (PWM JAPAN)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsSection;
