const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01'

export const sanityConfig = projectId && dataset ? { projectId, dataset, apiVersion } : null

export async function sanityFetch(query, params = {}) {
  if (!sanityConfig) return null

  const url = new URL(
    `https://${sanityConfig.projectId}.api.sanity.io/v${sanityConfig.apiVersion}/data/query/${sanityConfig.dataset}`
  )
  url.searchParams.set('query', query)
  for (const [key, value] of Object.entries(params)) {
    // Sanity API requires ALL parameters to be JSON-encoded (including strings)
    url.searchParams.set(`$${key}`, JSON.stringify(value))
  }

  try {
    const res = await fetch(url.toString())
    if (!res.ok) {
      console.error('Sanity Query Error:', { url: url.toString(), query, params, status: res.status })
      throw new Error(`Sanity query failed: ${res.status} ${res.statusText}`)
    }
    const json = await res.json()
    return json.result
  } catch (error) {
    if (error.message.includes('Sanity query failed')) throw error
    console.error('Network/Sanity error:', error)
    throw error
  }
}

export function sanityListen(query, params = {}, callback) {
  if (!sanityConfig) return () => { }

  const url = new URL(
    `https://${sanityConfig.projectId}.api.sanity.io/v${sanityConfig.apiVersion}/data/listen/${sanityConfig.dataset}`
  )
  url.searchParams.set('query', query)
  url.searchParams.set('includeResult', 'true')
  url.searchParams.set('visibility', 'query')

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, typeof value === 'string' ? value : JSON.stringify(value))
  }

  const es = new EventSource(url.toString())

  es.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)
      callback(data)
    } catch (err) {
      console.error('Error parsing Sanity listen event:', err)
    }
  }

  es.onerror = () => {
    // Real-time updates require a paid Sanity plan or specific CORS config
    // Silently fail - the blog works fine without live updates
    es.close()
  }

  return () => {
    es.close()
  }
}

export function sanityImageUrl(imageAssetRef, { width = 1600 } = {}) {
  if (!sanityConfig || !imageAssetRef) return null
  const ref = typeof imageAssetRef === 'string' ? imageAssetRef : imageAssetRef?._ref
  if (!ref || typeof ref !== 'string' || !ref.startsWith('image-')) return null

  // image-<assetId>-<width>x<height>-<ext>
  const [, assetId, dims, ext] = ref.split('-')
  if (!assetId || !ext) return null

  return `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${assetId}-${dims}.${ext}?w=${width}&auto=format`
}

