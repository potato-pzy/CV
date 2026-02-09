import './backup.css';
import Navbar from './Navbar';
import CTASection from './CTASection';
import Footer from './Footer';

function Backup() {
  return (
    <div className="wa-page">
      <div className="wa-bg">
        <div className="wa-grid"></div>
      </div>

      <main className="wa-main">
        <Navbar />

        <section className="wa-hero">
          <div className="wa-hero-logo">
            <img src="/whoarewe/logo.svg" alt="" />
          </div>
          <div className="wa-hero-inner">
            <h1 className="wa-hero-title">
              AI CHANGES THE <br className="wa-br-d" />
              EQUATION <br className="wa-br-t" />
              IN HOW <span className="wa-nowrap">VALUE IS CREATED</span>
            </h1>
            <p className="wa-hero-sub">
              Chartered Vectorial is an AI-native, applied AI firm. We build AI products
              shaped by consulting insight, configured to your workflows and user experience,
              deployed in weeks.
            </p>
          </div>
          <div className="wa-scroll-hint">Scroll to explore</div>
        </section>

        <section className="wa-content">
          <div className="wa-paras">
            <p>The traditional model separates thinking from doing. Consultants advise. Engineers build. Handoffs create gaps. Pilots stall.</p>
            <p>We built Chartered Vectorial to fix that, by fusing consulting depth with AI powered product delivery.</p>
            <p>Our AI agents validate transformation hypotheses, debate approaches, and write production grade code, all governed by humans. The result isn't a roadmap. It's a product. Configured to your workflows. Shipped in weeks.</p>
            <p className="wa-acc">We're an AI-native product studio. We don't just advise on AI, we deliver it.</p>
          </div>
        </section>

        <section className="wa-ellipse">
          <div className="wa-ellipse-wrap">
            <img src="/whoarewe/whoarewe-ellipse.png" alt="" />
          </div>
        </section>

        <div className="wa-radial"></div>

        <section className="wa-cont">
          <div className="wa-cont-row">
            <div className="wa-cont-left">
              <img src="/whoarewe/left.png" alt="" className="wa-left-img" />
            </div>
            <div className="wa-features">
              <div className="wa-feat">
                <h3>Leverage over <br />headcount</h3>
                <p>A small team with the right products can out-deliver large teams. Our AI agents multiply what each person can ship.</p>
              </div>
              <div className="wa-feat">
                <h3>Strategy that <br />ships</h3>
                <p>Slide decks don't create value. AI products in production do. We stay until our products delivers.</p>
              </div>
              <div className="wa-feat">
                <h3>Built by agents, <br />governed by humans</h3>
                <p>AI agents do the heavy lifting validating, building, reviewing. You get customised products for your workflows, governed by humans at every gate.</p>
              </div>
              <div className="wa-feat">
                <h3>Access, not <br />exclusivity</h3>
                <p>World-class AI products shouldn't be reserved for giants. We build them for companies ready to move.</p>
              </div>
            </div>
          </div>

          <div className="wa-cont-row wa-cont-row-bottom">
            <div className="wa-cont-left">
              <h1 className="wa-headline">
                Small by design.<br />
                Fast by conviction.<br />
                Built for companies <span className="wa-acc">ready to move.</span>
              </h1>
            </div>
            <div className="wa-cont-right">
              <p className="wa-desc">
                <span>We learn how you work. We shape what changes.</span>
                <span>We build what fits. We stay until it runs.</span>
              </p>
            </div>
          </div>

          <div className="wa-cards">
            <div className="wa-card">
              <div className="wa-card-front">
                <img src="/whoarewe/we_think.jpeg" alt="We Think" />
                <p>We Think</p>
              </div>
              <div className="wa-card-back">
                <p>Validation, strategy, and business case development. Know where AI fits before you commit budget.</p>
              </div>
            </div>
            <div className="wa-card">
              <div className="wa-card-front">
                <img src="/whoarewe/we_build.jpeg" alt="We Build" />
                <p>We Build</p>
              </div>
              <div className="wa-card-back">
                <p>Production grade AI products configured to your workflows, governed, audit-ready. Delivered in weeks, not months.</p>
              </div>
            </div>
            <div className="wa-card">
              <div className="wa-card-front">
                <img src="/whoarewe/stay.jpeg" alt="We Stay" />
                <p>We Stay</p>
              </div>
              <div className="wa-card-back">
                <p>Real transformation requires adoption. We stay until your teams run with it, and identify what's next.</p>
              </div>
            </div>
          </div>

          <div className="wa-radial wa-radial-bottom"></div>

          <div className="wa-founders">
            <div className="wa-founders-head">
              <h2>Meet <br className="wa-founders-br" /><span className="wa-acc">the Founders</span></h2>
              <p>The Founders of Chartered Vectorial bring experience across engineering, operations, and large-scale system delivery.</p>
            </div>
            <div className="wa-founders-grid">
              <div className="wa-founder-card">
                <div className="wa-founder-front">
                  <img src="/whoarewe/founder_eyal.jpg" alt="Pradeep Menon" />
                  <h3>Pradeep Menon</h3>
                </div>
                <div className="wa-founder-back">
                  <h3>Pradeep Menon</h3>
                  <p className="wa-founder-role">Founder & CEO, Chartered Vectorial</p>
                  <p>Pradeep Menon is the founder and CEO of Chartered Vectorial. He started CV to build the AI firm he wished existed, one that ships production grade AI, fast, for enterprises tired of pilots that go nowhere. Over 20 years, Pradeep held senior roles at Microsoft (Field CTO, Digital Natives, Asia), Alibaba Cloud (Director, Big Data & AI Solutions), and IBM (Sr. Architect), delivering Data and AI solutions across Europe and Asia. He's a published author and keynote speaker on AI transformation, strategy, and business case development.</p>
                </div>
              </div>
              <div className="wa-founder-card">
                <div className="wa-founder-front">
                  <img src="/whoarewe/founder_pradeep.jpg" alt="Eyal Agmoni" />
                  <h3>Eyal Agmoni</h3>
                </div>
                <div className="wa-founder-back">
                  <h3>Eyal Agmoni</h3>
                  <p className="wa-founder-role">Co-Founder, Chartered Vectorial | Founder of Chartered Group and CEO of Chartered Investment Managers</p>
                  <p>Eyal Agmoni has spent 35 years building and investing in businesses across Europe and Asia. As Founder of Chartered Group, he's seen how technology reshapes industries and how most enterprises struggle to capture that value. He co-founded Chartered Vectorial to bridge that gap: backing a team that gets AI from strategy to production, not just pilots.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="wa-cont-bg">
        <div className="wa-cont-bg-c1"></div>
        <div className="wa-cont-bg-c2"></div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}

export default Backup;
