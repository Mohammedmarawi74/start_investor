const fs = require('fs');
const path = require('path');

const swotDir = path.join(__dirname, 'swot');
const files = fs.readdirSync(swotDir).filter(f => f.endsWith('.json'));

const emptySectors = [];
const filledSectors = [];

files.forEach(file => {
    const content = JSON.parse(fs.readFileSync(path.join(swotDir, file), 'utf8'));
    let fileFilled = 0;
    let fileEmpty = 0;
    if (content.sectors) {
        Object.keys(content.sectors).forEach(id => {
            const data = content.sectors[id];
            if (!data.description || data.description.trim() === "") {
                emptySectors.push({ id, category: content.category, file });
                fileEmpty++;
            } else {
                filledSectors.push({ id, category: content.category, file });
                fileFilled++;
            }
        });
    }
    console.log(`${file}: ${fileFilled} filled, ${fileEmpty} empty.`);
});

console.log('--- EMPTY SECTORS ---');
console.log(JSON.stringify(emptySectors, null, 2));
console.log(`\nSummary: ${filledSectors.length} filled, ${emptySectors.length} empty. Total: ${filledSectors.length + emptySectors.length}`);
