import https from 'https';

const projectId = '6n85rjvm';
const dataset = 'production';
// Fetch only the body to avoid truncation
const query = encodeURIComponent('*[_type == "post"][0]{body}');
const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            console.log(JSON.stringify(json.result, null, 2));
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
            console.log(data);
        }
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
