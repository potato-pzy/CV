import './CareersCTASection.css';

function CareersCTASection({ title, subtitle, buttonText }) {
  return (
    <section className="careers-cta-section">
      <div className="careers-cta-background">
        <img
          src="https://www.figma.com/api/mcp/asset/e910735e-1725-4c2f-885c-fd95b6e9cbbe"
          alt="Background pattern"
          className="careers-cta-bg-image"
        />
      </div>
      <div className="careers-cta-content">
        <h2 className="careers-cta-title">{title || "Shape what's next!"}</h2>
        <p className="careers-cta-subtitle">{subtitle || "We're always looking for exceptional people. Reach out."}</p>
        <button className="careers-cta-button">{buttonText || "FOLLOW ON LINKEDIN"}</button>
      </div>
    </section>
  );
}

export default CareersCTASection;
