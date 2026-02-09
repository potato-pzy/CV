import { useEffect, useState } from 'react';
import { isMobile } from '../lib/utils';
import WhoAreWeSection from './WhoAreWeSection';
import Backup from './backup';

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

  // On mobile, show backup version
  if (isMobileDevice) {
    return <Backup />;
  }

  // On desktop, show React component
  return <WhoAreWeSection />;
}

export default WhoAreWeWrapper;
