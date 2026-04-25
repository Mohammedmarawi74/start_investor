const fs = require('fs');
const path = require('path');

const swotDir = path.join(__dirname, 'swot');
const updateFile = path.join(__dirname, 'swot_update.json');

/**
 * This script allows you to batch update SWOT data.
 * Provide a JSON in data/swot_update.json with the following format:
 * {
 *   "sector-id": {
 *     "description": "...",
 *     "strengths": [{ "text": "..." }],
 *     "weaknesses": [...],
 *     "opportunities": [...],
 *     "threats": [...],
 *     "insight": "..."
 *   },
 *   ...
 * }
 */

const importSwot = () => {
    if (!fs.existsSync(updateFile)) {
        console.error('Error: data/swot_update.json not found.');
        return;
    }

    let updates;
    try {
        updates = JSON.parse(fs.readFileSync(updateFile, 'utf8'));
    } catch (e) {
        console.error('Error parsing data/swot_update.json:', e.message);
        return;
    }

    const swotFiles = fs.readdirSync(swotDir).filter(f => f.endsWith('.json'));
    const sectorToCategoryFile = {};

    // Map each sector ID to its file
    swotFiles.forEach(file => {
        const filePath = path.join(swotDir, file);
        try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (content.sectors) {
                Object.keys(content.sectors).forEach(id => {
                    sectorToCategoryFile[id] = file;
                });
            }
        } catch (e) {
            console.error(`Error reading ${file}:`, e.message);
        }
    });

    const categoriesToSave = new Set();
    const sectorIds = Object.keys(updates);

    sectorIds.forEach(id => {
        const fileName = sectorToCategoryFile[id];
        if (!fileName) {
            console.warn(`Warning: Sector ID "${id}" not found in any SWOT category file. Skipping.`);
            return;
        }

        const filePath = path.join(swotDir, fileName);
        const categoryData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        categoryData.sectors[id] = updates[id];
        fs.writeFileSync(filePath, JSON.stringify(categoryData, null, 2), 'utf8');
        categoriesToSave.add(fileName);
        console.log(`Updated sector "${id}" in ${fileName}`);
    });

    if (categoriesToSave.size > 0) {
        console.log(`\nImport complete. Updated ${sectorIds.length} sectors across ${categoriesToSave.size} files.`);
        console.log('Running sync_swot.cjs to update registry...');
        require('./sync_swot.cjs');
    } else {
        console.log('No updates were performed.');
    }
};

importSwot();
