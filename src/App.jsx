import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import GlobalLoader from './components/GlobalLoader'
import Home from './components/Home'
import WhoAreWeSection from './components/WhoAreWeSection'
import WhoAreWeStatic from './components/WhoAreWeStatic'
import CareersSection from './components/CareersSection'
import Insights from './components/Insights'
import WhatWeDo from './components/WhatWeDo'
import Contact from './components/Contact'
import NewPage from './components/NewPage'
import BusinessImageDemo from './components/BusinessImageDemo'
import TestimonialsDemo from './components/TestimonialsDemo'
import ArticleCardsDemo from './components/ArticleCardsDemo'
import InsightsSectionDemo from './components/InsightsSectionDemo'
import RolesSectionDemo from './components/RolesSectionDemo'
import BlogPost from './components/BlogPost'
import BlogRiseOfAgenticAI from './components/BlogRiseOfAgenticAI'
import BlogAgenticBlueprint from './components/BlogAgenticBlueprint'
import BlogFoundersNote from './components/BlogFoundersNote'
import TermsOfUsePage from './components/TermsOfUsePage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import MobileTestPage from './mobiletest/MobileTestPage'
import LoaderDemo from './components/LoaderDemo'
import ValidatePage from '../validate/ValidatePage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <GlobalLoader /> */}
      <Routes>
          <Route path="/" element={<NewPage />} />
          <Route path="/whoweare" element={<WhoAreWeSection />} />
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
    </Router>
  )
}

export default App
