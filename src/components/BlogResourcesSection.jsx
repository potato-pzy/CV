import { useState } from 'react';
import './BlogResourcesSection.css';

const imgWkC7AP1 = "https://www.figma.com/api/mcp/asset/054df4cf-ce71-49e2-b8e7-6cc47396df5e";
const imgWkC7AP = "https://www.figma.com/api/mcp/asset/ddc1b181-39e0-43e0-a991-778d4960594f";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/0cd619a2-6c25-46e2-9cb6-fb0fdbd03945";
const imgScreenshot = "https://www.figma.com/api/mcp/asset/2e2f9270-c1d9-4149-ab4b-303cdeff20b9";
const imgRectangle = "https://www.figma.com/api/mcp/asset/b340d30c-5211-456b-8ff7-fd5061efe766";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/57eded5b-edbe-46db-b87b-8befe08c85ce";

// CMS-ready data structure - can be replaced with CMS data
const defaultCategories = ['ALL', 'ENGINEERING', 'USECASES', 'FOUNDER\'S NOTES'];

const defaultFeaturedPost = {
  id: 'featured-1',
  image: imgWkC7AP1,
  title: 'Why most AI pilots never reach production',
  date: 'JAN 31, 2026',
  slug: 'why-most-ai-pilots-never-reach-production',
};

const defaultArticles = [
  {
    id: 1,
    category: 'ENGINEERING',
    date: 'FEB 19, 2026',
    title: 'Automating compliance checks in regulated environments',
    image: null,
    slug: 'automating-compliance-checks',
    gradient: 'teal',
  },
  {
    id: 2,
    category: 'ENGINEERING',
    date: 'FEB 19, 2026',
    title: 'Automating compliance checks in regulated environments',
    image: null,
    slug: 'automating-compliance-checks-2',
    gradient: 'gray',
  },
  {
    id: 3,
    category: 'ENGINEERING',
    date: 'FEB 19, 2026',
    title: 'Automating compliance checks in regulated environments',
    image: imgScreenshot,
    slug: 'automating-compliance-checks-3',
    gradient: 'green',
  },
];

function BlogResourcesSection({ 
  featuredPost = defaultFeaturedPost,
  articles = defaultArticles,
  categories = defaultCategories 
}) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <section className="blog-resources-section">
      <div className="blog-container">
        <div className="blog-featured-card">
          <div className="blog-featured-image">
            <span className="blog-featured-badge">FEATURED</span>
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>
          <div className="blog-featured-content">
            <h2 className="blog-featured-title">{featuredPost.title}</h2>
            <p className="blog-featured-date">{featuredPost.date}</p>
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
            <article key={article.id} className={`blog-article-card gradient-${article.gradient}`}>
              <div className="blog-article-header">
                <p className="blog-article-category">{article.category}</p>
                <p className="blog-article-date">{article.date}</p>
              </div>
              <h3 className="blog-article-title">{article.title}</h3>
              {article.image && (
                <div className="blog-article-image">
                  <img src={article.image} alt={article.title} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogResourcesSection;
