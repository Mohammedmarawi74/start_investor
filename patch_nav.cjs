const fs = require('fs');

try {
    // --- Sidebar ---
    let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');

    // Add Mountain import
    sidebar = sidebar.replace("  Flame\n} from 'lucide-react';", "  Flame,\n  Mountain\n} from 'lucide-react';");
    // Some lines might use Flame,
    sidebar = sidebar.replace("  Flame,\n  Mountain\n} from 'lucide-react';", "  Flame,\n  Mountain\n} from 'lucide-react';"); // no-op if already replaced

    if (sidebar.indexOf('Mountain') === -1) {
       sidebar = sidebar.replace("  Flame\r\n} from 'lucide-react';", "  Flame,\r\n  Mountain\r\n} from 'lucide-react';");
    }

    const fossilId = 'id="fossil-fuels-dashboard"';
    const fossilIdx = sidebar.indexOf(fossilId);
    if (fossilIdx !== -1) {
        const endOfFossilLine = sidebar.indexOf('/>', fossilIdx) + 2;
        const miningNavItem = `\n                              <NavItem id="mining-dashboard" icon={Mountain} label="\\u0642\\u0637\\u0627\\u0639 \\u0627\\u0644\\u062A\\u0639\\u062F\\u064A\\u0646 \\u0648\\u0627\\u0644\\u0645\\u0639\\u0627\\u062F\\u0646" active={activeTab === 'mining-dashboard'} onClick={() => setActiveTab?.('mining-dashboard')} isCollapsed={isCollapsed} isNew />`;
        if (sidebar.indexOf('id="mining-dashboard"') === -1) {
            sidebar = sidebar.slice(0, endOfFossilLine) + miningNavItem + sidebar.slice(endOfFossilLine);
        }
    }

    sidebar = sidebar.replace("'fossil-fuels-dashboard'].includes", "'fossil-fuels-dashboard', 'mining-dashboard'].includes");
    fs.writeFileSync('components/Sidebar.tsx', sidebar, 'utf8');

    // --- MobileMenu ---
    let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
    
    // Add Mountain import
    mobile = mobile.replace("  Flame\n} from 'lucide-react';", "  Flame,\n  Mountain\n} from 'lucide-react';");
    if (mobile.indexOf('Mountain') === -1) {
       mobile = mobile.replace("  Flame\r\n} from 'lucide-react';", "  Flame,\r\n  Mountain\r\n} from 'lucide-react';");
    }

    const mFossil = `activeTab === 'fossil-fuels-dashboard'`;
    const mIdx = mobile.indexOf(mFossil);
    if (mIdx !== -1) {
        const mEnd = mobile.indexOf('/>', mIdx) + 2;
        const miningMobile = `\n                        <NavItem icon={Mountain} label="\\u0642\\u0637\\u0627\\u0639 \\u0627\\u0644\\u062A\\u0639\\u062F\\u064A\\u0646 \\u0648\\u0627\\u0644\\u0645\\u0639\\u0627\\u062F\\u0646" active={activeTab === 'mining-dashboard'} onClick={() => handleNavigate('mining-dashboard')} isNew />`;
        if (mobile.indexOf('handleNavigate(\'mining-dashboard\')') === -1) {
            mobile = mobile.slice(0, mEnd) + miningMobile + mobile.slice(mEnd);
        }
    }
    fs.writeFileSync('components/MobileMenu.tsx', mobile, 'utf8');

    console.log('All patches applied successfully!');
} catch(e) {
    console.error(e);
}
