const fs = require('fs');

function updateIcons(content) {
  const match = content.match(/import {([\s\S]*?)} from 'lucide-react'/);
  if (match) {
    let icons = match[1].split(',').map(i => i.trim()).filter(i => i);
    const newIcons = ['Shirt', 'Coffee']; 
    newIcons.forEach(icon => {
      if (!icons.includes(icon)) icons.push(icon);
    });
    icons = [...new Set(icons)];
    const newImport = `import {\n  ${icons.join(',\n  ')}\n} from 'lucide-react'`;
    return content.replace(/import {[\s\S]*?} from 'lucide-react'/, newImport);
  }
  return content;
}

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('NonAlcoholicBeveragesDashboard')) {
    app = app.replace("import ApparelShoesDashboard from './components/ApparelShoesDashboard';", "import ApparelShoesDashboard from './components/ApparelShoesDashboard';\nimport NonAlcoholicBeveragesDashboard from './components/NonAlcoholicBeveragesDashboard';");
    app = app.replace("| 'apparel-shoes-dashboard'>(() => {", "| 'apparel-shoes-dashboard' | 'non-alcoholic-beverages-dashboard'>(() => {");
    app = app.replace("{activeTab === 'apparel-shoes-dashboard' && 'قطاع الملابس والأحذية'}", "{activeTab === 'apparel-shoes-dashboard' && 'قطاع الملابس والأحذية'}\n                         {activeTab === 'non-alcoholic-beverages-dashboard' && 'المشروبات غير الكحولية'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'non-alcoholic-beverages-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <NonAlcoholicBeveragesDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
sidebar = updateIcons(sidebar);
if (!sidebar.includes('id="non-alcoholic-beverages-dashboard"')) {
    sidebar = sidebar.replace("'apparel-shoes-dashboard'].includes", "'apparel-shoes-dashboard', 'non-alcoholic-beverages-dashboard'].includes");
    let sidebarTarget = "<NavItem id=\"apparel-shoes-dashboard\" icon={Shirt} label=\"قطاع الملابس والأحذية\" active={activeTab === 'apparel-shoes-dashboard'} onClick={() => setActiveTab?.('apparel-shoes-dashboard')} isCollapsed={isCollapsed} isNew />";
    let newSidebarItem = "\n                              <NavItem id=\"non-alcoholic-beverages-dashboard\" icon={Coffee} label=\"المشروبات غير الكحولية\" active={activeTab === 'non-alcoholic-beverages-dashboard'} onClick={() => setActiveTab?.('non-alcoholic-beverages-dashboard')} isCollapsed={isCollapsed} isNew />";
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
mobile = updateIcons(mobile);
if (!mobile.includes('id="non-alcoholic-beverages-dashboard"')) {
    let mobileTarget = "<NavItem icon={Shirt} label=\"قطاع الملابس والأحذية\" active={activeTab === 'apparel-shoes-dashboard'} onClick={() => handleNavigate('apparel-shoes-dashboard')} isNew />";
    let newMobileItem = "\n                        <NavItem icon={Coffee} label=\"المشروبات غير الكحولية\" active={activeTab === 'non-alcoholic-beverages-dashboard'} onClick={() => handleNavigate('non-alcoholic-beverages-dashboard')} isNew />";
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Non-alcoholic Beverages dashboard.");
