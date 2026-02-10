import { useEffect, useState, lazy, Suspense } from 'react';

const CareersSection = lazy(() => import('./CareersSection'));
const CareersMobile = lazy(() => import('./CareersMobile'));

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

  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      {isMobile ? (
        <CareersMobile key="mobile" />
      ) : (
        <CareersSection key="desktop" />
      )}
    </Suspense>
  );
}

export default CareersWrapper;