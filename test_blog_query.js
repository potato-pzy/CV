import https from 'https';

const projectId = '6n85rjvm';
const dataset = 'production';

// Simulate what SanityBlogPost does
const slug = 'the-agentic-ai-blueprint'; // URL param
const currentSlug = slug.startsWith('/blog/') ? slug : `/blog/${slug}`;

console.log('Testing with currentSlug:', currentSlug);

const query = `*[_type == "post" && slug.current == $currentSlug][0]{
  _id,
  title,
  subtitle,
  category,
  publishedAt,
  _createdAt,
  "slug": slug.current,
  "featuredImageRef": image.asset->_ref,
  author->{name, title},
  body
}`;

const url = new URL(
    `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}`
);
url.searchParams.set('query', query);
url.searchParams.set('$currentSlug', JSON.stringify(currentSlug)); // FIX: Must JSON-encode!

console.log('URL:', url.toString());
console.log('\n');

https.get(url.toString(), (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        console.log('Status:', res.statusCode);
        try {
            const json = JSON.parse(data);
            if (json.result) {
                console.log('Success! Post title:', json.result.title);
            } else {
                console.log('Result:', json);
            }
        } catch (e) {
            console.error('Parse error:', e.message);
            console.log('Raw response:', data);
        }
    });
}).on('error', (err) => {
    console.error('Request error:', err.message);
});
