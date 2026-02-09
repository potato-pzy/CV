import { useEffect, useState } from 'react';
import { isMobile } from '../lib/utils';
import WhoAreWeSection from './WhoAreWeSection';

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

  // On mobile, show static HTML file via iframe
  if (isMobileDevice) {
    return (
      <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
        <iframe
          src="/whoarewe.html"
          style={{
            width: '100%',
            minHeight: '100vh',
            border: 'none',
            display: 'block'
          }}
          title="Who We Are"
          scrolling="yes"
        />
      </div>
    );
  }

  // On desktop, show React component
  return <WhoAreWeSection />;
}

export default WhoAreWeWrapper;
