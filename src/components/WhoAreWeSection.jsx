import CTASection from './CTASection';
import Footer from './Footer';
import Navbar from './Navbar';
import { TextGradientScroll } from './ui/text-gradient-scroll';
import { FlickeringGrid } from './ui/flickering-grid';
import { useEffect, useRef, useState } from 'react';
import logoSvg from '../assets/Asset 1.svg';
import layer1Image from '../assets/Layer 1.png';
import weBuildImage from '../assets/we_build.jpeg';
import weThinkImage from '../assets/we_think.jpeg';
import weStayImage from '../assets/stay.jpeg';
import ellipseImg from '../assets/whoarewe-ellipse.png';
import founderPradeepImage from '../assets/founder_pradeep.jpg';
import founderEyalImage from '../assets/founder_eyal.jpg';
import founderCardBg from '../assets/founder_card_bg.svg';
import leftImage from '../assets/left 1.png';

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
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="relative min-h-screen bg-[#020f14] text-white overflow-x-hidden flex flex-col m-0 p-0">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
          }}
        />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] hidden opacity-50 blur-[60px]"
          style={{
            background: 'radial-gradient(circle, #1A2515 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Navigation - keeping your existing Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 w-full flex-grow flex flex-col items-center gap-0 p-0 pb-[120px] bg-black">
        
        {/* Hero Section */}
        <section className="absolute top-0 left-0 right-0 w-full flex flex-col items-center justify-center text-center min-h-screen bg-black overflow-hidden p-0 z-20">
          {/* Top gradient overlay */}
          <div 
            className="absolute top-0 left-0 right-0 h-[40vh] z-[2] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 30%, transparent 100%)',
            }}
          />

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

          <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center text-center relative z-10 px-8 py-[120px]">
            <h1 className="font-['Stage_Grotesk'] text-4xl md:text-[55px] font-medium leading-normal tracking-[-0.02em] text-white max-w-[1200px] mb-8 text-center capitalize"
                style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.15)' }}>
              AI CHANGES THE EQUATION IN HOW VALUE IS CREATED.
            </h1>
            
            <p className="font-['Blauer_Nue'] text-xl md:text-xl font-normal leading-[1.2] normal-case max-w-[740px] mx-auto mb-12 tracking-normal text-center text-white/80">
              Chartered Vectorial is an AI-native, applied AI firm. We use AI to accelerate how we consult and how we engineer, so clients get to production faster.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#A6F63B] text-black font-['Stage_Grotesk'] text-xs font-medium uppercase tracking-[0.01em] rounded-[2px] no-underline transition-all duration-300 leading-normal text-center hover:bg-white"
              style={{ boxShadow: '0 0 15px rgba(166, 246, 59, 0.4)' }}
            >
              SCHEDULE CONSULT
            </a>
          </div>

          {/* Scroll to explore */}
          <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-['Stage_Grotesk'] text-base font-normal leading-normal text-[#A6F63B] text-center z-30 animate-bounce"
               style={{ textShadow: '0 0 4px #FFF' }}>
            <span>Scroll to explore</span>
            <svg className="text-[#DFED3F]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </section>

        {/* Content Section */}
        <div className="h-[39vh] w-[160%] max-w-[831px] relative text-center mt-[calc(100vh+267px)] font-['Stage_Grotesk'] text-base md:text-2xl font-normal leading-normal text-[#C7C7C7] md:text-left">
          <div className="flex flex-col gap-8 relative -bottom-[100px] z-20">
            {[
              "The traditional model separates thinking from doing. Consultants advise. Engineers build. Handoffs create gaps. Pilots stall.",
              "We built Chartered Vectorial to close that gap, and we did it with AI.",
              "Our AI agents validate transformation hypotheses with consulting-grade rigor. Our AI agents debate approaches, write code, and review each other's work before anything ships. Humans stay in control at every gate.",
              "We're an AI-native consulting firm focused on AI transformation. We don't just advise on AI, we use it to deliver."
            ].map((text, index) => (
              <p key={index} className="m-0">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Ellipse Section */}
        <div className="absolute w-full h-0 z-[5] pointer-events-none left-0 -top-[400px] overflow-visible">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full overflow-hidden blur-[60px]"
            style={{ clipPath: 'ellipse(50% 50% at 50% 50%)' }}
          >
            <img 
              src={ellipseImg} 
              alt="" 
              className="block max-w-none w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Radial Blur Oval */}
        <div 
          className="hidden md:block absolute w-[1658px] h-[777px] rounded-[1658px] bg-[#001D26] blur-[200px] left-1/2 -translate-x-1/2 -z-[3] pointer-events-none"
          style={{ top: 'calc(100vh + 600px)' }}
        />

        {/* Continuation Section */}
        <div className="w-full max-w-[1280px] mx-auto px-6 pt-24 md:pt-32 relative z-10">
          {/* Top Section: Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 mb-32 lg:mb-48">
            {/* Left Column */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none blur-[80px]" />
              
              <img 
                src={leftImage} 
                alt="" 
                className="w-full h-auto block mb-6 lg:mb-0 rounded-lg relative lg:-top-[60px]"
                style={{ filter: 'drop-shadow(0 0 50px rgba(166, 246, 59, 0.3))' }}
              />
              
              <div className="relative lg:top-5 w-full lg:w-[231%]">
                <h2 className="font-['Stage_Grotesk'] text-[30px] md:text-[50px] lg:text-[50px] font-medium leading-normal tracking-[-0.02em] text-white m-0 lg:relative lg:-right-[15px]">
                  Small by design. Fast by conviction. Built for companies{' '}
                  <span className="text-[#A6F63B]">ready to move.</span>
                </h2>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[179px] w-full">
              {/* Features Grid */}
              <div 
                ref={featuresGridRef}
                className={`grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20 ${featuresVisible ? 'features-visible' : ''}`}
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
                    text: "AI agents do the heavy lifting- validating, building, reviewing. Humans approve what matters."
                  },
                  {
                    title: "Access, not exclusivity",
                    text: "World-class capability shouldn't be reserved for giants. The barrier dropped. We're here to prove it."
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col gap-4 transition-all duration-1000 ease-out ${
                      featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <h3 className="font-['Stage_Grotesk'] text-[28px] font-medium leading-[30px] tracking-[-0.01em] text-white m-0">
                      {feature.title}
                    </h3>
                    <p className="font-['Stage_Grotesk'] text-base font-normal leading-normal text-[#C7C7C7] m-0">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Text */}
              <div className="pt-10 mt-4">
                <p className="relative font-['Stage_Grotesk'] text-base md:text-lg font-normal leading-normal text-[#C7C7C7] max-w-[468px] m-0 md:top-[45px] md:left-[290px] md:w-[64%] -right-[197px]">
                  We embed with client teams from strategy through production. No handoffs. No abandoned pilots. No reports that gather dust. We think with you. We build with you. We stay until it works.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: The Cards */}
          <div 
            ref={cardsGridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 justify-center max-w-[1320px] mx-auto"
          >
            {/* We Think Card */}
            <ThinkCard cardsVisible={cardsVisible} />
            
            {/* We Build Card */}
            <BuildCard cardsVisible={cardsVisible} />
            
            {/* We Stay Card */}
            <StayCard cardsVisible={cardsVisible} />
          </div>
        </div>

        {/* Radial Blur Oval Duplicate */}
        <div 
          className="hidden md:block absolute w-[1658px] h-[777px] rounded-[1658px] bg-[#001D26] blur-[200px] left-1/2 -translate-x-1/2 -z-[3] pointer-events-none"
          style={{ top: 'calc(100vh + 1400px)' }}
        />

        {/* Meet the Founders Section */}
        <FoundersSection />

        {/* Background circles */}
        <div className="hidden md:block fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[150px]"
            style={{ background: 'rgba(255, 255, 255, 0.02)' }}
          />
          <div 
            className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full blur-[150px]"
            style={{ background: 'rgba(166, 246, 59, 0.03)' }}
          />
        </div>
      </main>

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

// Card Components
function ThinkCard({ cardsVisible }) {
  return (
    <div 
      className={`relative w-[300px] h-[300px] max-w-[300px] max-h-[300px] bg-transparent aspect-square cursor-pointer transition-all duration-[800ms] ease-out ${
        cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      style={{ animationDelay: '100ms' }}
    >
      <div className="relative w-full h-full">
        {/* Front */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] opacity-100 hover:opacity-0 hover:pointer-events-none p-0 justify-center items-center flex">
          <div className="w-full h-auto mb-0 rounded-0 border-none z-[1]">
            <img src={weThinkImage} alt="We Think" className="w-full h-auto object-contain block" />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full opacity-0 transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] hover:opacity-100 bg-[#020F14] flex flex-col justify-between p-8">
          <h3 className="font-['Stage_Grotesk'] text-[32px] font-medium leading-normal tracking-[-0.02em] text-white m-0">
            We Think
          </h3>
          <p className="font-['Stage_Grotesk'] text-base font-normal leading-normal mt-10 text-[#C7C7C7]">
            Validation, strategy, and business case development. Know where AI fits before you commit budget.
          </p>
          <div className="mt-auto">
            <a href="#" className="text-white no-underline font-['Stage_Grotesk'] text-base font-medium inline-flex items-center border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#A6F63B] leading-normal group">
              Learn More
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildCard({ cardsVisible }) {
  return (
    <div 
      className={`relative w-[300px] h-[300px] max-w-[300px] max-h-[300px] bg-transparent aspect-square cursor-pointer transition-all duration-[800ms] ease-out ${
        cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      style={{ animationDelay: '300ms' }}
    >
      <div className="relative w-full h-full">
        {/* Front */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] opacity-100 hover:opacity-0 hover:pointer-events-none p-0 justify-center items-center flex">
          <div className="w-full h-auto mb-0 rounded-0 border-none z-[1]">
            <img src={weBuildImage} alt="We Build" className="w-full h-auto object-contain block" />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full opacity-0 transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] hover:opacity-100 bg-[#020F14] flex flex-col justify-between p-8">
          <h3 className="font-['Stage_Grotesk'] text-[32px] font-medium leading-normal tracking-[-0.02em] text-white m-0">
            We Build
          </h3>
          <p className="font-['Stage_Grotesk'] text-base font-normal leading-normal mt-10 text-[#C7C7C7]">
            Production-grade AI agents- tested, governed, audit-ready. Delivered in weeks, not months.
          </p>
          <div className="mt-auto">
            <a href="#" className="text-white no-underline font-['Stage_Grotesk'] text-base font-medium inline-flex items-center border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#A6F63B] leading-normal group">
              Learn More
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StayCard({ cardsVisible }) {
  return (
    <div 
      className={`relative w-[300px] h-[300px] max-w-[300px] max-h-[300px] bg-transparent aspect-square cursor-pointer transition-all duration-[800ms] ease-out ${
        cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      style={{ animationDelay: '500ms' }}
    >
      <div className="relative w-full h-full">
        {/* Front */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] opacity-100 hover:opacity-0 hover:pointer-events-none p-0 justify-center items-center flex">
          <div className="w-full h-auto mb-0 rounded-0 border-none z-[1]">
            <img src={weStayImage} alt="We Stay" className="w-full h-auto object-contain block" />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full opacity-0 transition-opacity duration-[550ms] ease-[cubic-bezier(0.85,0,0,1)] hover:opacity-100 bg-[#020F14] flex flex-col justify-between p-8">
          <h3 className="font-['Stage_Grotesk'] text-[32px] font-medium leading-normal tracking-[-0.02em] text-white m-0">
            We Stay
          </h3>
          <p className="font-['Stage_Grotesk'] text-base font-normal leading-normal mt-10 text-[#C7C7C7]">
            Real transformation requires adoption. We stay until your teams run with it, and identify what's next.
          </p>
          <div className="mt-auto">
            <a href="#" className="text-white no-underline font-['Stage_Grotesk'] text-base font-medium inline-flex items-center border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#A6F63B] leading-normal group">
              Learn More
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FoundersSection() {
  return (
    <div className="w-full max-w-[1280px] mx-auto mt-32 md:mt-48 md:ml-[70px] p-0 relative z-10">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mb-16 md:relative md:-right-5">
        <h2 className="font-['Stage_Grotesk'] text-4xl md:text-4xl font-medium leading-normal text-white m-0 md:relative md:-right-[69px]">
          Meet the Founders
        </h2>
        <p className="font-['Stage_Grotesk'] text-[15px] font-light leading-normal text-white m-0 max-w-[423px] relative text-left md:top-10">
          The Founders of Chartered Vectorial bring experience across engineering, operations, and large-scale system delivery.
        </p>
      </div>

      {/* Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[repeat(5,auto)] gap-10 md:gap-[54px] justify-items-center md:justify-center">
        {/* Pradeep Card */}
        <FounderCard
          name="Pradeep Menon"
          designation="Founder & CEO, Chartered Vectorial"
          image={founderPradeepImage}
          bio="Pradeep Menon is the Founder and CEO of Chartered Vectorial. He started CV to build the AI firm he wished existed, one that ships production-grade AI, fast, for enterprises tired of pilots that go nowhere. Over 20 years, Pradeep held senior roles at Microsoft (Field CTO—Digital Natives, Asia), Alibaba Cloud (Director, Big Data & AI Solutions), and IBM (Sr. Architect), delivering Data and AI solutions across Europe and Asia. He's a published author and keynote speaker on AI transformation."
        />

        {/* Eyal Card */}
        <FounderCard
          name="Eyal Agmoni"
          designation="Co-Founder, Chartered Vectorial | Founder of Chartered Group and CEO of Chartered Investment Managers"
          image={founderEyalImage}
          bio="Eyal Agmoni has spent 35 years building and investing in businesses across Europe and Asia. As Founder of Chartered Group, he's seen how technology reshapes industries and how most enterprises struggle to capture that value. He co-founded Chartered Vectorial to bridge that gap: backing a team that gets AI from strategy to production, not just pilots."
        />
      </div>
    </div>
  );
}

function FounderCard({ name, designation, image, bio }) {
  return (
    <div className="relative w-[460px] h-[460px] overflow-hidden rounded-0 cursor-pointer group max-[480px]:w-full max-[480px]:h-auto max-[480px]:aspect-square">
      {/* Front */}
      <div className="absolute inset-0 w-full h-full transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100 z-[1] group-hover:opacity-0 group-hover:pointer-events-none">
        <img src={image} alt={name} className="w-full h-[122%] object-cover block" />
        <div 
          className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(166, 246, 59, 0) 82.05%, rgba(32, 190, 95, 0.5) 88.87%, rgba(0, 176, 104, 1) 98.36%)'
          }}
        />
        <h3 className="absolute bottom-7 left-7 font-['Stage_Grotesk'] text-[30px] font-normal leading-normal text-white m-0 z-[1]">
          {name}
        </h3>
      </div>

      {/* Back */}
      <div className="absolute inset-0 w-full h-full opacity-0 z-[2] transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 flex flex-col px-7 py-6 text-left">
        <div 
          className="absolute inset-0 right-5 w-full h-full -z-[1]"
          style={{
            background: 'radial-gradient(circle at 83% -10%, #01121a 0%, #00b068 90%)'
          }}
        />
        <div className="h-full flex flex-col">
          <h3 className="font-['Stage_Grotesk'] text-[30px] font-normal text-white m-0 mb-1">
            {name}
          </h3>
          <p className="font-['Blauer_Nue'] text-[13px] font-medium tracking-[0.05em] text-white mt-1 mb-0 leading-normal">
            {designation}
          </p>
          <p className="w-[95%] font-['Stage_Grotesk'] text-sm font-normal leading-5 text-white absolute bottom-6">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWeSection;