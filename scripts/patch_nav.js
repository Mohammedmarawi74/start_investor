const fs = require('fs');

// --- Sidebar ---
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');

// Find the last occurrence of fossil-fuels isNew /> and insert mining after it
const fossilLine = `icon={Flame} label="\u0642\u0637\u0627\u0639 \u0627\u0644\u0648\u0642\u0648\u062f \u0627\u0644\u0623\u062d\u0641\u0648\u0631\u064a"`;
const idx = sidebar.lastIndexOf(fossilLine);
const endOfLine = sidebar.indexOf('isNew />', idx) + 'isNew />'.length;
const miningNavItem = `\n                              <NavItem id="mining-dashboard" icon={Mountain} label="\u0642\u0637\u0627\u0639 \u0627\u0644\u062a\u0639\u062f\u064a\u0646 \u0648\u0627\u0644\u0645\u0639\u0627\u062f\u0646" active={activeTab === 'mining-dashboard'} onClick={() => setActiveTab?.('mining-dashboard')} isCollapsed={isCollapsed} isNew />`;
sidebar = sidebar.slice(0, endOfLine) + miningNavItem + sidebar.slice(endOfLine);
sidebar = sidebar.replace("'fossil-fuels-dashboard'].includes", "'fossil-fuels-dashboard', 'mining-dashboard'].includes");
fs.writeFileSync('components/Sidebar.tsx', sidebar, 'utf8');

// --- MobileMenu ---
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
const flameLine = `icon={Flame} label="\u0642\u0637\u0627\u0639 \u0627\u0644\u0648\u0642\u0648\u062f \u0627\u0644\u0623\u062d\u0641\u0648\u0631\u064a"`;
const mIdx = mobile.lastIndexOf(flameLine);
const mEnd = mobile.indexOf('isNew />', mIdx) + 'isNew />'.length;
const miningMobile = `\n                        <NavItem icon={Mountain} label="\u0642\u0637\u0627\u0639 \u0627\u0644\u062a\u0639\u062f\u064a\u0646 \u0648\u0627\u0644\u0645\u0639\u0627\u062f\u0646" active={activeTab === 'mining-dashboard'} onClick={() => handleNavigate('mining-dashboard')} isNew />`;

// Add Mountain import
mobile = mobile.replace("  Flame\n} from 'lucide-react';", "  Flame,\n  Mountain\n} from 'lucide-react';");
mobile = mobile.slice(0, mEnd) + miningMobile + mobile.slice(mEnd);
fs.writeFileSync('components/MobileMenu.tsx', mobile, 'utf8');

console.log('All patches applied successfully!');
