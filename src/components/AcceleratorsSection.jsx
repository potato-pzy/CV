import './AcceleratorsSection.css'

const salesIcon = 'https://www.figma.com/api/mcp/asset/313c74fc-c793-4543-b5cd-9d6c56890494'
const salesLine = 'https://www.figma.com/api/mcp/asset/08f7941b-9e4b-4a5b-979e-ba042f443c65'

const docIcon = 'https://www.figma.com/api/mcp/asset/18f1a606-08df-4da8-ab8c-425ff604cd96'
const docLine = 'https://www.figma.com/api/mcp/asset/f7335f67-86a5-4d14-8ea2-8c191d5287d6'

const complianceIcon = 'https://www.figma.com/api/mcp/asset/199e69c9-b852-46e3-8ae1-69af4fc2ed23'
const complianceLine = 'https://www.figma.com/api/mcp/asset/2eef0e0a-d4f1-4a0e-a244-dea793b7e265'

const darkCards = [
  {
    title: 'Sales Enablement',
    body: 'Instant answers from product docs, policies, and FAQs, helping sales teams close faster.',
    icon: salesIcon,
    underline: salesLine,
  },
  {
    title: 'Document Intelligence',
    body: 'Keep legal and policy documents aligned as regulations change, with automated updates at scale.',
    icon: docIcon,
    underline: docLine,
  },
  {
    title: 'Compliance Checks',
    body: 'AI-powered document review for regulatory checks. Audit-ready decisions in seconds.',
    icon: complianceIcon,
    underline: complianceLine,
  },
]

const lightCards = [
  {
    label: 'PatchBot',
    title: 'Legal Documents, Aligned Automatically',
  },
  {
    label: 'Compliance Agent',
    title: 'From 15 Minutes to 30 Seconds',
  },
  {
    label: 'Sales Copilot',
    title: 'Sales Teams, Unblocked',
  },
]

function AcceleratorsSection() {
  return (
    <section className="accelerators-section">
      <div className="accelerators-hero">
        <h2>Accelerators</h2>
        <p>Proven starting points. Customized for your context.</p>
      </div>

      <div className="accelerators-grid">
        {darkCards.map((card) => (
          <div key={card.title} className="acc-card-wrap">
            <div className="acc-card">
              <div className="acc-card-fx" aria-hidden="true">
                <div className="acc-fx-overlay" />
                <div className="acc-fx-orb acc-fx-orb-a" />
                <div className="acc-fx-orb acc-fx-orb-b" />
                <div className="acc-fx-orb acc-fx-orb-c" />
                <div className="acc-fx-orb acc-fx-orb-d" />
                <div className="acc-fx-sweep" />
              </div>

              <div className="acc-card-content">
                <div className="acc-icon-wrap">
                  <div className="acc-icon-ring acc-icon-ring-ping" aria-hidden="true" />
                  <div className="acc-icon-ring acc-icon-ring-pulse" aria-hidden="true" />
                  <div className="acc-icon-shell">
                    <div className="acc-icon-rot">
                      <img src={card.icon} alt="" loading="lazy" />
                    </div>
                  </div>
                </div>

                <h3 className="acc-title">{card.title}</h3>
                <div className="acc-desc">
                  <p>{card.body}</p>
                </div>

                <img src={card.underline} alt="" className="accelerator-underline" loading="lazy" />

                <div className="acc-divider" aria-hidden="true" />
                <div className="acc-dots" aria-hidden="true">
                  <div className="acc-dot acc-dot-1" />
                  <div className="acc-dot acc-dot-2" />
                  <div className="acc-dot acc-dot-3" />
                </div>
              </div>

              <div className="acc-corner acc-corner-tl" aria-hidden="true" />
              <div className="acc-corner acc-corner-br" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      <div className="case-hero">
        <h2>Case Studies</h2>
        <p>
          What happens <span className="highlight">when AI actually ships.</span>
        </p>
      </div>

      <div className="case-grid">
        {lightCards.map((card) => (
          <div key={card.title} className="case-card">
            <div className="case-image-placeholder" aria-hidden="true" />
            <div className="case-meta">{card.label}</div>
            <div className="case-title">{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AcceleratorsSection
