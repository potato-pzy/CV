import { useEffect, useState } from 'react';
import CareersSection from './CareersSection';
import CareersMobile from './CareersMobile';

function CareersWrapper() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 768px)').matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile ? (
    <CareersMobile key="mobile" />
  ) : (
    <CareersSection key="desktop" />
  );
}

export default CareersWrapper;

