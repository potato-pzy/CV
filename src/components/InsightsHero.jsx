import LightRays from './LightRays';
import Navbar from './Navbar';
import './InsightsHero.css';

function InsightsHero() {
  return (
    <div className="insights-hero">
      <Navbar />
      <LightRays
        raysOrigin="top-center"
        raysColor="#00af67"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
      <div className="insights-hero-content">
        <h1 className="insights-hero-title">Perspectives on agentic AI, enterprise operations and more</h1>
        <p className="insights-hero-subtitle">From agentic system design and production engineering to governance, operating models and real-world use cases, this is Chartered Vectorial's perspective on how organisations can responsibly deploy AI that delivers measurable, defensible business outcomes.</p>
      </div>
    </div>
  );
}

export default InsightsHero;
