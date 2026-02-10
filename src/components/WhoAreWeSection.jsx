import CTASection from './CTASection';
import Footer from './Footer';
import Navbar from './Navbar';
import { TextGradientScroll } from './ui/text-gradient-scroll';
import { FlickeringGrid } from './ui/flickering-grid';
import { useEffect, useRef, useState } from 'react';
import logoSvg from '../assets/shared/Asset 1.svg';
import layer1Image from '../assets/who-we-are/Layer 1.png';
import weBuildImage from '../assets/who-we-are/we_build.jpeg';
import weThinkImage from '../assets/who-we-are/we_think.jpeg';
import weStayImage from '../assets/who-we-are/stay.jpeg';
import ellipseImg from '../assets/who-we-are/whoarewe-ellipse.png';
import founderPradeepImage from '../assets/who-we-are/founder_pradeep.jpg';
import founderEyalImage from '../assets/who-we-are/founder_eyal.jpg';
import founderCardBg from '../assets/who-we-are/founder_card_bg.svg';
import leftImage from '../assets/who-we-are/left 1.png';

const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAApCAYAAABqUERyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgB1ZrtcdNAEIZ3dfqIZ/IjdGA6MBVgKiAd4A6ACoAKCBUQOoAKEB2oA1yC/smSIx17MSbKiiR78Tmz98wkipS1Er+3t/d6TwgCum7701pYwvGpiyJ7BgFo2+43AM4FoVUKikDE7xCAptku6TCXxNLfvEhAEX1vv0EQ7Eoa2ffml6JMwPVslpYQgCSBl5I4muLlbIZrNZlg7fADAtA03UpYC0gsvLw+ghKszS4gAPTGXgtD6ywz18JrEaFyaQkH0jTNnA7nklhXhOmrdj+rEMFVaAiCWUojx0VYhQiuQkMAjME3skhXhLNyfyZcHez7YcAzOAI0IvXpaZipIDV0iFCOz0Ui5HlegXIQzTt59PBlfHZLhK7rFn0/HfGTk7TaFxGt0OhKV4WKD+o/Edz6ai1+Tf5TJTabq1d0KEEpvjaZX0t2N2nm9OY/QLT42WR+7e+4m49Sl6URqUHa2+TJ6900oJsIlxZ97GwyiFauvU2eXo96Gvh4gxubzElingZ+3uDGJnNU9RP8eZxN5qjqLPlCc/ytLPL+XkW0meCMHR0WklhukznRitD3ILbJ5A0+3ff7aEWQttBA0KuIsiYcapM5kWbCYTaZE50I1tozqcO9yyZzohNhs9mKeoiOu2zyJA4iw8cm53kq2syJSgRfmwxCohKBmj7iqeCzpRfVEmlMEsQmc0QiIPYLWpvhKTHG1uNeoJ838GsFCkUwn+nGT0yyom+jhqjzBrJ/4iGbzMG23VpQB66LIn0+vuLz0EVRZC/AA5WFkadz216dS5s/j9nSUykCT+dhGDxWBf8tPY0i3PrUt9sOCGuTOepEmKazvIUmtcmT14EyeDofwyZzVIlAWXDJp8IxbDJH9dNrPjvNhzz59gcxYvpH71M0oQAAAABJRU5ErkJggg==";

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
    const [activeCardId, setActiveCardId] = useState(null);
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mq = window.matchMedia('(max-width: 768px)');
        const updateIsMobile = (event) => {
            setIsMobile(event.matches);
        };

        setIsMobile(mq.matches);

        if (mq.addEventListener) {
            mq.addEventListener('change', updateIsMobile);
        } else if (mq.addListener) {
            mq.addListener(updateIsMobile);
        }

        return () => {
            if (mq.removeEventListener) {
                mq.removeEventListener('change', updateIsMobile);
            } else if (mq.removeListener) {
                mq.removeListener(updateIsMobile);
            }
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setCardsVisible(true);
            setFeaturesVisible(true);
            return;
        }

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
    }, [isMobile]);

    return (
        <div className="whoarewe-page relative min-h-screen bg-[#020f14] text-white overflow-x-hidden flex flex-col m-0 p-0">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                {/* tech-grid */}
                <div className="absolute inset-0 opacity-60 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_50%_50%,black_40%,transparent_80%)]" />
                {/* gradient-radial */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] hidden opacity-50 blur-[60px] bg-[radial-gradient(circle,#1A2515_0%,transparent_70%)]" />
            </div>

            {/* Navigation - wrapped in absolute div on mobile for hero extension */}
            <div className="absolute top-0 left-0 w-full z-[100] md:relative">
                <Navbar />
            </div>

            {/* Main Content */}
            <main className="relative z-10 w-full flex-grow flex flex-col items-center gap-0 p-0 pb-[120px] bg-black">

                {/* Hero Section */}
                <section className="relative w-full flex flex-col items-center justify-center text-center min-h-[90vh] sm:min-h-screen bg-transparent sm:bg-black overflow-hidden p-0 z-20">
                    {/* Top gradient overlay - whoarewe-hero::after */}
                    <div className="absolute top-0 left-0 right-0 h-[40vh] z-[2] pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_30%,transparent_100%)]" />

                    {/* Flickering Grid Effects - disabled on mobile to avoid canvas GPU issues */}
                    {!isMobile && (
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <FlickeringGrid
                                className="absolute inset-0 w-full h-full [mask-image:radial-gradient(circle_at_center,white_60%,transparent_85%)]"
                                squareSize={GRID_CONFIG.background.squareSize}
                                gridGap={GRID_CONFIG.background.gridGap}
                                color={GRID_CONFIG.background.color}
                                maxOpacity={GRID_CONFIG.background.maxOpacity}
                                flickerChance={GRID_CONFIG.background.flickerChance}
                            />
                            <div style={maskStyle} className="absolute inset-0 w-full h-full">
                                <FlickeringGrid
                                    className="w-full h-full"
                                    squareSize={GRID_CONFIG.logo.squareSize}
                                    gridGap={GRID_CONFIG.logo.gridGap}
                                    color={GRID_CONFIG.logo.color}
                                    maxOpacity={GRID_CONFIG.logo.maxOpacity}
                                    flickerChance={GRID_CONFIG.logo.flickerChance}
                                />
                            </div>
                        </div>
                    )}

                    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center text-center relative z-10 px-6 sm:px-8 pt-[120px] pb-20 md:py-[120px]">
                        <h1 className="font-['Stage_Grotesk'] text-[22px] sm:text-4xl md:text-5xl lg:text-[55px] font-medium leading-[1.2] sm:leading-normal tracking-[-0.02em] text-white max-w-[1200px] mb-12 sm:mb-8 text-center uppercase [text-shadow:0_0_40px_rgba(255,255,255,0.15)] px-4">
                            AI CHANGES THE EQUATION IN HOW <br className="block sm:hidden" /> VALUE IS CREATED
                        </h1>

                        <p className="font-['Blauer_Nue'] text-[14px] sm:text-lg md:text-xl font-normal leading-[1.6] sm:leading-[1.2] normal-case max-w-full sm:max-w-[740px] mx-auto mb-12 sm:mb-12 tracking-tight sm:tracking-normal text-center text-white/70 px-4 text-balance">
                            Chartered Vectorial is an AI-native, applied AI firm. We build AI products shaped by consulting insight, configured to your workflows and user experience, deployed in weeks.
                        </p>
                    </div>

                    {/* Scroll to explore */}
                    <div className="absolute bottom-10 sm:bottom-[15vh] inset-x-0 mx-auto flex flex-col items-center gap-2 font-['Stage_Grotesk'] text-sm sm:text-base font-normal leading-normal text-[#A6F63B] text-center z-30 animate-bounce [text-shadow:0_0_4px_#FFF] w-max">
                        <span style={{ left: '3rem', position: 'relative' }}>Scroll to explore</span>
                    </div>
                </section>

                {/* Content Section - matches whoarewe-content, whoarewe-content-text */}
                <div className="w-full max-w-[831px] mx-auto px-6 relative text-center md:text-left py-16 sm:py-32 font-['Stage_Grotesk'] text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#C7C7C7]">
                    <div className="flex flex-col gap-8 sm:gap-12 relative z-20">
                        <TextGradientScroll
                            text="The traditional model separates thinking from doing. Consultants advise. Engineers build. Handoffs create gaps. Pilots stall."
                            type="letter"
                            textOpacity="soft"
                            className="m-0 text-base sm:text-lg md:text-xl max-w-full md:max-w-[80%] font-['Stage_Grotesk'] text-[#C7C7C7]"
                        />
                        <TextGradientScroll
                            text="We built Chartered Vectorial to fix that, by fusing consulting depth with AI-powered product delivery."
                            type="letter"
                            textOpacity="soft"
                            className="m-0 text-base sm:text-lg md:text-xl max-w-full md:max-w-[80%] font-['Stage_Grotesk'] text-[#C7C7C7]"
                        />
                        <TextGradientScroll
                            text="Our AI agents validate transformation hypotheses, debate approaches, and write production-grade code, all governed by humans. The result isn't a roadmap. It's a product. Configured to your workflows. Shipped in weeks."
                            type="letter"
                            textOpacity="soft"
                            className="m-0 text-base sm:text-lg md:text-xl max-w-full md:max-w-[80%] font-['Stage_Grotesk'] text-[#C7C7C7]"
                        />
                        <TextGradientScroll
                            text="We're an AI-native product studio. We don't just advise on AI, we deliver it."
                            type="letter"
                            textOpacity="soft"
                            className="m-0 text-base sm:text-lg md:text-xl max-w-full md:max-w-[80%] font-['Stage_Grotesk'] text-[#A6F63B]"
                        />
                    </div>
                </div>

                {/* Ellipse Section */}
                <div className="absolute w-full h-0 z-[5] pointer-events-none left-0 -top-[400px] overflow-visible">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full overflow-hidden blur-[60px] [clip-path:ellipse(50%_50%_at_50%_50%)]">
                        <img
                            src={ellipseImg}
                            alt=""
                            className="block max-w-none w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>

                {/* Radial Blur Oval */}
                <div className="hidden md:block absolute w-[1658px] h-[777px] rounded-[1658px] bg-[#001D26] blur-[200px] left-1/2 -translate-x-1/2 -z-[3] pointer-events-none top-[calc(100vh+600px)]" />

                {/* Continuation Section */}
                <div className="w-full max-w-[1280px] mx-auto px-6 py-20 sm:py-32 relative z-10">
                    {/* Top Section: Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 mb-20 md:mb-32 lg:mb-48">
                        {/* Left Column */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none blur-[80px]" />

                            <img
                                src={leftImage}
                                alt=""
                                className="w-full h-auto block mb-8 lg:mb-6 rounded-lg relative top-0 lg:-top-[60px] [filter:drop-shadow(0_0_50px_rgba(166,246,59,0.3))]"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-12 sm:gap-24 lg:gap-[179px] w-full">
                            {/* Features Grid */}
                            <div
                                ref={featuresGridRef}
                                className="grid grid-cols-1 md:grid-cols-2 gap-y-10 sm:gap-y-16 gap-x-8 sm:gap-x-20"
                            >
                                {[
                                    {
                                        title: "Leverage over headcount",
                                        text: "A small team with the right systems can out-deliver large teams. Our AI agents multiply what each person can move."
                                    },
                                    {
                                        title: "Strategy that ships",
                                        text: "Slide decks don't create value. AI systems in production do. We stay until the work delivers."
                                    },
                                    {
                                        title: "Built by agents, governed by humans",
                                        text: "AI agents do the heavy lifting validating, building, reviewing. You get customised products for your workflows, governed by humans at every gate."
                                    },
                                    {
                                        title: "Access, not exclusivity",
                                        text: "World-class AI products shouldn’t be reserved for giants. We build them for companies ready to move."
                                    }
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col gap-4 transition-all duration-1000 ease-out ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
                                            }`}
                                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                                    >
                                        <h3 className="font-['Stage_Grotesk'] text-2xl sm:text-[28px] font-medium leading-tight sm:leading-[30px] tracking-[-0.01em] text-white m-0">
                                            {feature.title}
                                        </h3>
                                        <p className="font-['Stage_Grotesk'] text-sm sm:text-base font-normal leading-normal text-[#C7C7C7] m-0">
                                            {feature.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Text block before cards */}
                    <div className="max-w-[1320px] mx-auto mb-16 md:mb-24 lg:mb-32 px-2 sm:px-0">
                        <div className="max-w-[900px] text-center md:text-left">
                            <h2 className="font-['Stage_Grotesk'] text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight sm:leading-tight tracking-[-0.02em] text-white mb-8">
                                <span className="block sm:inline">Small by design.</span>
                                <span className="block sm:inline"> Fast by conviction.</span>
                                <span className="block sm:inline">
                                    Built for companies <span className="text-[#A6F63B]">ready</span>
                                </span>
                                <span className="block sm:inline text-[#A6F63B]">to move.</span>
                            </h2>
                            <p className="font-['Stage_Grotesk'] text-[13px] sm:text-lg md:text-xl font-normal leading-relaxed text-[#C7C7C7] max-w-[760px] mx-auto md:mx-0 tracking-tight sm:tracking-normal">
                                <span className="block sm:inline">We learn how you work. We shape what changes.</span>
                                <span className="block sm:inline"> We build what fits. We stay until it runs.</span>
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section: The Cards - md: 3 cols, gap 40px (matches whoarewe-cards-grid) */}
                    <div
                        ref={cardsGridRef}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 justify-center max-w-[1320px] mx-auto"
                    >
                        {/* We Think Card */}
                        <ThinkCard cardsVisible={cardsVisible} activeCardId={activeCardId} onCardClick={setActiveCardId} />

                        {/* We Build Card */}
                        <BuildCard cardsVisible={cardsVisible} activeCardId={activeCardId} onCardClick={setActiveCardId} />

                        {/* We Stay Card */}
                        <StayCard cardsVisible={cardsVisible} activeCardId={activeCardId} onCardClick={setActiveCardId} />
                    </div>
                </div>

                {/* Radial Blur Oval Duplicate */}
                <div className="hidden md:block absolute w-[1658px] h-[777px] rounded-[1658px] bg-[#001D26] blur-[200px] left-1/2 -translate-x-1/2 -z-[3] pointer-events-none top-[calc(100vh+1400px)]" />

                {/* Meet the Founders Section */}
                <FoundersSection activeCardId={activeCardId} onCardClick={setActiveCardId} />

                {/* Background circles */}
                <div className="hidden md:block fixed inset-0 pointer-events-none z-0">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-white/[0.02]" />
                    <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full blur-[150px] bg-[#A6F63B]/[0.03]" />
                </div>
            </main>

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    );
}

const CARD_IDS = { THINK: 'think', BUILD: 'build', STAY: 'stay', PRADEEP: 'pradeep', EYAL: 'eyal' };

// Card Components
function ThinkCard({ cardsVisible, activeCardId, onCardClick }) {
    const flipped = activeCardId === CARD_IDS.THINK;
    return (
        <div
            className={`relative w-full max-w-[340px] aspect-square bg-transparent cursor-pointer transition-all duration-[800ms] ease-out mx-auto ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px] sm:translate-y-[30px]'
                }`}
            style={{ animationDelay: '100ms' }}
        >
            <div className="relative w-full h-full group rounded-[24px] overflow-hidden border border-white/5" onClick={() => onCardClick(prev => prev === CARD_IDS.THINK ? null : CARD_IDS.THINK)}>
                {/* Front */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] bg-black ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'} group-hover:opacity-0 group-hover:pointer-events-none`}>
                    <img src={weThinkImage} alt="We Think" className="absolute inset-0 w-full h-full object-cover block" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h3 className="font-['Stage_Grotesk'] text-[32px] sm:text-[36px] font-medium leading-tight tracking-[-0.01em] text-[#A6F63B] m-0">
                            We Think
                        </h3>
                    </div>
                </div>

                {/* Back */}
                <div className={`absolute inset-0 w-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] bg-[#020b0d] border border-white/10 flex flex-col justify-center items-center p-8 text-center ${flipped ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
                    <p className="font-['Stage_Grotesk'] text-base sm:text-[17px] font-normal leading-relaxed text-white relative z-10 m-0">
                        Validation, strategy, and business case development.
                    </p>
                </div>
            </div>
        </div>
    );
}

function BuildCard({ cardsVisible, activeCardId, onCardClick }) {
    const flipped = activeCardId === CARD_IDS.BUILD;
    return (
        <div
            className={`relative w-full max-w-[340px] aspect-square bg-transparent cursor-pointer transition-all duration-[800ms] ease-out mx-auto ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
                }`}
            style={{ animationDelay: '300ms' }}
        >
            <div className="relative w-full h-full group rounded-[24px] overflow-hidden border border-white/5" onClick={() => onCardClick(prev => prev === CARD_IDS.BUILD ? null : CARD_IDS.BUILD)}>
                {/* Front */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] bg-black ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'} group-hover:opacity-0 group-hover:pointer-events-none`}>
                    <img src={weBuildImage} alt="We Build" className="absolute inset-0 w-full h-full object-cover block" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h3 className="font-['Stage_Grotesk'] text-[32px] sm:text-[36px] font-medium leading-tight tracking-[-0.01em] text-[#A6F63B] m-0">
                            We Build
                        </h3>
                    </div>
                </div>

                {/* Back */}
                <div className={`absolute inset-0 w-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] bg-[#020b0d] border border-white/10 flex flex-col justify-center items-center p-8 text-center ${flipped ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
                    <p className="font-['Stage_Grotesk'] text-base sm:text-[17px] font-normal leading-relaxed text-white relative z-10 m-0">
                        Production grade AI products configured to your workflows, governed, audit-ready. Delivered in weeks, not months.                    </p>
                </div>
            </div>
        </div>
    );
}

function StayCard({ cardsVisible, activeCardId, onCardClick }) {
    const flipped = activeCardId === CARD_IDS.STAY;
    return (
        <div
            className={`relative w-full max-w-[340px] aspect-square bg-transparent cursor-pointer transition-all duration-[800ms] ease-out mx-auto ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
                }`}
            style={{ animationDelay: '500ms' }}
        >
            <div className="relative w-full h-full group rounded-[24px] overflow-hidden border border-white/5" onClick={() => onCardClick(prev => prev === CARD_IDS.STAY ? null : CARD_IDS.STAY)}>
                {/* Front */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] bg-black ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'} group-hover:opacity-0 group-hover:pointer-events-none`}>
                    <img src={weStayImage} alt="We Stay" className="absolute inset-0 w-full h-full object-cover block" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h3 className="font-['Stage_Grotesk'] text-[32px] sm:text-[36px] font-medium leading-tight tracking-[-0.01em] text-[#A6F63B] m-0">
                            We Stay
                        </h3>
                    </div>
                </div>

                {/* Back */}
                <div className={`absolute inset-0 w-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] bg-[#020b0d] border border-white/10 flex flex-col justify-center items-center p-8 text-center ${flipped ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
                    <p className="font-['Stage_Grotesk'] text-base sm:text-[17px] font-normal leading-relaxed text-white relative z-10 m-0">
                        Real transformation requires adoption. We stay until your teams run with it, and identify what's next.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Meet the Founders Section
function FoundersSection({ activeCardId, onCardClick }) {
    return (
        <div className="w-full max-w-[1280px] mx-auto mb-20 md:mb-32 lg:mb-48 px-6 relative z-10">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 mb-12 sm:mb-16 items-start lg:ml-[70px] text-center md:text-left">
                <h2 className="font-['Stage_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white m-0">
                    Meet the Founders
                </h2>
                <div className="max-w-[423px] mx-auto md:mx-0">
                    <p className="font-['Stage_Grotesk'] text-base sm:text-lg font-light leading-relaxed text-white m-0">
                        The Founders of Chartered Vectorial bring experience across engineering, operations, and large-scale system delivery.
                    </p>
                </div>
            </div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-8 md:gap-12 lg:gap-16">
                {/* Pradeep Card */}
                <FounderCard
                    cardId={CARD_IDS.PRADEEP}
                    activeCardId={activeCardId}
                    onCardClick={onCardClick}
                    name="Pradeep Menon"
                    designation="Founder & CEO, Chartered Vectorial"
                    image={founderEyalImage}
                    bio={
                        <>
                            <p className="mb-6">Pradeep Menon is the founder and CEO of Chartered Vectorial.</p>
                            <p className="mb-6">
                                He started CV to build the AI firm he wished existed, one that ships production grade AI, fast, for enterprises tired of pilots that go nowhere. Over 20 years, Pradeep held senior roles at Microsoft (Field CTO, Digital Natives, Asia), Alibaba Cloud (Director, Big Data & AI Solutions), and IBM (Sr. Architect), delivering Data and AI solutions across Europe and Asia.
                            </p>
                            <p>
                                He's a published author and keynote speaker on AI transformation, strategy, and business case development.
                            </p>
                        </>
                    }
                />

                {/* Eyal Card */}
                <FounderCard
                    cardId={CARD_IDS.EYAL}
                    activeCardId={activeCardId}
                    onCardClick={onCardClick}
                    name="Eyal Agmoni"
                    designation="Co-Founder, Chartered Vectorial | Founder of Chartered Group and CEO of Chartered Investment Managers"
                    image={founderPradeepImage}
                    bio={
                        <>
                            <p className="mb-6">Eyal Agmoni has spent 35 years building and investing in businesses across Europe and Asia.</p>
                            <p className="mb-6">
                                As Founder of Chartered Group, he's seen how technology reshapes industries and how most enterprises struggle to capture that value. He co-founded Chartered Vectorial to bridge that gap: backing a team that gets AI from strategy to production, not just pilots.
                            </p>
                        </>
                    }
                />
            </div>
        </div>
    );
}

function FounderCard({ cardId, activeCardId, onCardClick, name, designation, image, bio }) {
    const flipped = activeCardId === cardId;
    return (
        <div
            className="relative w-full max-w-[460px] aspect-square overflow-hidden rounded-none cursor-pointer group mx-auto max-[480px]:w-[260px] max-[480px]:h-[280px] max-[480px]:aspect-[3/5] md:max-w-[17rem] xl:max-w-full"
            onClick={() => onCardClick(prev => prev === cardId ? null : cardId)}
        >
            {/* Front */}
            <div className={`absolute inset-0 w-full h-full transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[1] ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'} group-hover:opacity-0 group-hover:pointer-events-none`}>
                <img src={image} alt={name} className="w-full h-full object-cover block object-[center_20%]" />
                <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none bg-gradient-to-t from-[#00b068] via-[#00b068]/80 to-transparent" />
                <h3 className="absolute bottom-0 left-0 right-0 font-['Stage_Grotesk'] text-[2rem] font-normal text-white m-0 pt-14 px-6 pb-5 z-[1] text-left max-[480px]:text-xl md:text-lg md:pt-7 md:px-3.5 md:pb-2.5">
                    {name}
                </h3>
            </div>

            {/* Back */}
            <div className={`absolute inset-0 w-full h-full z-[2] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 flex flex-col items-start text-left overflow-hidden pt-6 pb-8 px-8 md:p-4 max-[480px]:p-4 max-[480px]:pt-4 ${flipped ? 'opacity-100' : 'opacity-0'}`}>
                {/* Background: whoarewe.css radial-gradient */}
                <div className="absolute inset-0 w-full h-full -z-[1] bg-[radial-gradient(circle_at_83%_-10%,#01121a_0%,#00b068_90%)]" />

                <div className="h-full flex flex-col items-start w-full">
                    <div className="w-full">
                        <h3 className="font-['Stage_Grotesk'] text-[1.875rem] font-normal text-white m-0 mb-1 leading-tight max-[480px]:text-2xl md:text-[1.0625rem] lg:text-[1.0625rem]">
                            {name}
                        </h3>
                        <p className="font-['Blauer_Nue'] text-[0.8125rem] font-medium tracking-[0.05em] text-white/80 m-0 mt-1 leading-normal max-[480px]:text-[0.5625rem] md:text-[0.625rem] lg:text-[0.625rem]">
                            {designation}
                        </p>
                    </div>

                    <div className="max-w-[95%] mt-auto mx-auto max-[480px]:mt-4 flex flex-col justify-end flex-1 min-h-0">
                        <div className="font-['Stage_Grotesk'] text-base font-normal leading-[1.5] text-white/95 max-[1024px]:text-[0.6875rem] max-[1024px]:leading-[1.25] max-[480px]:text-[0.5125rem] max-[480px]:leading-none max-[480px]:[&_p]:!mb-2 lg:text-xs lg:leading-[1.3] xl:text-sm xl:leading-[1.3] [&_p]:!mb-3.5 [&_p:last-child]:!mb-0 ">
                            {bio}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoAreWeSection;