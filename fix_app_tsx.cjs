const fs = require('fs');
const content = fs.readFileSync('App.tsx', 'utf8');
const lines = content.split('\n');

// The error is around line 754
// We want to replace the broken block with a correct one.
// We look for the line containing <ToysDashboard /> and its surrounding chaos.

let newLines = [];
let skipped = false;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<ToysDashboard />') && !lines[i].includes('import')) {
        // We found the broken line.
        // It should have been preceded by a condition and succeeded by closing tags.
        // We will remove the broken lines (the dangling div/bracket) and insert the correct block.
        
        // Remove the previous line if it was just ')}' or similar if it belongs to the previous block
        // Actually, let's just replace the 3 lines directly if they match our pattern.
        
        newLines.push(`          {activeTab === 'toys-dashboard' && (`);
        newLines.push(`            <div className="animate-in slide-in-from-bottom-4 duration-700">`);
        newLines.push(`               <ToysDashboard />`);
        newLines.push(`            </div>`);
        newLines.push(`          )}`);
        
        // Skip the next two lines which are current dangling '</div>' and ')}'
        i += 2; 
    } else {
        newLines.push(lines[i]);
    }
}

fs.writeFileSync('App.tsx', newLines.join('\n'));
console.log('App.tsx fixed successfully.');
