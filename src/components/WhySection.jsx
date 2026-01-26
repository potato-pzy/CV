import './WhySection.css';
import whyBg from '../assets/why-cv-bg.svg';

const figmaBg =
  'https://www.figma.com/api/mcp/asset/3f8b45a2-37b6-4f1e-b183-dd707a5ccbac';

const leftColumnCards = [
  {
    title: 'Production-Grade Engineering',
    titleParts: ['Production-Grade', 'Engineering'],
    stat: '30–60%',
    body: 'We build AI agents with the same rigor as enterprise software — tested, governed, audit-ready.',
    label: 'Reduction in manual effort',
    variant: 'production',
  },
  {
    title: "We don't stop at Prototypes",
    titleParts: ["We don't stop at", 'Prototypes'],
    stat: '< 12 weeks',
    body: 'Most AI initiatives stall in pilot mode. We stay embedded until agents deliver measurable impact in production.',
    label: 'To ship a production-ready agent',
  },
];

const rightColumnCards = [
  {
    title: 'AI-Native by Design',
    titleParts: ['AI-Native by', 'Design'],
    stat: '100%',
    body: 'Our delivery runs on Agentic SDLC — AI agents that analyze, architect, and review together. Humans approve what matters.',
    label: 'Decision traceability across deployed agents',
  },
  {
    title: 'Enterprise Governance & Reliability',
    titleParts: ['Enterprise Governance', '& Reliability'],
    stat: '24/7',
    body: 'Monitoring, drift detection, and monthly improvement cycles. Your agents stay accurate and resilient.',
    label: 'Operational monitoring & governance',
  },
];

function WhyCard({ title, titleParts, stat, body, label, variant }) {
  const cardClassName =
    variant === 'production' ? 'why-card why-card-production' : 'why-card';

  return (
    <div className={cardClassName}>
      <div className="why-card-content">
        <h2 className="why-card-title">
          {titleParts ? (
            <>
              {titleParts[0]}
              <br />
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="why-card-body">{body}</p>
      </div>
      <div className="why-card-footer">
        <div className="why-card-stat">{stat}</div>
        <div className="why-card-label">{label}</div>
      </div>
    </div>
  );
}

function WhySection({ variant }) {
  const sectionClass =
    variant === 'embedded' ? 'why-section why-section-embedded' : 'why-section';

  return (
    <section className={sectionClass}>
      {variant === 'embedded' && (
        <div className="why-figma-bg-wrapper">
          <img src={figmaBg} alt="" className="why-figma-bg" />
        </div>
      )}

      <main className="why-main">
        <header className="why-header">
          <h1 className="why-title">
            Why organizations choose<br className="why-title-break" /> Chartered Vectorial
          </h1>
        </header>

        <div className="why-grid">
          <div className="why-column why-column-left">
            {leftColumnCards.map((card) => (
              <WhyCard key={card.title} {...card} />
            ))}
          </div>

          <div className="why-column why-column-right">
            {rightColumnCards.map((card) => (
              <WhyCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default WhySection;
