import './WhoAreWeStatic.css';
import Navbar from './Navbar';
import CTASection from './CTASection';
import Footer from './Footer';
import logoSvg from '../assets/Asset 1.svg';
import weBuildImage from '../assets/we_build.jpeg';
import weThinkImage from '../assets/we_think.jpeg';
import weStayImage from '../assets/stay.jpeg';
import ellipseImg from '../assets/whoarewe-ellipse.png';
import founderPradeepImage from '../assets/founder_pradeep.jpg';
import founderEyalImage from '../assets/founder_eyal.jpg';
import leftImage from '../assets/left 1.png';

function WhoAreWeStatic() {
  return (
    <div className="wa-static-page">
      <div className="wa-static-bg">
        <div className="wa-static-grid"></div>
      </div>

      <main className="wa-static-main">
        <Navbar />
        <section className="wa-static-hero">
          <div className="wa-static-hero-logo">
            <img src={logoSvg} alt="" />
          </div>
          <div className="wa-static-hero-inner">
            <h1 className="wa-static-hero-title">
              AI CHANGES THE <br className="wa-static-br-d" />
              EQUATION <br className="wa-static-br-t" />
              IN HOW <span className="wa-static-nowrap">VALUE IS CREATED</span>
            </h1>
            <p className="wa-static-hero-sub">
              Chartered Vectorial is an AI-native, applied AI firm. We build AI products
              shaped by consulting insight, configured to your workflows and user experience,
              deployed in weeks.
            </p>
          </div>
          <div className="wa-static-scroll-hint">Scroll to explore</div>
        </section>

        <section className="wa-static-content">
          <div className="wa-static-paras">
            <p>The traditional model separates thinking from doing. Consultants advise. Engineers build. Handoffs create gaps. Pilots stall.</p>
            <p>We built Chartered Vectorial to fix that, by fusing consulting depth with AI powered product delivery.</p>
            <p>Our AI agents validate transformation hypotheses, debate approaches, and write production grade code, all governed by humans. The result isn't a roadmap. It's a product. Configured to your workflows. Shipped in weeks.</p>
            <p className="wa-static-acc">We're an AI-native product studio. We don't just advise on AI, we deliver it.</p>
          </div>
        </section>

        <section className="wa-static-ellipse">
          <div className="wa-static-ellipse-wrap">
            <img src={ellipseImg} alt="" loading="lazy" />
          </div>
        </section>

        <div className="wa-static-radial"></div>

        <section className="wa-static-cont">
          <div className="wa-static-cont-row">
            <div className="wa-static-cont-left">
              <img src={leftImage} alt="" className="wa-static-left-img" loading="lazy" />
            </div>
            <div className="wa-static-features">
              <div className="wa-static-feat">
                <h3>Leverage over <br />headcount</h3>
                <p>A small team with the right products can out-deliver large teams. Our AI agents multiply what each person can ship.</p>
              </div>
              <div className="wa-static-feat">
                <h3>Strategy that <br />ships</h3>
                <p>Slide decks don't create value. AI products in production do. We stay until our products delivers.</p>
              </div>
              <div className="wa-static-feat">
                <h3>Built by agents, <br />governed by humans</h3>
                <p>AI agents do the heavy lifting validating, building, reviewing. You get customised products for your workflows, governed by humans at every gate.</p>
              </div>
              <div className="wa-static-feat">
                <h3>Access, not <br />exclusivity</h3>
                <p>World-class AI products shouldn't be reserved for giants. We build them for companies ready to move.</p>
              </div>
            </div>
          </div>

          <div className="wa-static-cont-row wa-static-cont-row-bottom">
            <div className="wa-static-cont-left">
              <h1 className="wa-static-headline">
                Small by design.<br />
                Fast by conviction.<br />
                Built for companies <span className="wa-static-acc">ready to move.</span>
              </h1>
            </div>
            <div className="wa-static-cont-right">
              <p className="wa-static-desc">
                <span>We learn how you work. We shape what changes.</span>
                <span>We build what fits. We stay until it runs.</span>
              </p>
            </div>
          </div>

          <div className="wa-static-cards">
            <div className="wa-static-card">
              <div className="wa-static-card-front">
                <img src={weThinkImage} alt="We Think" loading="lazy" />
                <p>We Think</p>
              </div>
              <div className="wa-static-card-back">
                <p>Validation, strategy, and business case development. Know where AI fits before you commit budget.</p>
              </div>
            </div>
            <div className="wa-static-card">
              <div className="wa-static-card-front">
                <img src={weBuildImage} alt="We Build" loading="lazy" />
                <p>We Build</p>
              </div>
              <div className="wa-static-card-back">
                <p>Production grade AI products configured to your workflows, governed, audit-ready. Delivered in weeks, not months.</p>
              </div>
            </div>
            <div className="wa-static-card">
              <div className="wa-static-card-front">
                <img src={weStayImage} alt="We Stay" loading="lazy" />
                <p>We Stay</p>
              </div>
              <div className="wa-static-card-back">
                <p>Real transformation requires adoption. We stay until your teams run with it, and identify what's next.</p>
              </div>
            </div>
          </div>

          <div className="wa-static-radial wa-static-radial-bottom"></div>

          <div className="wa-static-founders">
            <div className="wa-static-founders-head">
              <h2>Meet <br className="wa-static-founders-br" /><span className="wa-static-acc">the Founders</span></h2>
              <p>The Founders of Chartered Vectorial bring experience across engineering, operations, and large-scale system delivery.</p>
            </div>
            <div className="wa-static-founders-grid">
              <div className="wa-static-founder-card">
                <div className="wa-static-founder-front">
                  <img src={founderEyalImage} alt="Pradeep Menon" loading="lazy" />
                  <h3>Pradeep Menon</h3>
                </div>
                <div className="wa-static-founder-back">
                  <h3>Pradeep Menon</h3>
                  <p className="wa-static-founder-role">Founder & CEO, Chartered Vectorial</p>
                  <p>Pradeep Menon is the founder and CEO of Chartered Vectorial. He started CV to build the AI firm he wished existed, one that ships production grade AI, fast, for enterprises tired of pilots that go nowhere. Over 20 years, Pradeep held senior roles at Microsoft (Field CTO, Digital Natives, Asia), Alibaba Cloud (Director, Big Data & AI Solutions), and IBM (Sr. Architect), delivering Data and AI solutions across Europe and Asia. He's a published author and keynote speaker on AI transformation, strategy, and business case development.</p>
                </div>
              </div>
              <div className="wa-static-founder-card">
                <div className="wa-static-founder-front">
                  <img src={founderPradeepImage} alt="Eyal Agmoni" loading="lazy" />
                  <h3>Eyal Agmoni</h3>
                </div>
                <div className="wa-static-founder-back">
                  <h3>Eyal Agmoni</h3>
                  <p className="wa-static-founder-role">Co-Founder, Chartered Vectorial | Founder of Chartered Group and CEO of Chartered Investment Managers</p>
                  <p>Eyal Agmoni has spent 35 years building and investing in businesses across Europe and Asia. As Founder of Chartered Group, he's seen how technology reshapes industries and how most enterprises struggle to capture that value. He co-founded Chartered Vectorial to bridge that gap: backing a team that gets AI from strategy to production, not just pilots.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="wa-static-cont-bg">
        <div className="wa-static-cont-bg-c1"></div>
        <div className="wa-static-cont-bg-c2"></div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}

export default WhoAreWeStatic;
