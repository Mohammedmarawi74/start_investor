const fs = require('fs');
const path = require('path');

// Read discovery_mapping.ts
const mappingPath = path.join(__dirname, 'discovery_mapping.ts');
const mappingContent = fs.readFileSync(mappingPath, 'utf8');

// Parse discovery_mapping.ts to extract all sector IDs (looking for { label: "...", id: "..." })
const mappingIds = new Set();
const mappingRegex = /id:\s*"([^"]+)"/g;
let match;
while ((match = mappingRegex.exec(mappingContent)) !== null) {
  mappingIds.add(match[1]);
}

// Read DiscoveryCenter.tsx
const centerPath = path.join(__dirname, 'components', 'DiscoveryCenter.tsx');
const centerContent = fs.readFileSync(centerPath, 'utf8');

// Parse DiscoveryCenter.tsx to extract all sector IDs
const centerIds = new Set();
const centerRegex = /id:\s*'([^']+)'/g;
let match2;
while ((match2 = centerRegex.exec(centerContent)) !== null) {
  centerIds.add(match2[1]);
}

console.log('='.repeat(80));
console.log('COMPARISON: discovery_mapping.ts vs DiscoveryCenter.tsx');
console.log('='.repeat(80));
console.log(`\ndiscovery_mapping.ts sectors: ${mappingIds.size}`);
console.log(`DiscoveryCenter.tsx sectors: ${centerIds.size}`);

// Find IDs in mapping but not in DiscoveryCenter
const inMappingNotInCenter = [...mappingIds].filter(id => !centerIds.has(id));
console.log(`\n${'-'.repeat(80)}`);
console.log(`IN discovery_mapping.ts BUT NOT in DiscoveryCenter.tsx: ${inMappingNotInCenter.length}`);
console.log(`${'-'.repeat(80)}`);
if (inMappingNotInCenter.length > 0) {
  inMappingNotInCenter.forEach((id, i) => console.log(`  ${i + 1}. ${id}`));
}

// Find IDs in DiscoveryCenter but not in mapping
const inCenterNotInMapping = [...centerIds].filter(id => !mappingIds.has(id));
console.log(`\n${'-'.repeat(80)}`);
console.log(`IN DiscoveryCenter.tsx BUT NOT in discovery_mapping.ts: ${inCenterNotInMapping.length}`);
console.log(`${'-'.repeat(80)}`);
if (inCenterNotInMapping.length > 0) {
  inCenterNotInMapping.forEach((id, i) => console.log(`  ${i + 1}. ${id}`));
}

console.log(`\n${'='.repeat(80)}`);
if (inMappingNotInCenter.length === 0 && inCenterNotInMapping.length === 0) {
  console.log('✅ PERFECT MATCH! Both files have identical sector IDs.');
} else {
  console.log('❌ MISMATCH! Files need to be synchronized.');
}
console.log(`${'='.repeat(80)}\n`);
