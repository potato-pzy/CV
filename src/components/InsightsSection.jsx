import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './InsightsSection.css';
import { fetchLatestBlogCards } from '../lib/sanityQueries';
import featuredImage from '../assets/insights/featured.png';
import article1Image from '../assets/insights/article_1.jpg';
import article2Image from '../assets/insights/article_2.png';
import article3Image from '../assets/insights/article_3.jpg';

// CMS-ready data structure – Founder's Note first in filter
const defaultCategories = ['ALL', "FOUNDER'S NOTE", 'AI ENGINEERING', 'AI STRATEGY'];

const defaultFeaturedPost = {
  id: 'featured-1',
  title: "Founder's Note: Why This Firm Exists",
  date: 'FEBRUARY, 2026',
  slug: '/blog/founders-note',
  backgroundImage: featuredImage
};

const defaultArticles = [
  {
    id: 3,
    category: "FOUNDER'S NOTE",
    date: 'FEBRUARY, 2026',
    title: "Founder's Note: Why This Firm Exists",
    slug: '/blog/founders-note',
    gradient: 'linear-gradient(135deg, #A4ED3F 0%, #000000 100%)',
    backgroundImage: article3Image
  },
  {
    id: 1,
    category: 'AI ENGINEERING',
    date: 'FEBRUARY, 2026',
    title: 'The Agentic AI Blueprint',
    displayTitle: <>The Agentic <br /> AI Blueprint</>,
    slug: '/blog/agentic-ai-blueprint',
    gradient: 'linear-gradient(135deg, #008C56 0%, #071920 100%)',
    backgroundImage: article1Image
  },
  {
    id: 2,
    category: 'AI STRATEGY',
    date: 'FEBRUARY, 2026',
    title: 'From Intelligence to Execution: The Rise of Agentic AI',
    slug: '/blog/rise-of-agentic-ai',
    gradient: 'linear-gradient(135deg, #A6D8BF 0%, #000000 100%)',
    backgroundImage: article2Image
  },
];

function InsightsSection({
  featuredPost = defaultFeaturedPost,
  articles = defaultArticles,
  categories = defaultCategories,
  showBookCallButton = true
}) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const [cmsArticles, setCmsArticles] = useState(null);
  const [cmsFeaturedPost, setCmsFeaturedPost] = useState(null);
  const [cmsCategories, setCmsCategories] = useState(null);
  const scrollRef = useRef(null);
  const location = useLocation();

  const effectiveArticles = cmsArticles || articles;
  const effectiveFeaturedPost = cmsFeaturedPost || featuredPost;
  const effectiveCategories = cmsCategories || categories;

  const filteredArticles = effectiveArticles.filter(
    article => activeCategory === 'ALL' || article.category === activeCategory
  );

  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth <= 768) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalItems = filteredArticles.length;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const newIndex = Math.round(progress * (totalItems - 1));

      if (newIndex !== currentScrollIndex && newIndex >= 0 && newIndex < totalItems) {
        setCurrentScrollIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    if (location.hash === '#blogs') {
      setTimeout(() => {
        const element = document.getElementById('blogs');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, [location]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        console.log('InsightsSection: Starting to load blog cards...')
        const latest = await fetchLatestBlogCards(12);
        console.log('InsightsSection: Loaded blog cards:', latest)
        if (cancelled) {
          console.log('InsightsSection: Load cancelled')
          return;
        }
        if (!latest || latest.length === 0) {
          console.warn('InsightsSection: No blog cards found or empty array')
          return;
        }

        setCmsArticles(latest);
        setCmsFeaturedPost({
          id: latest[0].id,
          title: latest[0].title,
          date: latest[0].date,
          slug: latest[0].slug,
          backgroundImage: latest[0].backgroundImage
        });

        const derived = Array.from(
          new Set(latest.map((a) => a.category).filter(Boolean))
        );
        setCmsCategories(['ALL', ...derived]);
      } catch (err) {
        console.error('Failed to load Sanity blog cards:', err);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="insights-section">
      <div className="insights-bottom-glow" />
      {/* Top Navigation Bar */}
      <div className="insights-top-bar">
        <div className="insights-container">
          <div className="insights-nav">
          </div>
        </div>
      </div>

      <div className="insights-container">
        {/* Featured Section */}
        <Link to={effectiveFeaturedPost.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="insights-why-exists">
            <div className="insights-image-cropper">
              <img
                src={featuredImage}
                alt="Featured"
                className="insights-featured-img"
                style={{ transform: 'scale(1.0)', transformOrigin: 'top center' }}
              />
            </div>
            <div className="insights-why-exists-overlay">
              <span className="insights-why-exists-badge">FEATURED</span>
            </div>
          </div>

          <div className="insights-why-exists-content-wrapper">
            <div className="insights-why-exists-content">
              <h2 className="insights-why-exists-title">{effectiveFeaturedPost.title}</h2>
              <p className="insights-why-exists-date">{effectiveFeaturedPost.date}</p>
            </div>
          </div>
        </Link>

        {/* Featured Article Section */}
        <div className="insights-main-content" id="blogs">
          {/* Filter Buttons */}
          <div className="insights-filters">
            {effectiveCategories.map((cat) => (
              <button
                key={cat}
                className={`insights-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentScrollIndex(0);
                  if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div
            className="insights-articles-grid"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                category={article.category}
                date={article.date}
                title={article.title}
                displayTitle={article.displayTitle}
                slug={article.slug}
                gradient={article.gradient}
                backgroundImage={article.backgroundImage}
                backgroundBlend={article.backgroundBlend}
              />
            ))}
          </div>

          {/* Pagination Indicators (Mobile Only) */}
          <div className="insights-pagination">
            {filteredArticles.map((_, index) => (
              <div
                key={index}
                className={`insights-dot ${currentScrollIndex === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
