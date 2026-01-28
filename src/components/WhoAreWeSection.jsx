import './WhoAreWeSection.css';
import CTASection from './CTASection';
import Footer from './Footer';
import Navbar from './Navbar';
import { TextGradientScroll } from './ui/text-gradient-scroll';
import { FlickeringGrid } from './ui/flickering-grid';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import logoSvg from '../assets/Asset 1.svg';
import layer1Image from '../assets/Layer 1.png';
import weBuildImage from '../assets/we_build.jpeg';
import weThinkImage from '../assets/we_think.jpeg';
import weStayImage from '../assets/stay.jpeg';
import founderPradeepImage from '../assets/founder_pradeep.jpg';
import founderEyalImage from '../assets/founder_eyal.jpg';
import founderCardBg from '../assets/founder_card_bg.svg';
import leftImage from '../assets/left 1.png';

const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAApCAYAAABqUERyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgB1ZrtcdNAEIZ3dfqIZ/IjdGA6MBVgKiAd4A6ACoAKCBUQOoAKEB2oA1yC/smSIx17MSbKiiR78Tmz98wkipS1Er+3t/d6TwgCum7701pYwvGpiyJ7BgFo2+43AM4FoVUKikDE7xCAptku6TCXxNLfvEhAEX1vv0EQ7Eoa2ffml6JMwPVslpYQgCSBl5I4muLlbIZrNZlg7fADAtA03UpYC0gsvLw+ghKszS4gAPTGXgtD6ywz18JrEaFyaQkH0jTNnA7nklhXhOmrdj+rEMFVaAiCWUojx0VYhQiuQkMAjME3skhXhLNyfyZcHez7YcAzOAI0IvXpaZipIDV0iFCOz0Ui5HlegXIQzTt59PBlfHZLhK7rFn0/HfGTk7TaFxGt0OhKV4WKD+o/Edz6ai1+Tf5TJTabq1d0KEEpvjaZX0t2N2nm9OY/QLT42WR+7e+4m49Sl6URqUHa2+TJ6900oJsIlxZ97GwyiFauvU2eXo96Gvh4gxubzElingZ+3uDGJnNU9RP8eZxN5qjqLPlCc/ytLPL+XkW0meCMHR0WklhukznRitD3ILbJ5A0+3ff7aEWQttBA0KuIsiYcapM5kWbCYTaZE50I1tozqcO9yyZzohNhs9mKeoiOu2zyJA4iw8cm53kq2syJSgRfmwxCohKBmj7iqeCzpRfVEmlMEsQmc0QiIPYLWpvhKTHG1uNeoJ838GsFCkUwn+nGT0yyom+jhqjzBrJ/4iGbzMG23VpQB66LIn0+vuLz0EVRZC/AA5WFkadz216dS5s/j9nSUykCT+dhGDxWBf8tPY0i3PrUt9sOCGuTOepEmKazvIUmtcmT14EyeDofwyZzVIlAWXDJp8IxbDJH9dNrPjvNhzz59gcxYvpH71M0oQAAAABJRU5ErkJggg==";

// 定义遮罩样式
const maskStyle = {
    WebkitMaskImage: `url('${LOGO_BASE64}')`,
    WebkitMaskSize: '60vw',
    WebkitMaskPosition: 'center',
    WebkitMaskRepeat: 'no-repeat',
    maskImage: `url('${LOGO_BASE64}')`,
    maskSize: '60vw',
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
};

// 定义网格动画颜色和配置
const GRID_CONFIG = {
    background: {
        color: "#A6F63B",
        maxOpacity: 0.08,
        flickerChance: 0.15,
        squareSize: 4,
        gridGap: 4,
    },
    logo: {
        color: "#A6F63B",
        maxOpacity: 0.45,
        flickerChance: 0.2,
        squareSize: 2,
        gridGap: 3,
    },
};

function WhoAreWeSection() {
    const cardsGridRef = useRef(null);
    const featuresGridRef = useRef(null);
    const [cardsVisible, setCardsVisible] = useState(false);
    const [featuresVisible, setFeaturesVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === cardsGridRef.current) {
                            setCardsVisible(true);
                        } else if (entry.target === featuresGridRef.current) {
                            setFeaturesVisible(true);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const checkAndObserve = (element, setVisible) => {
            if (!element) return;

            setTimeout(() => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                if (isVisible) {
                    setVisible(true);
                } else {
                    observer.observe(element);
                }
            }, 100);
        };

        checkAndObserve(cardsGridRef.current, setCardsVisible);
        checkAndObserve(featuresGridRef.current, setFeaturesVisible);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="whoarewe-page">
            {/* Ambient Background Effects */}
            <div className="whoarewe-background-effects">
                <div className="tech-grid"></div>
                <div className="gradient-radial"></div>
            </div>

            <main className="whoarewe-main">
                <Navbar />
                {/* Hero Section */}
                <section className="whoarewe-hero">
                    {/* Flickering Grid Effects */}
                    <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none">
                        <FlickeringGrid
                            className="absolute inset-0 z-0 motion-safe:animate-pulse"
                            {...GRID_CONFIG.background}
                        />
                        <div
                            className="absolute top-0 bottom-0 right-0 z-0 translate-y-[2vh] motion-safe:animate-fade-in"
                            style={{
                                ...maskStyle,
                                animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                                left: '-5%',
                            }}
                        >
                            <FlickeringGrid {...GRID_CONFIG.logo} />
                        </div>
                    </div>

                    <div className="whoarewe-hero-inner">
                        <h1 className="whoarewe-hero-title">
                            AI changes the <br className="whoarewe-hero-break" />
                            equation in how value is created.
                        </h1>

                        <p className="whoarewe-hero-subtitle">
                            Chartered Vectorial is an AI-native, applied AI firm. We use AI to accelerate how we consult and how we engineer, so clients get to production faster.
                        </p>

                    </div>
                    <div className="scroll-to-explore">
                        <span>Scroll to explore</span>
                    </div>
                </section>

                {/* Content Section */}
                <section className="whoarewe-content">
                    <div className="whoarewe-content-text">
                        {[
                            "The traditional model separates thinking from doing. Consultants advise. Engineers build. Handoffs create gaps. Pilots stall.",
                            "We built Chartered Vectorial to close that gap, and we did it with AI.",
                            "Our AI agents validate transformation hypotheses with consulting-grade rigor. Our AI agents debate approaches, write code, and review each other's work before anything ships. Humans stay in control at every gate.",
                            "We're an AI-native consulting firm focused on AI transformation. We don't just advise on AI, we use it to deliver."
                        ].map((text, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: [0.21, 0.47, 0.32, 0.98]
                                }}
                            >
                                <TextGradientScroll
                                    text={text}
                                    type="letter"
                                    textOpacity="soft"
                                    className={`whoarewe-para ${index === 3 ? 'whoarewe-highlight' : ''}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Ellipse Section */}
                <section className="whoarewe-ellipse">
                    <div className="whoarewe-ellipse-container">
                        <img
                            alt=""
                            className="whoarewe-ellipse-image"
                            src="https://www.figma.com/api/mcp/asset/ae4f5952-1fdf-455a-ae26-6a4cc657bd55"
                        />
                    </div>
                </section>

                {/* Radial Blur Oval */}
                <div className="whoarewe-radial-blur-oval"></div>

                {/* Continuation Section */}
                <section className="whoarewe-continuation">
                    {/* Top Section: Grid Layout */}
                    <div className="whoarewe-continuation-grid">
                        {/* Left Column: Main Headline */}
                        <div className="whoarewe-continuation-left">
                            <img src={leftImage} alt="" className="whoarewe-left-image" />
                            <div className="whoarewe-continuation-sticky">
                                <h1 className="whoarewe-continuation-headline">
                                    Small by design.<br />
                                    Fast by conviction.<br />
                                    Built for companies{' '}
                                    <span className="whoarewe-highlight">ready to move.</span>
                                </h1>
                            </div>
                        </div>

                        {/* Right Column: Content Grid */}
                        <div className="whoarewe-continuation-right">
                            {/* 2x2 Feature Grid */}
                            <div ref={featuresGridRef} className={`whoarewe-features-grid ${featuresVisible ? 'features-visible' : ''}`}>
                                {/* Feature 1 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">Leverage over headcount</h3>
                                    <p className="whoarewe-feature-text">
                                        A small team with the right systems can out-deliver large teams. Our AI agents multiply what each person can move.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">Strategy that ships</h3>
                                    <p className="whoarewe-feature-text">
                                        Slide decks don't create value. AI systems in production do. We stay until the work delivers.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">
                                        Built by agents, <br className="whoarewe-feature-break" />governed by humans
                                    </h3>
                                    <p className="whoarewe-feature-text">
                                        AI agents do the heavy lifting- validating, building, reviewing. Humans approve what matters.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">
                                        Access, not <br className="whoarewe-feature-break" />exclusivity
                                    </h3>
                                    <p className="whoarewe-feature-text">
                                        World-class capability shouldn't be reserved for giants. The barrier dropped. We're here to prove it.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Wide Text */}
                            <div className="whoarewe-continuation-bottom">
                                <p className="whoarewe-continuation-bottom-text">
                                    We embed with client teams from strategy through production. No handoffs. No abandoned pilots. No reports that gather dust. We think with you. We build with you. We stay until it works.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: The Cards */}
                    <div ref={cardsGridRef} className={`whoarewe-image-cards-grid ${cardsVisible ? 'cards-visible' : ''}`}>
                        {/* We Think Card */}
                        <div className="whoarewe-image-card">
                            <div className="whoarewe-image-card-front">
                                <img src={weThinkImage} alt="We Think" className="whoarewe-image-card-img" />
                                <p className="whoarewe-image-card-text">We Think</p>
                            </div>
                            <div className="whoarewe-image-card-back">

                                <div className="whoarewe-card-body">
                                    Validation, strategy, and business case development. Know where AI fits before you commit budget.
                                </div>

                            </div>
                        </div>

                        {/* We Build Card */}
                        <div className="whoarewe-image-card">
                            <div className="whoarewe-image-card-front">
                                <img src={weBuildImage} alt="We Build" className="whoarewe-image-card-img" />
                                <p className="whoarewe-image-card-text">We Build</p>
                            </div>
                            <div className="whoarewe-image-card-back">

                                <div className="whoarewe-card-body">
                                    Production-grade AI agents- tested, governed, audit-ready. Delivered in weeks, not months.
                                </div>

                            </div>
                        </div>

                        {/* We Stay Card */}
                        <div className="whoarewe-image-card">
                            <div className="whoarewe-image-card-front">
                                <img src={weStayImage} alt="We Stay" className="whoarewe-image-card-img" />
                                <p className="whoarewe-image-card-text">We Stay</p>
                            </div>
                            <div className="whoarewe-image-card-back">

                                <div className="whoarewe-card-body">
                                    Real transformation requires adoption. We stay until your teams run with it, and identify what's next.
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Radial Blur Oval Duplicate */}
                    <div className="whoarewe-radial-blur-oval" style={{ top: 'auto', bottom: '10%', zIndex: -3 }}></div>

                    {/* Meet the Founders Section */}
                    <div className="whoarewe-founders">
                        <div className="whoarewe-founders-header">
                            <h2 className="whoarewe-founders-title">Meet<br /> <span className="whoarewe-highlight">the Founders</span></h2>
                            <p className="whoarewe-founders-description">
                                The Founders of Chartered Vectorial bring experience across engineering, operations, and large-scale system delivery.
                            </p>
                        </div>
                        <div className="whoarewe-founders-grid">
                            <div className="whoarewe-founder-card">
                                <div className="whoarewe-founder-front">
                                    <img src={founderEyalImage} alt="Eyal Agmoni" className="whoarewe-founder-image" style={{ transform: 'translateY(-10px)' }} />
                                    <div className="whoarewe-founder-gradient"></div>
                                    <h3 className="whoarewe-founder-name">Pradeep Menon</h3>
                                </div>
                                <div className="whoarewe-founder-back">
                                    <div className="whoarewe-founder-back-bg"></div>
                                    <div className="whoarewe-founder-back-content">
                                        <h3 className="whoarewe-founder-back-name">Pradeep Menon</h3>
                                        <p className="whoarewe-founder-back-designation">Founder & CEO, Chartered Vectorial</p>
                                        <p className="whoarewe-founder-back-bio">Pradeep Menon is the Founder and CEO of Chartered Vectorial. He started CV to build the AI firm he wished existed, one that ships production-grade AI, fast, for enterprises tired of pilots that go nowhere. Over 20 years, Pradeep held senior roles at Microsoft (Field CTO—Digital Natives, Asia), Alibaba Cloud (Director, Big Data & AI Solutions), and IBM (Sr. Architect), delivering Data and AI solutions across Europe and Asia. He's a published author and keynote speaker on AI transformation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="whoarewe-founder-card">
                                <div className="whoarewe-founder-front">
                                    <img src={founderPradeepImage} alt="Pradeep Menon" className="whoarewe-founder-image" style={{ height: '130%', transform: 'translateY(-15px)' }} />
                                    <div className="whoarewe-founder-gradient"></div>
                                    <h3 className="whoarewe-founder-name">Eyal Agmoni</h3>
                                </div>
                                <div className="whoarewe-founder-back">
                                    <div className="whoarewe-founder-back-bg"></div>
                                    <div className="whoarewe-founder-back-content">
                                        <h3 className="whoarewe-founder-back-name">Eyal Agmoni</h3>
                                        <p className="whoarewe-founder-back-designation">Co-Founder, Chartered Vectorial | Founder of Chartered Group and CEO of Chartered Investment Managers</p>
                                        <p className="whoarewe-founder-back-bio">Eyal Agmoni has spent 35 years building and investing in businesses across Europe and Asia. As Founder of Chartered Group, he's seen how technology reshapes industries and how most enterprises struggle to capture that value. He co-founded Chartered Vectorial to bridge that gap: backing a team that gets AI from strategy to production, not just pilots.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Background texture/gradients */}
            <div className="whoarewe-continuation-bg">
                <div className="whoarewe-continuation-bg-circle whoarewe-continuation-bg-circle-1"></div>
                <div className="whoarewe-continuation-bg-circle whoarewe-continuation-bg-circle-2"></div>
            </div>

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default WhoAreWeSection;
