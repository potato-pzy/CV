import { useState, useEffect } from 'react'
import { sanityFetch, sanityConfig } from '../lib/sanity'

export default function SanityDebug() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [config, setConfig] = useState(null)

    useEffect(() => {
        setConfig(sanityConfig)

        async function testSanity() {
            try {
                console.log('SanityDebug: querying...')

                // Check specific types to find the right one
                const [blogCount, postCount, articleCount, blogPostCount] = await Promise.all([
                    sanityFetch(`count(*[_type == "blog"])`),
                    sanityFetch(`count(*[_type == "post"])`),
                    sanityFetch(`count(*[_type == "article"])`),
                    sanityFetch(`count(*[_type == "blogPost"])`)
                ])

                // Get raw docs to show _type explicitly
                const docs = await sanityFetch(`*[!(_id in path("_.**")) && !(_type match "system.*")][0...5]{_type, title}`)

                setData({
                    counts: { blog: blogCount, post: postCount, article: articleCount, blogPost: blogPostCount },
                    docs: docs || []
                })
            } catch (err) {
                console.error('Sanity Debug Error:', err)
                setError(err.message)
            }
        }

        testSanity()
    }, [])

    return (
        <div style={{ padding: '2rem', background: '#fff', color: '#000', minHeight: '100vh', fontFamily: 'monospace' }}>
            <h1>Sanity Debugger</h1>

            <h3>Configuration</h3>
            <pre style={{ background: '#eee', padding: '1rem' }}>{JSON.stringify(config, null, 2)}</pre>

            <h3>Status</h3>
            {error ? (
                <div style={{ color: 'red', border: '1px solid red', padding: '1rem', marginBottom: '1rem' }}>
                    <strong>Error:</strong> {error}
                </div>
            ) : (
                <div style={{ color: 'green', marginBottom: '1rem' }}>Connection appears OK</div>
            )}

            <h3>Schema Type Check</h3>
            <div style={{ background: '#e0f7fa', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
                <p><strong>_type == "blog":</strong> {data?.counts?.blog ?? '...'}</p>
                <p><strong>_type == "post":</strong> {data?.counts?.post ?? '...'}</p>
                <p><strong>_type == "article":</strong> {data?.counts?.article ?? '...'}</p>
                <p><strong>_type == "blogPost":</strong> {data?.counts?.blogPost ?? '...'}</p>
            </div>

            <h3>Raw Data Preview</h3>
            <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
                <pre>{JSON.stringify(data?.docs, null, 2)}</pre>
            </div>

            <h3>Troubleshooting</h3>
            <ul>
                <li>If <strong>Total Documents</strong> is 0: You might be looking at the wrong dataset, or it is empty.</li>
                <li>Check the <strong>Document Types Found</strong> list. Look for "post", "article", or "blog".</li>
                <li>If <strong>Error</strong>: Check CORS settings in Sanity (API &gt; CORS Origins). Add <code>http://localhost:5173</code>.</li>
            </ul>
        </div>
    )
}
