import { useState, useEffect } from 'react'
import WhoAreWeSection from './WhoAreWeSection'
import Backup from './backup'

function WhoAreWeWrapper() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 48rem)')
    setIsMobile(mediaQuery.matches)

    const handleChange = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile ? <Backup /> : <WhoAreWeSection />
}

export default WhoAreWeWrapper
