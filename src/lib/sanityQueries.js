import { sanityFetch, sanityImageUrl } from './sanity'
import { formatInsightMonthYear } from './dateFormat'

export async function fetchLatestBlogCards(limit = 12) {
  const query = `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit]{
    _id,
    title,
    category,
    "gradient": cardGradient,
    publishedAt,
    _createdAt,
    "slug": slug.current,
    "featuredImageRef": cardImage.asset._ref
  }`

  console.log('Fetching latest blog cards with query:', query)
  const posts = await sanityFetch(query, { limit })
  console.log('Sanity fetch result:', posts)
  if (!posts) {
    console.warn('No posts returned from Sanity')
    return null
  }

  return posts.map((post) => {
    const date = post.publishedAt || post._createdAt

    // Handle specific logic for slug that might already include /blog/
    let slug = post.slug;
    if (!slug.startsWith('/blog/')) {
      slug = `/blog/${slug}`;
    }

    return {
      id: post._id,
      category: (post.category || 'INSIGHTS').toString().toUpperCase(),
      date: formatInsightMonthYear(date),
      title: post.title,
      slug: slug,
      gradient: post.gradient || 'linear-gradient(135deg, #008C56 0%, #071920 100%)',
      backgroundImage: sanityImageUrl(post.featuredImageRef, { width: 900 }) || null
    }
  })
}
