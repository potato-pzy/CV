import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './InsightsSection.css';
import { fetchLatestBlogCards } from '../lib/sanityQueries';

function InsightsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const [articles, setArticles] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [categories, setCategories] = useState(['ALL']);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);
  const location = useLocation();

  const filteredArticles = articles.filter(
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
      // First scroll to top to ensure clean layout, then scroll to blogs
      window.scrollTo(0, 0);
      setTimeout(() => {
        const element = document.getElementById('blogs');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);
        console.log('InsightsSection: Starting to load blog cards...')
        const latest = await fetchLatestBlogCards(12);
        console.log('InsightsSection: Loaded blog cards:', latest)
        if (cancelled) {
          console.log('InsightsSection: Load cancelled')
          return;
        }
        if (!latest || latest.length === 0) {
          console.warn('InsightsSection: No blog cards found or empty array')
          setIsLoading(false);
          return;
        }

        // Preload all images BEFORE setting state (prevents content flash)
        const imagesToPreload = [
          latest[0].backgroundImage, // Featured image
          ...latest.slice(0, 12).map(article => article.backgroundImage).filter(Boolean)
        ];



        console.log('InsightsSection: Preloading images...', imagesToPreload.length);

        const imagePromises = imagesToPreload.map(src => {
          return new Promise((resolve) => {
            if (!src) {
              resolve();
              return;
            }
            const img = new Image();
            img.onload = () => {
              console.log('InsightsSection: Image loaded:', src);
              resolve();
            };
            img.onerror = () => {
              console.warn('InsightsSection: Image failed to load:', src);
              resolve(); // Resolve anyway to not block the page
            };
            img.src = src;
          });
        });

        // Wait for all images to load
        await Promise.all(imagePromises);
        console.log('InsightsSection: All images loaded');

        if (cancelled) {
          return;
        }

        // NOW set all state - images are already preloaded
        setArticles(latest);
        setFeaturedPost({
          id: latest[0].id,
          title: latest[0].title,
          date: latest[0].date,
          slug: latest[0].slug,
          backgroundImage: latest[0].backgroundImage
        });

        const derived = Array.from(
          new Set(latest.map((a) => a.category).filter(Boolean))
        );
        setCategories(['ALL', ...derived]);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load Sanity blog cards:', err);
        setIsLoading(false);
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
        {isLoading ? (
          <div className="skeleton-wrapper">
            <div className="insights-why-exists skeleton-featured">
              <div className="insights-image-cropper">
                <div className="skeleton-image" style={{ width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.05)' }} />
              </div>
              <div className="insights-why-exists-overlay">
                <span className="insights-why-exists-badge">FEATURED</span>
              </div>
            </div>
            <div className="insights-why-exists-content-wrapper">
              <div className="insights-why-exists-content">
                <div className="skeleton-text" style={{ width: '70%', height: '2.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '1rem' }} />
                <div className="skeleton-text" style={{ width: '30%', height: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        ) : featuredPost ? (
          <Link to={featuredPost.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="insights-why-exists">
              <div className="insights-image-cropper">
                <img
                  src={featuredPost.backgroundImage}
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
                <h2 className="insights-why-exists-title">{featuredPost.title}</h2>
                <p className="insights-why-exists-date">{featuredPost.date}</p>
              </div>
            </div>
          </Link>
        ) : null}

        {/* Featured Article Section */}
        <div className="insights-main-content" id="blogs">
          {/* Filter Buttons */}
          <div className="insights-filters">
            {categories.map((cat) => (
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
            {isLoading ? (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="article-card skeleton-card">
                    <div className="skeleton-image" style={{ width: '100%', height: '300px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '1rem' }} />
                    <div className="skeleton-text" style={{ width: '40%', height: '0.875rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '0.75rem' }} />
                    <div className="skeleton-text" style={{ width: '80%', height: '1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
                  </div>
                ))}
              </>
            ) : filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
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
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'rgba(255,255,255,0.6)' }}>
                <p>No articles found.</p>
              </div>
            )}
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
