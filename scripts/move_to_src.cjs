const fs = require('fs');
const path = require('path');

const root = 'e:/start-investor/nnew-ui';
const src = path.join(root, 'src');

const toSrc = [
    'components',
    'hooks',
    'services',
    'types',
    'utils',
    'data',
    'App.tsx',
    'index.tsx',
    'render.tsx',
    'index.css',
    'types.ts',
    'discovery_mapping.ts'
];

if (!fs.existsSync(src)) fs.mkdirSync(src, { recursive: true });

toSrc.forEach(item => {
    const oldPath = path.join(root, item);
    const newPath = path.join(src, item);
    if (fs.existsSync(oldPath)) {
        console.log(`Moving ${item} to src/`);
        fs.renameSync(oldPath, newPath);
    }
});

// Move and rename easy_mode
const easyModeOld = path.join(root, 'easy_mode');
const easyModeNew = path.join(src, 'features/easy-mode');
if (fs.existsSync(easyModeOld)) {
    if (!fs.existsSync(path.dirname(easyModeNew))) fs.mkdirSync(path.dirname(easyModeNew), { recursive: true });
    console.log('Moving easy_mode to src/features/easy-mode');
    fs.renameSync(easyModeOld, easyModeNew);
}
