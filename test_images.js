import https from 'https';

const projectId = '6n85rjvm';
const dataset = 'production';

// Get the full post to see image structure
const query = `*[_type == "post"][0]{
  cardImage,
  image,
  "cardImageRef": cardImage.asset._ref,
  "imageRef": image.asset._ref
}`;

const url = new URL(
    `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}`
);
url.searchParams.set('query', query);

console.log('Fetching image structure...\n');

https.get(url.toString(), (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            console.log(JSON.stringify(json.result, null, 2));
        } catch (e) {
            console.error('Parse error:', e.message);
            console.log('Raw:', data);
        }
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
