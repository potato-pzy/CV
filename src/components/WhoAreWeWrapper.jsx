import { useEffect, useState } from 'react';
import WhoAreWeSection from './WhoAreWeSection';
import WhoAreWeStatic from './WhoAreWeStatic';

function WhoAreWeWrapper() {
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
    <WhoAreWeSection key="mobile" />
  ) : (
    <WhoAreWeStatic key="desktop" />
  );
}

export default WhoAreWeWrapper;
