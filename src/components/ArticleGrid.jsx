import ArticleCard from './ArticleCard'
import './ArticleGrid.css'

function ArticleGrid() {
  const officeWorkspaceImageUrl = `${import.meta.env.BASE_URL}office-workspace.png`

  const articles = [
    {
      category: 'AI ENGINEERING',
      date: 'FEBRUARY, 2026',
      title: 'Automating compliance checks in regulated environments',
      gradient: 'linear-gradient(146.77deg, rgba(0, 140, 86, 1) 66.97%, rgba(7, 25, 32, 1) 100%)',
      backgroundImage: null,
      backgroundBlend: null
    },
    {
      category: 'AI ENGINEERING',
      date: 'FEBRUARY, 2026',
      title: 'Automating compliance checks in regulated environments',
      gradient: 'linear-gradient(146.77deg, rgba(166, 216, 191, 1) 66.97%, rgba(0, 0, 0, 1) 100%)',
      backgroundImage: null,
      backgroundBlend: null
    },
    {
      category: 'AI ENGINEERING',
      date: 'FEBRUARY, 2026',
      title: 'Automating compliance checks in regulated environments',
      gradient: 'linear-gradient(197.89deg, rgba(164, 237, 63, 1) 49.6%, rgba(0, 0, 0, 1) 119.26%)',
      backgroundImage: officeWorkspaceImageUrl,
      backgroundBlend: 'hard-light'
    }
  ]

  return (
    <div className="articleGridPage">
      <div className="articleGrid">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            category={article.category}
            date={article.date}
            title={article.title}
            gradient={article.gradient}
            backgroundImage={article.backgroundImage}
            backgroundBlend={article.backgroundBlend}
          />
        ))}
      </div>
    </div>
  )
}

export default ArticleGrid
