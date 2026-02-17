import https from 'https';

const projectId = '6n85rjvm';
const dataset = 'production';

// Show all image-related fields
const query = `*[_type == "post"][0]{
  _id,
  title,
  cardImage,
  image,
  mainImage,
  featuredImage
}`;

const url = new URL(
    `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}`
);
url.searchParams.set('query', query);

console.log('Checking all image fields in your post:\n');

https.get(url.toString(), (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            const post = json.result;

            console.log('Post Title:', post.title);
            console.log('\nImage Fields:');
            console.log('- cardImage:', post.cardImage ? '✓ exists' : '✗ missing');
            console.log('- image:', post.image ? '✓ exists' : '✗ missing');
            console.log('- mainImage:', post.mainImage ? '✓ exists' : '✗ missing');
            console.log('- featuredImage:', post.featuredImage ? '✓ exists' : '✗ missing');

            if (post.cardImage) {
                console.log('\ncardImage alt text:', post.cardImage.alt);
            }
            if (post.image) {
                console.log('image alt text:', post.image.alt);
            }

        } catch (e) {
            console.error('Parse error:', e.message);
        }
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
