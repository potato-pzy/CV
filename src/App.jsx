import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import './index.css'

const Home = lazy(() => import('./components/Home'))
const WhoAreWeSection = lazy(() => import('./components/WhoAreWeSection'))
const CareersSection = lazy(() => import('./components/CareersSection'))
const Insights = lazy(() => import('./components/Insights'))
const WhatWeDo = lazy(() => import('./components/WhatWeDo'))

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div style={{ background: '#020f14', minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoareewe" element={<WhoAreWeSection />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/careers" element={<CareersSection />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
