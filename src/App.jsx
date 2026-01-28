import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import './index.css'

const Home = lazy(() => import('./components/Home'))
const WhoAreWeSection = lazy(() => import('./components/WhoAreWeSection'))
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
          <Route path="/" element={<NewPage />} />
          <Route path="/whoarewe" element={<WhoAreWeSection />} />
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
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
