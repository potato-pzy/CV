import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import CareersCTASection from './CareersCTASection';
import Footer from './Footer';
import { TextGradientScroll } from './ui/text-gradient-scroll';
import { GlowingEffect } from './GlowingEffect';
import GlassBorder from './GlassBorder';
import RolesSection from './RolesSection';

import visionariesIcon from '../assets/careers/Visionaries.svg';
import orchestratorIcon from '../assets/careers/Orchestrator.svg';
import buildersIcon from '../assets/careers/Builders.svg';
import learnerIcon from '../assets/careers/Learner.svg';
import careersHero from '../assets/careers/careers-hero.jpg';

function CareersMobile() {
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

    // Support both modern and legacy iOS Safari
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

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden antialiased">
      {/* Background grid + blob */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundSize: '2.5rem 2.5rem',
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.03) 0.0625rem, transparent 0.0625rem), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0.0625rem, transparent 0.0625rem)',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '-20%',
            left: '20%',
            width: '37.5rem',
            height: '37.5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            filter: 'blur(7.5rem)',
          }}
        />
      </div>

      <main className="relative z-10 w-full">
        {/* Hero */}
        <section
          className="relative min-h-screen pt-0"
          style={{
            backgroundImage: `url(${careersHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlays originally from ::before / ::after */}
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-transparent z-[2]" />

          <div className="relative z-[3]">
            <Navbar />

            <div className="box-border mx-auto flex min-h-screen w-full max-w-[82.5rem] flex-col items-start justify-center px-[var(--spacing-lg)] pt-[8rem] md:px-[var(--spacing-2xl)]">
              <div className="relative w-full max-w-[56.25rem] min-w-0 text-left md:pl-8 lg:right-24 min-[120rem]:max-w-[62rem] min-[120rem]:right-48">
                <h1
                  className="font-['Stage_Grotesk',sans-serif] text-[clamp(2rem,8vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.02em] uppercase text-white mb-6 drop-shadow-[0_0_2.5rem_rgba(0,0,0,0.5)]
                             max-w-[70%] mt-[9.75rem] relative md:mt-0 md:text-[2.5rem] md:leading-[1.15] md:max-w-[75%] md:mb-7 lg:text-[3.75rem]"
                >
                  REAL WORLD AI
                  <br />
                  NEEDS{' '}
                  <span className="text-[#A6F63B]">
                    REAL WORLD THINKING.
                  </span>
                </h1>

                <div className="mt-8 max-w-[59rem]">
                  <p className="font-['Blauer_Nue',sans-serif] text-[0.75rem] md:text-[1rem] lg:text-[1.2rem] font-normal leading-[1.5] md:leading-[1.55] max-w-[83%] md:max-w-[85%] lg:max-w-[59rem] text-white m-0 drop-shadow-[0_0_1.875rem_rgba(255,255,255,0.1)] text-left">
                    At Chartered Vectorial, AI agents are teammates, not just tools. We're
                    building a new kind of firm for people who want to shape what's next.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-center font-['Stage_Grotesk',sans-serif] text-[1rem] font-normal text-[#A6F63B] [text-shadow:0_0_0.25rem_#FFF] z-30 animate-bounce">
              {/* Intentionally left empty as in original */}
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="relative flex h-screen w-full items-center border-t border-[rgba(255,255,255,0.05)] bg-transparent px-0 py-0 overflow-hidden z-20 md:min-h-[55vh] md:py-24 max-md:min-h-[50vh] max-md:py-20 lg:py-[7.5rem]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.4)] to-transparent" />

          <div className="relative z-10 box-border mx-auto w-full max-w-[82.5rem]">
            <div className="mx-auto max-w-[56rem] text-center md:px-[var(--spacing-2xl)]">
              <h2 className="w-full text-left font-['Stage_Grotesk',sans-serif] text-[1.75rem] md:text-[2.25rem] lg:text-[3.125rem] font-medium tracking-[-0.02em] text-white mb-6 md:mb-7">
                How we work
              </h2>

              <TextGradientScroll
                text="Most companies talk about AI. We run on it. Our agents validate hypotheses, debate architecture, review code, and flag risks before humans make the call. Fewer meetings. More shipping. Real accountability."
                type="letter"
                textOpacity="soft"
                className="font-['Stage_Grotesk',sans-serif] text-[1.125rem] md:text-[1.625rem] lg:text-[1.9375rem] font-light leading-[1.4] lg:leading-[1.25] text-[#D9D9D9] m-0 tracking-normal md:min-h-[15vh] lg:min-h-[22vh]"
              />
            </div>
          </div>
        </section>

        {/* Ellipse glow */}
        <section className="relative top-[3.125rem] z-[1] h-full w-full overflow-hidden pointer-events-none">
          <div className="relative flex h-full w-full items-center justify-center">
            <div
              className="absolute opacity-60"
              style={{
                width: '75rem',
                height: '37.5rem',
                background:
                  'radial-gradient(ellipse at center, rgba(0, 150, 150, 0.15) 0%, rgba(0, 100, 120, 0.08) 30%, transparent 70%)',
                filter: 'blur(6.25rem)',
              }}
            />
          </div>
        </section>

        {/* Who thrives */}
        <section className="relative z-20 box-border mx-auto w-full max-w-[82.5rem] px-[var(--spacing-xl)] md:px-[var(--spacing-xl)] lg:px-3 lg:pb-[10.625rem] lg:pr-3 lg:pl-[0.625rem] py-20 max-md:px-[var(--spacing-xl)]">
          <div
            className="pointer-events-none absolute -top-[29.125rem] left-1/2 -translate-x-1/2 -z-10 rounded-full opacity-[0.77]"
            style={{
              width: '106.625rem',
              height: '45.625rem',
              background: 'linear-gradient(180deg, #001117 0%, #013445 100%)',
              filter: 'blur(12.5rem)',
            }}
          />

          <h2 className="mb-16 text-center font-['Stage_Grotesk',sans-serif] text-[1.75rem] md:text-[3rem] font-medium tracking-[-0.02em] text-white">
            Who thrives here
          </h2>

          <div className="grid w-full min-w-0 grid-cols-1 gap-[4.125rem] md:grid-cols-2 md:gap-[4.125rem]">
            {/* Visionaries */}
            <div className="relative flex min-h-[18.75rem] min-w-0 flex-col justify-start rounded-[0.75rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(2,15,20,0)] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(2,15,20,0.15)]">
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
              <div className="relative z-10 flex flex-col items-start text-left">
                <div className="mb-6 h-12 w-12">
                  <img
                    src={visionariesIcon}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-4 font-['Stage_Grotesk',sans-serif] text-[1.75rem] md:text-[1.75rem] lg:text-[2.25rem] font-normal tracking-[-0.02em] text-[#A6F63B]">
                  Visionaries
                </h3>
              </div>
              <p className="relative z-10 m-0 text-left font-['Blauer_Nue',sans-serif] text-[1rem] md:text-[1.125rem] font-light leading-[1.6] text-[rgba(255,255,255,0.6)]">
                You see where AI is heading, not just where it is. You think in systems, not tasks.
              </p>
            </div>

            {/* Orchestrators */}
            <div className="relative flex min-h-[18.75rem] min-w-0 flex-col justify-start rounded-[0.75rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(2,15,20,0)] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(2,15,20,0.15)]">
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
              <div className="relative z-10 flex flex-col items-start text-left">
                <div className="mb-6 h-12 w-12">
                  <img
                    src={orchestratorIcon}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-4 font-['Stage_Grotesk',sans-serif] text-[1.75rem] md:text-[1.75rem] lg:text-[2.25rem] font-normal tracking-[-0.02em] text-[#A6F63B]">
                  Orchestrators
                </h3>
              </div>
              <p className="relative z-10 m-0 text-left font-['Blauer_Nue',sans-serif] text-[1rem] md:text-[1.125rem] font-light leading-[1.6] text-[rgba(255,255,255,0.6)]">
                You don't just execute. You direct AI agents, connect the dots, and know when to step in.
              </p>
            </div>

            {/* Builders */}
            <div className="relative flex min-h-[18.75rem] min-w-0 flex-col justify-start rounded-[0.75rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(2,15,20,0)] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(2,15,20,0.15)]">
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
              <div className="relative z-10 flex flex-col items-start text-left">
                <div className="mb-6 h-12 w-12">
                  <img
                    src={buildersIcon}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-4 font-['Stage_Grotesk',sans-serif] text-[1.75rem] md:text-[1.75rem] lg:text-[2.25rem] font-normal tracking-[-0.02em] text-[#A6F63B]">
                  Builders
                </h3>
              </div>
              <p className="relative z-10 m-0 text-left font-['Blauer_Nue',sans-serif] text-[1rem] md:text-[1.125rem] font-light leading-[1.6] text-[rgba(255,255,255,0.6)]">
                You ship. Prototypes, production systems, client demos, you'd rather show than tell.
              </p>
            </div>

            {/* Learners */}
            <div className="relative flex min-h-[18.75rem] min-w-0 flex-col justify-start rounded-[0.75rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(2,15,20,0)] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(2,15,20,0.15)]">
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
              <div className="relative z-10 flex flex-col items-start text-left">
                <div className="mb-6 h-12 w-12">
                  <img
                    src={learnerIcon}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-4 font-['Stage_Grotesk',sans-serif] text-[1.75rem] md:text-[1.75rem] lg:text-[2.25rem] font-normal tracking-[-0.02em] text-[#A6F63B]">
                  Learners
                </h3>
              </div>
              <p className="relative z-10 m-0 text-left font-['Blauer_Nue',sans-serif] text-[1rem] md:text-[1.125rem] font-light leading-[1.6] text-[rgba(255,255,255,0.6)]">
                AI moves fast. You move faster. You're curious, adaptable, and energised by change.
              </p>
            </div>
          </div>
        </section>

        {/* Roles section (existing component + CSS) */}
        <RolesSection />
      </main>

      <CareersCTASection />
      <Footer />
    </div>
  );
}

export default CareersMobile;

