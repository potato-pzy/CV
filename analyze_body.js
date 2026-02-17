import https from 'https';

const projectId = '6n85rjvm';
const dataset = 'production';
const query = encodeURIComponent('*[_type == "post"][0]{body}');
const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (!json.result || !json.result.body) {
                console.log("No body found");
                return;
            }
            const types = new Set();
            const styles = new Set();
            const marks = new Set();

            json.result.body.forEach(block => {
                types.add(block._type);
                if (block.style) styles.add(block.style);
                if (block.children) {
                    block.children.forEach(c => {
                        if (c.marks) c.marks.forEach(m => marks.add(m));
                    });
                }
            });

            console.log("Types:", [...types]);
            console.log("Styles:", [...styles]);
            console.log("Marks:", [...marks]);

        } catch (e) {
            console.error('Error parsing JSON:', e.message);
        }
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
