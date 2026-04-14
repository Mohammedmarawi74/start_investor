const fs = require('fs');
const path = require('path');

const mappingPath = path.join(__dirname, '../discovery_mapping.ts');
const swotDir = path.join(__dirname, 'swot');

// 1. Parse Mapping to know where each sector belongs
const mappingContent = fs.readFileSync(mappingPath, 'utf8');
const categoryRegex = /category:\s*"([^"]+)",\s*sectors:\s*\[([\s\S]*?)\]/g;
const sectorRegex = /id:\s*"([^"]+)"/g;

const sectorToCategory = {};
const categoryToFile = {};

let match;
while ((match = categoryRegex.exec(mappingContent)) !== null) {
    const categoryName = match[1];
    const sectorsBlock = match[2];
    const fileName = categoryName.replace(/ & /g, '_and_').replace(/, /g, '_').replace(/ /g, '_').replace(/-/g, '_') + '.json';
    
    categoryToFile[categoryName] = fileName;

    let sectorMatch;
    while ((sectorMatch = sectorRegex.exec(sectorsBlock)) !== null) {
        sectorToCategory[sectorMatch[1]] = categoryName;
    }
}

// 2. Scan and extract ALL sectors from existing files
const allSectorsFound = {};

const files = fs.readdirSync(swotDir).filter(f => f.endsWith('.json'));
files.forEach(file => {
    try {
        const filePath = path.join(swotDir, file);
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        const traverse = (obj) => {
            if (!obj || typeof obj !== 'object') return;
            
            // If it looks like a SWOT analysis
            if (obj.description !== undefined && obj.strengths) {
                // We need to find the ID. In the user's nested structure, it's usually the key.
                // But we'll just collect them and use the known IDs from mapping if we can match them.
                return; 
            }

            for (const key in obj) {
                if (sectorToCategory[key]) {
                    // Match! This is a sector ID
                    allSectorsFound[key] = obj[key];
                } else {
                    traverse(obj[key]);
                }
            }
        };

        traverse(content);
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});

// 3. Re-organize into correct files
const filesToUpdate = {};

for (const sectorId in allSectorsFound) {
    const category = sectorToCategory[sectorId];
    if (!category) continue;

    const fileName = categoryToFile[category];
    if (!filesToUpdate[fileName]) {
        filesToUpdate[fileName] = { category: category, sectors: {} };
    }
    filesToUpdate[fileName].sectors[sectorId] = allSectorsFound[sectorId];
}

// 4. Save
for (const fileName in filesToUpdate) {
    const filePath = path.join(swotDir, fileName);
    // Don't overwrite if we don't have all sectors? 
    // Actually, we should merge with existing if some sectors are missing in the sweep but exist in file.
    let existing = { category: filesToUpdate[fileName].category, sectors: {} };
    if (fs.existsSync(filePath)) {
        try {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (data.sectors) existing.sectors = data.sectors;
        } catch(e) {}
    }

    // Update with found sectors
    Object.assign(existing.sectors, filesToUpdate[fileName].sectors);
    
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
    console.log(`Fixed/Updated ${fileName}`);
}

console.log('Sanity Cleanup Complete.');
