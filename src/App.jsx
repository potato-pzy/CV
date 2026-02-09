import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import GlobalLoader from './components/GlobalLoader'

const Home = lazy(() => import('./components/Home'))
const WhoAreWeSection = lazy(() => import('./components/WhoAreWeSection'))
const WhoAreWeWrapper = lazy(() => import('./components/WhoAreWeWrapper'))
const WhoAreWeStatic = lazy(() => import('./components/WhoAreWeStatic'))
const CareersSection = lazy(() => import('./components/CareersSection'))
const Insights = lazy(() => import('./components/Insights'))
const WhatWeDo = lazy(() => import('./components/WhatWeDo'))
const Contact = lazy(() => import('./components/Contact'))
const NewPage = lazy(() => import('./components/NewPage'))
const BusinessImageDemo = lazy(() => import('./components/BusinessImageDemo'))
const TestimonialsDemo = lazy(() => import('./components/TestimonialsDemo'))
const ArticleCardsDemo = lazy(() => import('./components/ArticleCardsDemo'))
const InsightsSectionDemo = lazy(() => import('./components/InsightsSectionDemo'))
const RolesSectionDemo = lazy(() => import('./components/RolesSectionDemo'))
const BlogPost = lazy(() => import('./components/BlogPost'))
const BlogRiseOfAgenticAI = lazy(() => import('./components/BlogRiseOfAgenticAI'))
const BlogAgenticBlueprint = lazy(() => import('./components/BlogAgenticBlueprint'))
const BlogFoundersNote = lazy(() => import('./components/BlogFoundersNote'))
const TermsOfUsePage = lazy(() => import('./components/TermsOfUsePage'))
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'))
const MobileTestPage = lazy(() => import('./mobiletest/MobileTestPage'))
const LoaderDemo = lazy(() => import('./components/LoaderDemo'))
const ValidatePage = lazy(() => import('../validate/ValidatePage'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

const RouteFallback = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0a0a', color: '#888', fontFamily: 'system-ui,sans-serif' }}>Loading…</div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <GlobalLoader /> */}
      <Suspense fallback={<RouteFallback />}>
      <Routes>
          <Route path="/" element={<NewPage />} />
          <Route path="/whoweare.html" element={<Navigate to="/whoweare" replace />} />
          <Route path="/whoweare" element={<WhoAreWeWrapper />} />
          <Route path="/static" element={<WhoAreWeStatic />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/careers" element={<CareersSection />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/new" element={<Home />} />
          <Route path="/business-image" element={<BusinessImageDemo />} />
          <Route path="/testimonials" element={<TestimonialsDemo />} />
          <Route path="/article-cards" element={<ArticleCardsDemo />} />
          <Route path="/insights-section" element={<InsightsSectionDemo />} />
          <Route path="/roles-section" element={<RolesSectionDemo />} />
          <Route path="/blog-template" element={<BlogPost />} />
          <Route path="/blog/rise-of-agentic-ai" element={<BlogRiseOfAgenticAI />} />
          <Route path="/blog/agentic-ai-blueprint" element={<BlogAgenticBlueprint />} />
          <Route path="/blog/founders-note" element={<BlogFoundersNote />} />
          <Route path="/mobiletest" element={<MobileTestPage />} />
          <Route path="/loader" element={<LoaderDemo />} />
          <Route path="/validate" element={<ValidatePage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
