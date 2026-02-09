import { useEffect, useState } from 'react';
import { isMobile } from '../lib/utils';
import WhoAreWeSection from './WhoAreWeSection';
import WhoAreWeStatic from './WhoAreWeStatic';

function WhoAreWeWrapper() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Check on mount and on resize
    const checkMobile = () => {
      setIsMobileDevice(isMobile() || window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile, show static React version with shared layout
  if (isMobileDevice) {
    return <WhoAreWeStatic />;
  }

  // On desktop, show React component
  return <WhoAreWeSection />;
}

export default WhoAreWeWrapper;
