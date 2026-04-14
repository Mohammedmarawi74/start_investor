const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../components/DashboardRouter.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// 1. Get all imported names
const imports = new Set();
const importRegex = /import\s+([\s\S]+?)\s+from/g;
let match;
while ((match = importRegex.exec(content)) !== null) {
    const importPart = match[1].replace(/[\{\}]/g, '').split(',').map(s => s.trim());
    importPart.forEach(p => {
        if (p.includes(' as ')) {
            imports.add(p.split(' as ')[1].trim());
        } else {
            imports.add(p);
        }
    });
}

// 2. Get all components used in renderContent
const usedComponents = new Set();
// Look for <ComponentName ...
const componentTagRegex = /<([A-Z][A-Za-z0-9]+)/g;
while ((match = componentTagRegex.exec(content)) !== null) {
    usedComponents.add(match[1]);
}

// 3. Compare
const baseComponents = ['Fragment', 'React']; // and other built-ins or standard imports we don't care about
const missing = [];
usedComponents.forEach(comp => {
    if (!imports.has(comp) && !baseComponents.includes(comp)) {
        missing.push(comp);
    }
});

console.log('--- MISSING IMPORTS ---');
console.log(missing);
