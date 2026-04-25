const fs = require('fs');
const path = require('path');

const mappingPath = path.join(__dirname, '../discovery_mapping.ts');
const swotDir = path.join(__dirname, 'swot');

if (!fs.existsSync(swotDir)) {
    fs.mkdirSync(swotDir, { recursive: true });
}

// Simple parser for DISCOVERY_MAPPING in discovery_mapping.ts
const content = fs.readFileSync(mappingPath, 'utf8');

// Use regex to extract categories and sectors
const categoryRegex = /category:\s*"([^"]+)",\s*sectors:\s*\[([\s\S]*?)\]/g;
const sectorRegex = /id:\s*"([^"]+)"/g;

let match;
while ((match = categoryRegex.exec(content)) !== null) {
    const categoryName = match[1];
    const sectorsBlock = match[2];
    
    const fileName = categoryName.replace(/ & /g, '_and_').replace(/, /g, '_').replace(/ /g, '_').replace(/-/g, '_') + '.json';
    const filePath = path.join(swotDir, fileName);

    const sectorIds = [];
    let sectorMatch;
    while ((sectorMatch = sectorRegex.exec(sectorsBlock)) !== null) {
        sectorIds.push(sectorMatch[1]);
    }

    let existingData = { category: categoryName, sectors: {} };
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (content && typeof content === 'object') {
                existingData.category = content.category || categoryName;
                existingData.sectors = content.sectors || {};
            }
        } catch (e) {
            console.error(`Error reading ${fileName}:`, e.message);
        }
    }

    sectorIds.forEach(id => {
        if (!existingData.sectors[id]) {
            existingData.sectors[id] = {
                description: "",
                strengths: [],
                weaknesses: [],
                opportunities: [],
                threats: [],
                insight: ""
            };
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');
    console.log(`Initialized/Updated ${fileName} with ${sectorIds.length} sectors.`);
}

console.log('Initialization complete.');
