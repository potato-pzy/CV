import './AcceleratorsSection.css'
import { useState, useEffect, useRef, useId } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const salesIcon = 'https://www.figma.com/api/mcp/asset/313c74fc-c793-4543-b5cd-9d6c56890494'
const salesLine = 'https://www.figma.com/api/mcp/asset/08f7941b-9e4b-4a5b-979e-ba042f443c65'

const docIcon = 'https://www.figma.com/api/mcp/asset/18f1a606-08df-4da8-ab8c-425ff604cd96'
const docLine = 'https://www.figma.com/api/mcp/asset/f7335f67-86a5-4d14-8ea2-8c191d5287d6'

const complianceIcon = 'https://www.figma.com/api/mcp/asset/199e69c9-b852-46e3-8ae1-69af4fc2ed23'
const complianceLine = 'https://www.figma.com/api/mcp/asset/2eef0e0a-d4f1-4a0e-a244-dea793b7e265'

const darkCards = [
  {
    title: 'Sales Enablement',
    body: 'Instant answers from product docs, policies, and FAQs, helping sales teams close faster.',
    icon: salesIcon,
    underline: salesLine,
  },
  {
    title: 'Document Intelligence',
    body: 'Keep legal and policy documents aligned as regulations change, with automated updates at scale.',
    icon: docIcon,
    underline: docLine,
  },
  {
    title: 'Compliance Checks',
    body: 'AI-powered document review for regulatory checks. Audit-ready decisions in seconds.',
    icon: complianceIcon,
    underline: complianceLine,
  },
]

import caseStudyLeftTop from '../assets/homepage-case-study/case-study-left-top.jpg'
import caseStudyLeftBottom from '../assets/homepage-case-study/case-study-left-bottom.jpg'
import caseStudyRight from '../assets/homepage-case-study/case-study-right.jpg'

const lightCards = [
  {
    id: 1,
    image: caseStudyLeftBottom,
    label: 'PatchBot',
    title: 'Legal Documents, Aligned Automatically',
    content: 'Automated legal document updates with semantic accuracy and full traceability, reducing manual review time by 90%.',
  },
  {
    id: 2,
    image: caseStudyLeftTop,
    label: 'Compliance Agent',
    title: 'From 15 Minutes to 30 Seconds',
    content: 'Reduced regulatory compliance reviews from days to minutes using production-grade AI agents that understand complex financial regulations.',
  },
  {
    id: 3,
    image: caseStudyRight,
    label: 'Sales Copilot',
    title: 'Sales Teams, Unblocked',
    content: 'Enabled advisors to deliver instant, citation-backed answers from complex policy documents, accelerating sales cycles significantly.',
  },
]

function CaseCard({ image, label, title, content }) {
  const [active, setActive] = useState(false)
  const cardRef = useRef(null)
  const id = useId()

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [active])

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[101]" style={{}}>
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className="w-full max-w-[900px] max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-[#020F14] relative border border-white/10 shadow-2xl m-4"
            >
              <motion.div layoutId={`image-${title}-${id}`} className="relative h-[400px] shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F14] via-transparent to-transparent opacity-80" />

                <motion.button
                  aria-label="Close card"
                  layoutId={`button-${title}-${id}`}
                  className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-black transition-colors duration-300 z-10"
                  onClick={() => setActive(false)}
                >
                  <motion.div
                    animate={{ rotate: active ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </motion.div>
                </motion.button>
              </motion.div>

              <div className="flex-1 overflow-y-auto bg-[#020F14] relative">
                <div className="max-w-3xl mx-auto px-6 py-10 sm:px-10">
                  <motion.p
                    layoutId={`label-${label}-${id}`}
                    className="text-[#A6F63B] font-medium tracking-wide uppercase text-sm mb-4 font-['Stage_Grotesk']"
                  >
                    {label}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    className="font-medium text-white text-3xl sm:text-5xl mb-8 leading-tight font-['Stage_Grotesk']"
                  >
                    {title}
                  </motion.h3>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="prose prose-invert prose-lg max-w-none text-gray-300/90 font-['Stage_Grotesk'] font-light leading-relaxed"
                  >
                    <p className="text-xl leading-relaxed mb-8">{content}</p>

                    <h4 className="text-white text-2xl font-medium mt-10 mb-6">The Challenge</h4>
                    <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h4 className="text-white text-2xl font-medium mt-10 mb-6">The Approach</h4>
                    <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h4 className="text-white text-2xl font-medium mt-10 mb-6">The Solution</h4>
                    <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h4 className="text-white text-2xl font-medium mt-10 mb-8">The Impact</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      <div className="flex flex-col">
                        <span className="text-[#A6F63B] text-3xl sm:text-4xl font-semibold mb-2">30–60%</span>
                        <span className="text-gray-400 text-sm leading-tight">Reduction in manual effort</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#A6F63B] text-3xl sm:text-4xl font-semibold mb-2">30–60%</span>
                        <span className="text-gray-400 text-sm leading-tight">Reduction in manual effort</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#A6F63B] text-3xl sm:text-4xl font-semibold mb-2">30–60%</span>
                        <span className="text-gray-400 text-sm leading-tight">Reduction in manual effort</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#A6F63B] text-3xl sm:text-4xl font-semibold mb-2">30–60%</span>
                        <span className="text-gray-400 text-sm leading-tight">Reduction in manual effort</span>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                      <span className="text-sm text-gray-500 uppercase tracking-widest">Share this story</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className="case-card"
      >
        <motion.div layoutId={`image-${title}-${id}`}>
          <div className="case-image-placeholder">
            <img src={image} alt={title} />
          </div>
        </motion.div>
        <div className="case-card-content">
          <motion.div layoutId={`label-${label}-${id}`} className="case-meta">
            {label}
          </motion.div>
          <motion.div layoutId={`title-${title}-${id}`} className="case-title">
            {title}
          </motion.div>
          <motion.button
            aria-label="Open card"
            layoutId={`button-${title}-${id}`}
            className="case-icon"
          >
            <motion.div
              animate={{ rotate: active ? 45 : 0 }}
              transition={{ duration: 0.4 }}
            >
              +
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}

function AcceleratorsSection() {
  return (
    <section className="accelerators-section">
      <div className="acc-section-glow acc-glow-left" />
      <div className="acc-section-glow acc-glow-right" />
      <div className="accelerators-hero">
        <h2>Accelerators</h2>
        <p>Proven starting points. Customized for your context.</p>
      </div>

      <div className="accelerators-grid">
        {darkCards.map((card) => (
          <div key={card.title} className="acc-card-wrap">
            <div className="acc-card">
              <div className="acc-card-fx" aria-hidden="true">
                <div className="acc-fx-overlay" />
                <div className="acc-fx-orb acc-fx-orb-a" />
                <div className="acc-fx-orb acc-fx-orb-b" />
                <div className="acc-fx-orb acc-fx-orb-c" />
                <div className="acc-fx-orb acc-fx-orb-d" />
                <div className="acc-fx-sweep" />
              </div>

              <div className="acc-card-content">
                <div className="acc-content-main">
                  <div className="acc-icon-wrap">
                    <div className="acc-icon-ring acc-icon-ring-ping" aria-hidden="true" />
                    <div className="acc-icon-ring acc-icon-ring-pulse" aria-hidden="true" />
                    <div className="acc-icon-shell">
                      <div className="acc-icon-rot">
                        <img src={card.icon} alt="" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  <h3 className="acc-title">{card.title}</h3>
                  <div className="acc-desc">
                    <p>{card.body}</p>
                  </div>
                </div>

                <div className="acc-bottom-line" />
              </div>

              <div className="acc-corner acc-corner-tl" aria-hidden="true" />
              <div className="acc-corner acc-corner-br" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      <div className="case-hero">
        <h2>Case Studies</h2>
        <p>
          What happens <span className="highlight">when AI actually ships.</span>
        </p>
      </div>

      <div className="case-grid">
        {lightCards.map((card) => (
          <CaseCard
            key={card.id}
            image={card.image}
            label={card.label}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      <div className="case-glow" />
    </section>
  )
}

export default AcceleratorsSection
