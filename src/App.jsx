import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import GlobalLoader from './components/GlobalLoader'
import HighVelocityLoader from './components/HighVelocityLoader'
import RouteWithReady from './components/RouteWithReady'
import { RouteReadyProvider } from './context/RouteReadyContext'

const Home = lazy(() => import('./components/Home'))
const WhoAreWeSection = lazy(() => import('./components/WhoAreWeSection'))
const WhoAreWeWrapper = lazy(() => import('./components/WhoAreWeWrapper'))
const WhoAreWeStatic = lazy(() => import('./components/WhoAreWeStatic'))
const Backup = lazy(() => import('./components/backup'))
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
  <div style={{
    position: 'fixed',
    inset: 0,
    zIndex: 20000,
    background: '#020f14',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <HighVelocityLoader size={64} />
  </div>
)

function wrapWithReady(Component) {
  return (
    <RouteWithReady>
      <Component />
    </RouteWithReady>
  )
}

function App() {
  return (
    <Router>
      <RouteReadyProvider>
        <ScrollToTop />
        <GlobalLoader />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={wrapWithReady(NewPage)} />
            <Route path="/whoweare.html" element={<Navigate to="/whoweare" replace />} />
            <Route path="/whoweare" element={wrapWithReady(WhoAreWeWrapper)} />
            <Route path="/whoweare-section" element={wrapWithReady(WhoAreWeSection)} />
            <Route path="/static" element={wrapWithReady(WhoAreWeStatic)} />
            <Route path="/backup" element={wrapWithReady(Backup)} />
            <Route path="/whatwedo" element={wrapWithReady(WhatWeDo)} />
            <Route path="/careers" element={wrapWithReady(CareersSection)} />
            <Route path="/insights" element={wrapWithReady(Insights)} />
            <Route path="/contact" element={wrapWithReady(Contact)} />
            <Route path="/terms" element={wrapWithReady(TermsOfUsePage)} />
            <Route path="/privacy" element={wrapWithReady(PrivacyPolicyPage)} />
            <Route path="/new" element={wrapWithReady(Home)} />
            <Route path="/business-image" element={wrapWithReady(BusinessImageDemo)} />
            <Route path="/testimonials" element={wrapWithReady(TestimonialsDemo)} />
            <Route path="/article-cards" element={wrapWithReady(ArticleCardsDemo)} />
            <Route path="/insights-section" element={wrapWithReady(InsightsSectionDemo)} />
            <Route path="/roles-section" element={wrapWithReady(RolesSectionDemo)} />
            <Route path="/blog-template" element={wrapWithReady(BlogPost)} />
            <Route path="/blog/rise-of-agentic-ai" element={wrapWithReady(BlogRiseOfAgenticAI)} />
            <Route path="/blog/agentic-ai-blueprint" element={wrapWithReady(BlogAgenticBlueprint)} />
            <Route path="/blog/founders-note" element={wrapWithReady(BlogFoundersNote)} />
            <Route path="/mobiletest" element={wrapWithReady(MobileTestPage)} />
            <Route path="/loader" element={wrapWithReady(LoaderDemo)} />
            <Route path="/validate" element={wrapWithReady(ValidatePage)} />
          </Routes>
        </Suspense>
      </RouteReadyProvider>
    </Router>
  )
}

export default App
