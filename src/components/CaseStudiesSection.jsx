import './CaseStudiesSection.css';
import caseStudyLeftTop from '../assets/homepage-case-study/case-study-left-top.jpg';
import caseStudyLeftBottom from '../assets/homepage-case-study/case-study-left-bottom.jpg';
import caseStudyRight from '../assets/homepage-case-study/case-study-right.jpg';

const leftColumnStudies = [
  {
    id: 1,
    image: caseStudyLeftTop,
    description: 'Reduced regulatory compliance reviews from days to minutes using production-grade AI agents',
    company: 'PWM Japan Securities',
    aspectRatio: '16/9',
  },
  {
    id: 3,
    image: caseStudyLeftBottom,
    description: 'Automated legal document updates with semantic accuracy and full traceability',
    company: 'Chartered Investment Germany',
    aspectRatio: '4/5',
  },
];

const rightColumnStudies = [
  {
    id: 2,
    image: caseStudyRight,
    description: 'Enabled advisors to deliver instant, citation-backed answers from complex policy documents',
    company: 'PWM Japan Securities',
    aspectRatio: '4/5',
  },
];

function CaseStudyCard({ image, description, company, aspectRatio, isStaggered }) {
  return (
    <div className={`case-study-card ${isStaggered ? 'case-study-staggered' : ''}`}>
      <div className="case-study-image-wrapper">
        <div className={`case-study-image aspect-${aspectRatio.replace('/', '-')}`}>
          <div className="image-overlay"></div>
          <img src={image} alt={description} />
        </div>
      </div>
      <div className="case-study-text">
        <p className="case-study-description">{description}</p>
        <p className="case-study-company">{company}</p>
      </div>
    </div>
  );
}

function CaseStudiesSection() {
  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <header className="case-studies-header">
          <h1 className="case-studies-title">Case Studies</h1>
        </header>

        <div className="case-studies-grid">
          <div className="case-studies-column case-studies-column-left">
            {leftColumnStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                image={study.image}
                description={study.description}
                company={study.company}
                aspectRatio={study.aspectRatio}
                isStaggered={index === 1}
              />
            ))}
          </div>

          <div className="case-studies-column case-studies-column-right">
            {rightColumnStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                image={study.image}
                description={study.description}
                company={study.company}
                aspectRatio={study.aspectRatio}
              />
            ))}

            <div className="case-studies-quote">
              <h2 className="quote-text">"Value that extends beyond initial delivery."</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
