import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogPost from './BlogPost'
import { sanityConfig, sanityFetch, sanityImageUrl, sanityListen } from '../lib/sanity'
import { formatBlogDate } from '../lib/dateFormat'

function renderPortableText(blocks) {
  if (!Array.isArray(blocks)) return null

  return blocks.map((block, i) => {
    if (!block) return null
    const key = block._key || i

    // Handle Images
    if (block._type === 'image') {
      const imageUrl = sanityImageUrl(block.asset, { width: 1200 })
      if (!imageUrl) return null
      return (
        <figure key={key} className="my-8">
          <img src={imageUrl} alt={block.alt || ''} className="w-full rounded-lg" />
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    }

    // Handle Text Blocks
    if (block._type === 'block') {
      const children = (block.children || []).map((span, idx) => {
        // Handle simple text spans with marks
        if (span._type === 'span') {
          let text = span.text
          if (span.marks && span.marks.includes('strong')) {
            return <strong key={idx}>{text}</strong>
          }
          if (span.marks && span.marks.includes('em')) {
            return <em key={idx}>{text}</em>
          }
          return <span key={idx}>{text}</span>
        }
        return null
      })

      switch (block.style) {
        case 'h1': return <h1 key={key} className="text-4xl font-bold mt-12 mb-6 text-white">{children}</h1>
        case 'h2': return <h2 key={key} className="text-3xl font-bold mt-10 mb-5 text-white">{children}</h2>
        case 'h3': return <h3 key={key} className="text-2xl font-semibold mt-8 mb-4 text-white">{children}</h3>
        case 'h4': return <h4 key={key} className="text-xl font-medium mt-6 mb-3 text-white">{children}</h4>
        case 'blockquote':
          return <blockquote key={key} className="border-l-4 border-accent pl-4 italic my-6 text-gray-300">{children}</blockquote>
        case 'normal':
        default:
          return <p key={key} className="mb-4 leading-relaxed text-gray-300">{children}</p>
      }
    }

    // Handle Lists
    if (block._type === 'list') {
      const items = (block.items || []).map((item, idx) => (
        <li key={idx} className="mb-2">{item.children?.map(c => c.text).join('')}</li>
      ))
      if (block.listItem === 'number') return <ol key={key} className="list-decimal pl-6 mb-6">{items}</ol>
      return <ul key={key} className="list-disc pl-6 mb-6">{items}</ul>
    }

    return null
  })
}

function SanityBlogPost() {
  const { slug } = useParams()
  const [state, setState] = useState({ status: 'loading', post: null, prev: null, next: null })

  useEffect(() => {
    let cancelled = false

    async function load() {
      if (!sanityConfig) {
        setState({ status: 'missing-config', post: null, prev: null, next: null })
        return
      }

      setState((s) => ({ ...s, status: 'loading' }))

      try {
        // Sanity stores slugs with /blog/ prefix (e.g. "/blog/my-post")
        // But the URL param might just be "my-post"
        // Normalize it here in JS instead of GROQ to avoid syntax errors
        const currentSlug = slug.startsWith('/blog/') ? slug : `/blog/${slug}`

        const postQuery = `*[_type == "post" && slug.current == $currentSlug][0]{
          _id,
          title,
          subtitle,
          category,
          publishedAt,
          _createdAt,
          "slug": slug.current,
          "featuredImageRef": image.asset._ref,
          author->{name, title},
          body
        }`

        const post = await sanityFetch(postQuery, { currentSlug })
        if (cancelled) return

        if (!post) {
          setState({ status: 'not-found', post: null, prev: null, next: null })
          return
        }

        const pivot = post.publishedAt || post._createdAt
        const [prev, next] = await Promise.all([
          sanityFetch(
            `*[_type == "post" && defined(slug.current) && coalesce(publishedAt, _createdAt) < $pivot]
              | order(coalesce(publishedAt, _createdAt) desc)[0]{title,"slug":slug.current}`,
            { pivot }
          ),
          sanityFetch(
            `*[_type == "post" && defined(slug.current) && coalesce(publishedAt, _createdAt) > $pivot]
              | order(coalesce(publishedAt, _createdAt) asc)[0]{title,"slug":slug.current}`,
            { pivot }
          )
        ])

        if (cancelled) return

        // Fix slugs for prev/next
        if (prev && !prev.slug.startsWith('/blog/')) prev.slug = `/blog/${prev.slug}`
        if (next && !next.slug.startsWith('/blog/')) next.slug = `/blog/${next.slug}`

        setState({ status: 'ready', post, prev, next })
      } catch (err) {
        console.error('Failed to load Sanity blog post:', err)
        if (cancelled) return
        setState({ status: 'error', post: null, prev: null, next: null })
      }
    }

    load()

    const currentSlug = slug.startsWith('/blog/') ? slug : `/blog/${slug}`
    const subscription = sanityListen(
      `*[_type == "post" && slug.current == $currentSlug][0]`,
      { currentSlug },
      (update) => {
        if (update.result) {
          console.log('Real-time update received:', update.result)
          setState(prev => ({
            ...prev,
            post: { ...prev.post, ...update.result },
            status: 'ready'
          }))
        }
      }
    )

    return () => {
      cancelled = true
      subscription()
    }
  }, [slug])

  if (state.status === 'missing-config') {
    return (
      <BlogPost
        category="INSIGHTS"
        date=""
        title="Sanity is not configured"
        subtitle="Set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET to load blog content."
        content={<p>Missing Sanity configuration.</p>}
        prevPost={null}
        nextPost={null}
      />
    )
  }

  if (state.status !== 'ready') {
    return (
      <BlogPost
        category="INSIGHTS"
        date=""
        title={state.status === 'not-found' ? 'Post not found' : 'Loading…'}
        subtitle={state.status === 'error' ? 'Failed to load this post from Sanity.' : ''}
        content={null}
        prevPost={null}
        nextPost={null}
      />
    )
  }

  const postDate = formatBlogDate(state.post.publishedAt || state.post._createdAt)
  const imageUrl = sanityImageUrl(state.post.featuredImageRef, { width: 1800 }) || null

  return (
    <BlogPost
      category={(state.post.category || 'INSIGHTS').toString().toUpperCase()}
      date={postDate}
      title={state.post.title}
      subtitle={state.post.subtitle || ''}
      author={state.post.author || null}
      image={imageUrl}
      content={renderPortableText(state.post.body || [])}
      prevPost={state.prev ? { ...state.prev, slug: state.prev.slug } : null}
      nextPost={state.next ? { ...state.next, slug: state.next.slug } : null}
    />
  )
}

export default SanityBlogPost

