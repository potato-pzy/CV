import { useState } from 'react';
import './BlogResourcesSection.css';

const imgWkC7AP1 = "https://www.figma.com/api/mcp/asset/054df4cf-ce71-49e2-b8e7-6cc47396df5e";
const imgWkC7AP = "https://www.figma.com/api/mcp/asset/ddc1b181-39e0-43e0-a991-778d4960594f";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/0cd619a2-6c25-46e2-9cb6-fb0fdbd03945";
const imgScreenshot = "https://www.figma.com/api/mcp/asset/2e2f9270-c1d9-4149-ab4b-303cdeff20b9";
const imgRectangle = "https://www.figma.com/api/mcp/asset/b340d30c-5211-456b-8ff7-fd5061efe766";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/57eded5b-edbe-46db-b87b-8befe08c85ce";

const categories = ['ALL', 'ENGINEERING', 'USECASES', 'FOUNDER\'S NOTES'];

const articles = [
  {
    id: 1,
    category: 'ENGINEERING',
    date: 'FEB 19, 2026',
    title: 'Automating compliance checks in regulated environments',
    gradient: 'linear-gradient(137.41deg, rgba(0, 140, 86, 1) 66.98%, rgba(7, 25, 32, 1) 100%)',
    hasOverlay: true,
  },
  {
    id: 2,
    category: 'ENGINEERING',
    date: 'FEB 19, 2026',
    title: 'Automating compliance checks in regulated environments',
    gradient: 'linear-gradient(137.41deg, rgba(166, 216, 191, 1) 66.98%, rgba(0, 0, 0, 1) 100%)',
    hasOverlay: true,
  },
  {
    id: 3,
    category: 'ENGINEERING',
    date: 'FEB 19, 2026',
    title: 'Automating compliance checks in regulated environments',
    gradient: 'linear-gradient(204.36deg, rgba(164, 237, 63, 1) 49.6%, rgba(0, 0, 0, 1) 119.27%)',
    image: imgScreenshot,
    hasOverlay: false,
  },
];

function BlogResourcesSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <section className="blog-resources-section">
      <div className="blog-container">
        <div className="blog-featured-card">
          <div className="blog-featured-image">
            <img src={imgWkC7AP1} alt="Team collaboration" />
          </div>
          <div className="blog-featured-content">
            <h2 className="blog-featured-title">Why most AI pilots never reach production</h2>
            <p className="blog-featured-date">JAN 31, 2026</p>
          </div>
        </div>

        <div className="blog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="blog-article-card">
              <div 
                className="blog-article-bg" 
                style={{ backgroundImage: article.gradient }}
              />
              {article.hasOverlay && <div className="blog-article-overlay" />}
              {article.image && (
                <div className="blog-article-image">
                  <img src={article.image} alt="" />
                </div>
              )}
              <div className="blog-article-content">
                <p className="blog-article-category">{article.category}</p>
                <h3 className="blog-article-title">{article.title}</h3>
                <p className="blog-article-date">{article.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogResourcesSection;
