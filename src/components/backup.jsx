import './WhoAreWeSection.css';
import Navbar from './Navbar';
import CTASection from './CTASection';
import Footer from './Footer';

function Backup() {
  return (
    <div className="whoarewe-page">
      <div className="whoarewe-background-effects">
        <div className="tech-grid"></div>
        <div className="gradient-radial"></div>
      </div>

      <main className="whoarewe-main">
        <Navbar />

        <section className="whoarewe-hero">
          <div className="whoarewe-hero-logo">
            <img src="/whoarewe/logo.svg" alt="" />
          </div>
          <div className="whoarewe-hero-inner">
            <h1 className="whoarewe-hero-title">
              AI CHANGES THE <br className="whoarewe-hero-break-desktop" />
              EQUATION <br className="whoarewe-hero-break-tablet" />
              IN HOW <span style={{ whiteSpace: 'nowrap' }}>VALUE IS CREATED</span>
            </h1>
            <p className="whoarewe-hero-subtitle">
              Chartered Vectorial is an AI-native, applied AI firm. We build AI products
              shaped by consulting insight, configured to your workflows and user experience,
              deployed in weeks.
            </p>
          </div>
          <div className="scroll-to-explore">
            <span>Scroll to explore</span>
          </div>
        </section>

        <section className="whoarewe-content">
          <div className="whoarewe-content-text">
            <p className="whoarewe-para">The traditional model separates thinking from doing. Consultants advise. Engineers build. Handoffs create gaps. Pilots stall.</p>
            <p className="whoarewe-para">We built Chartered Vectorial to fix that, by fusing consulting depth with AI powered product delivery.</p>
            <p className="whoarewe-para">Our AI agents validate transformation hypotheses, debate approaches, and write production grade code, all governed by humans. The result isn't a roadmap. It's a product. Configured to your workflows. Shipped in weeks.</p>
            <p className="whoarewe-para whoarewe-highlight">We're an AI-native product studio. We don't just advise on AI, we deliver it.</p>
          </div>
        </section>

        <section className="whoarewe-ellipse">
          <div className="whoarewe-ellipse-container">
            <img src="/whoarewe/whoarewe-ellipse.png" alt="" className="whoarewe-ellipse-image" loading="lazy" />
          </div>
        </section>

        {/* Radial Blur Oval */}
        <div className="whoarewe-radial-blur-oval"></div>

        <section className="whoarewe-continuation">
          <div className="whoarewe-continuation-top-row">
            <div className="whoarewe-continuation-left">
              <div className="whoarewe-left-image-glow"></div>
              <img src="/whoarewe/left.png" alt="" className="whoarewe-left-image" loading="lazy" />
            </div>
            <div className="whoarewe-continuation-right">
              <div className="whoarewe-features-grid features-visible">
                <div className="whoarewe-feature-item">
                  <h3 className="whoarewe-feature-title">Leverage over <br />headcount</h3>
                  <p className="whoarewe-feature-text">
                    A small team with the right products can out-deliver large teams. Our AI agents multiply what each person can ship.
                  </p>
                </div>
                <div className="whoarewe-feature-item">
                  <h3 className="whoarewe-feature-title whoarewe-feature-title-strategy">Strategy that <br />ships</h3>
                  <p className="whoarewe-feature-text">
                    Slide decks don't create value. AI products in production do. We stay until our products delivers.
                  </p>
                </div>
                <div className="whoarewe-feature-item">
                  <h3 className="whoarewe-feature-title">
                    Built by agents, <br className="whoarewe-feature-break" />governed by humans
                  </h3>
                  <p className="whoarewe-feature-text">
                    AI agents do the heavy lifting validating, building, reviewing. You get customised products for your workflows, governed by humans at every gate.
                  </p>
                </div>
                <div className="whoarewe-feature-item">
                  <h3 className="whoarewe-feature-title">
                    Access, not <br className="whoarewe-feature-break" />exclusivity
                  </h3>
                  <p className="whoarewe-feature-text">
                    World-class AI products shouldn't be reserved for giants. We build them for companies ready to move.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="whoarewe-continuation-bottom-row">
            <div className="whoarewe-continuation-left">
              <h1 className="whoarewe-continuation-headline">
                Small by design.<br />
                Fast by conviction.<br />
                Built for companies <span className="whoarewe-highlight">ready to move.</span>
              </h1>
            </div>
            <div className="whoarewe-continuation-right">
              <div className="whoarewe-continuation-description-wrapper">
                <p className="whoarewe-continuation-bottom-text">
                  <span style={{ display: 'block' }}>We learn how you work. We shape what changes.</span>
                  <span style={{ display: 'block' }}>We build what fits. We stay until it runs.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="whoarewe-image-cards-grid cards-visible">
            <div className="whoarewe-image-card">
              <div className="whoarewe-image-card-front">
                <img src="/whoarewe/we_think.jpeg" alt="We Think" className="whoarewe-image-card-img" loading="lazy" />
                <p className="whoarewe-image-card-text">We Think</p>
              </div>
              <div className="whoarewe-image-card-back">
                <div className="whoarewe-card-body">
                  Validation, strategy, and business case development. Know where AI fits before you commit budget.
                </div>
              </div>
            </div>
            <div className="whoarewe-image-card">
              <div className="whoarewe-image-card-front">
                <img src="/whoarewe/we_build.jpeg" alt="We Build" className="whoarewe-image-card-img" loading="lazy" />
                <p className="whoarewe-image-card-text">We Build</p>
              </div>
              <div className="whoarewe-image-card-back">
                <div className="whoarewe-card-body">
                  Production grade AI products configured to your workflows, governed, audit-ready. Delivered in weeks, not months.
                </div>
              </div>
            </div>
            <div className="whoarewe-image-card">
              <div className="whoarewe-image-card-front">
                <img src="/whoarewe/stay.jpeg" alt="We Stay" className="whoarewe-image-card-img" loading="lazy" />
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

          <div className="whoarewe-founders">
            <div className="whoarewe-founders-header">
              <h2 className="whoarewe-founders-title">Meet <br className="founder-br" /><span className="whoarewe-highlight">the Founders</span></h2>
              <p className="whoarewe-founders-description">
                The Founders of Chartered Vectorial bring experience across engineering, operations, and large-scale system delivery.
              </p>
            </div>
            <div className="whoarewe-founders-grid">
              <div className="whoarewe-founder-card">
                <div className="whoarewe-founder-front">
                  <img src="/whoarewe/founder_eyal.jpg" alt="Pradeep Menon" className="whoarewe-founder-image" loading="lazy" />
                  <div className="whoarewe-founder-gradient"></div>
                  <h3 className="whoarewe-founder-name">Pradeep Menon</h3>
                </div>
                <div className="whoarewe-founder-back">
                  <div className="whoarewe-founder-back-bg"></div>
                  <div className="whoarewe-founder-back-content">
                    <h3 className="whoarewe-founder-back-name">Pradeep Menon</h3>
                    <p className="whoarewe-founder-back-designation">Founder & CEO, Chartered Vectorial</p>
                    <div className="whoarewe-founder-back-bio-wrap">
                      <p className="whoarewe-founder-back-bio">Pradeep Menon is the founder and CEO of Chartered Vectorial. He started CV to build the AI firm he wished existed, one that ships production grade AI, fast, for enterprises tired of pilots that go nowhere. Over 20 years, Pradeep held senior roles at Microsoft (Field CTO, Digital Natives, Asia), Alibaba Cloud (Director, Big Data & AI Solutions), and IBM (Sr. Architect), delivering Data and AI solutions across Europe and Asia. He's a published author and keynote speaker on AI transformation, strategy, and business case development.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="whoarewe-founder-card">
                <div className="whoarewe-founder-front">
                  <img src="/whoarewe/founder_pradeep.jpg" alt="Eyal Agmoni" className="whoarewe-founder-image whoarewe-founder-image-adjust" loading="lazy" />
                  <div className="whoarewe-founder-gradient"></div>
                  <h3 className="whoarewe-founder-name">Eyal Agmoni</h3>
                </div>
                <div className="whoarewe-founder-back">
                  <div className="whoarewe-founder-back-bg"></div>
                  <div className="whoarewe-founder-back-content">
                    <h3 className="whoarewe-founder-back-name">Eyal Agmoni</h3>
                    <p className="whoarewe-founder-back-designation">Co-Founder, Chartered Vectorial | Founder of Chartered Group and CEO of Chartered Investment Managers</p>
                    <div className="whoarewe-founder-back-bio-wrap">
                      <p className="whoarewe-founder-back-bio">Eyal Agmoni has spent 35 years building and investing in businesses across Europe and Asia. As Founder of Chartered Group, he's seen how technology reshapes industries and how most enterprises struggle to capture that value. He co-founded Chartered Vectorial to bridge that gap: backing a team that gets AI from strategy to production, not just pilots.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default Backup;
