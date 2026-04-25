const fs = require('fs');

function updateIcons(content) {
  const match = content.match(/import {([\s\S]*?)} from 'lucide-react'/);
  if (match) {
    let icons = match[1].split(',').map(i => i.trim()).filter(i => i);
    const newIcons = ['Shirt', 'Milk']; // Shirt for Apparel, Milk for Non-alcoholic (anticipating)
    newIcons.forEach(icon => {
      if (!icons.includes(icon)) icons.push(icon);
    });
    // Deduplicate and sort could be nice but let's just keep it simple
    icons = [...new Set(icons)];
    const newImport = `import {\n  ${icons.join(',\n  ')}\n} from 'lucide-react'`;
    return content.replace(/import {[\s\S]*?} from 'lucide-react'/, newImport);
  }
  return content;
}

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('ApparelShoesDashboard')) {
    app = app.replace("import PaidContentDashboard from './components/PaidContentDashboard';", "import PaidContentDashboard from './components/PaidContentDashboard';\nimport ApparelShoesDashboard from './components/ApparelShoesDashboard';");
    app = app.replace("| 'paid-content-dashboard'>(() => {", "| 'paid-content-dashboard' | 'apparel-shoes-dashboard'>(() => {");
    app = app.replace("{activeTab === 'paid-content-dashboard' && 'المحتوى الرقمي والخدمات المدفوعة'}", "{activeTab === 'paid-content-dashboard' && 'المحتوى الرقمي والخدمات المدفوعة'}\n                         {activeTab === 'apparel-shoes-dashboard' && 'قطاع الملابس والأحذية'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'apparel-shoes-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <ApparelShoesDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
sidebar = updateIcons(sidebar);
if (!sidebar.includes('id="apparel-shoes-dashboard"')) {
    sidebar = sidebar.replace("'paid-content-dashboard'].includes", "'paid-content-dashboard', 'apparel-shoes-dashboard'].includes");
    let sidebarTarget = "<NavItem id=\"paid-content-dashboard\" icon={PlayCircle} label=\"المحتوى الرقمي والخدمات المدفوعة\" active={activeTab === 'paid-content-dashboard'} onClick={() => setActiveTab?.('paid-content-dashboard')} isCollapsed={isCollapsed} isNew />";
    let newSidebarItem = "\n                              <NavItem id=\"apparel-shoes-dashboard\" icon={Shirt} label=\"قطاع الملابس والأحذية\" active={activeTab === 'apparel-shoes-dashboard'} onClick={() => setActiveTab?.('apparel-shoes-dashboard')} isCollapsed={isCollapsed} isNew />";
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
mobile = updateIcons(mobile);
if (!mobile.includes('id="apparel-shoes-dashboard"')) {
    let mobileTarget = "<NavItem icon={PlayCircle} label=\"المحتوى الرقمي والخدمات المدفوعة\" active={activeTab === 'paid-content-dashboard'} onClick={() => handleNavigate('paid-content-dashboard')} isNew />";
    let newMobileItem = "\n                        <NavItem icon={Shirt} label=\"قطاع الملابس والأحذية\" active={activeTab === 'apparel-shoes-dashboard'} onClick={() => handleNavigate('apparel-shoes-dashboard')} isNew />";
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Apparel & Shoes dashboard.");
