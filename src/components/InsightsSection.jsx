import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './InsightsSection.css';
import featuredImage from '../assets/featured.png';
import article1Image from '../assets/article_1.jpg';
import article2Image from '../assets/article_2.png';
import article3Image from '../assets/article_3.jpg';

// CMS-ready data structure
const defaultCategories = ['ALL', 'AI ENGINEERING', 'AI STRATEGY', 'PHILOSOPHY'];

const defaultFeaturedPost = {
  id: 'featured-1',
  title: "Founder's Note: Why This Firm Exists",
  date: 'JUL 05, 2024',
  slug: '/blog/founders-note',
  backgroundImage: featuredImage
};

const defaultArticles = [
  {
    id: 1,
    category: 'AI ENGINEERING',
    date: 'JUN 12, 2024',
    title: 'The Agentic AI Blueprint',
    slug: '/blog/agentic-ai-blueprint',
    gradient: 'linear-gradient(135deg, #008C56 0%, #071920 100%)',
    backgroundImage: article1Image
  },
  {
    id: 2,
    category: 'AI STRATEGY',
    date: 'MAY 24, 2024',
    title: 'From Intelligence to Execution: The Rise of Agentic AI',
    slug: '/blog/rise-of-agentic-ai',
    gradient: 'linear-gradient(135deg, #A6D8BF 0%, #000000 100%)',
    backgroundImage: article2Image
  },
  {
    id: 3,
    category: 'PHILOSOPHY',
    date: 'JUL 05, 2024',
    title: "Founder's Note: Why This Firm Exists",
    slug: '/blog/founders-note',
    gradient: 'linear-gradient(135deg, #A4ED3F 0%, #000000 100%)',
    backgroundImage: article3Image
  },
];

function InsightsSection({
  featuredPost = defaultFeaturedPost,
  articles = defaultArticles,
  categories = defaultCategories,
  showBookCallButton = true
}) {
  const [activeCategory, setActiveCategory] = useState('ALL');

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
        <Link to={featuredPost.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="insights-why-exists" style={{ aspectRatio: '1046 / 600' }}>
            <div className="insights-image-cropper">
              <img
                src={featuredPost.backgroundImage || featuredImage}
                alt="Featured"
                className="insights-featured-img"
                style={{ transform: 'scale(1.0)', transformOrigin: 'top center' }}
              />
            </div>
            <div className="insights-why-exists-overlay">
              <span className="insights-why-exists-badge">FEATURED</span>
            </div>
          </div>

          <div style={{ marginTop: '20px', maxWidth: '1046px', margin: '20px auto 80px' }}>
            <div className="insights-why-exists-content" style={{ marginTop: '16px' }}>
              <h2 className="insights-why-exists-title">{featuredPost.title}</h2>
              <p className="insights-why-exists-date">{featuredPost.date}</p>
            </div>
          </div>
        </Link>

        {/* Featured Article Section */}
        <div className="insights-main-content">
          {/* Filter Buttons */}
          <div className="insights-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`insights-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="insights-articles-grid">
            {articles
              .filter(article => activeCategory === 'ALL' || article.category === activeCategory)
              .map((article) => (
                <ArticleCard
                  key={article.id}
                  category={article.category}
                  date={article.date}
                  title={article.title}
                  slug={article.slug}
                  gradient={article.gradient}
                  backgroundImage={article.backgroundImage}
                  backgroundBlend={article.backgroundBlend}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
