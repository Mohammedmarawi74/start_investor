const fs = require('fs');

function updateIcons(content) {
  const match = content.match(/import {([\s\S]*?)} from 'lucide-react'/);
  if (match) {
    let icons = match[1].split(',').map(i => i.trim()).filter(i => i);
    const newIcons = ['Landmark']; 
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
if (!app.includes('EconomyDashboard')) {
    app = app.replace("import NonAlcoholicBeveragesDashboard from './components/NonAlcoholicBeveragesDashboard';", "import NonAlcoholicBeveragesDashboard from './components/NonAlcoholicBeveragesDashboard';\nimport EconomyDashboard from './components/EconomyDashboard';");
    app = app.replace("| 'non-alcoholic-beverages-dashboard'>(() => {", "| 'non-alcoholic-beverages-dashboard' | 'economy-dashboard'>(() => {");
    app = app.replace("{activeTab === 'non-alcoholic-beverages-dashboard' && 'المشروبات غير الكحولية'}", "{activeTab === 'non-alcoholic-beverages-dashboard' && 'المشروبات غير الكحولية'}\n                         {activeTab === 'economy-dashboard' && 'الاقتصاد والمؤشرات الكلية'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'economy-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <EconomyDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
sidebar = updateIcons(sidebar);
if (!sidebar.includes('id="economy-dashboard"')) {
    sidebar = sidebar.replace("'non-alcoholic-beverages-dashboard'].includes", "'non-alcoholic-beverages-dashboard', 'economy-dashboard'].includes");
    let sidebarTarget = "<NavItem id=\"non-alcoholic-beverages-dashboard\" icon={Coffee} label=\"المشروبات غير الكحولية\" active={activeTab === 'non-alcoholic-beverages-dashboard'} onClick={() => setActiveTab?.('non-alcoholic-beverages-dashboard')} isCollapsed={isCollapsed} isNew />";
    let newSidebarItem = "\n                              <NavItem id=\"economy-dashboard\" icon={Landmark} label=\"الاقتصاد والمؤشرات الكلية\" active={activeTab === 'economy-dashboard'} onClick={() => setActiveTab?.('economy-dashboard')} isCollapsed={isCollapsed} isNew />";
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
mobile = updateIcons(mobile);
if (!mobile.includes('id="economy-dashboard"')) {
    let mobileTarget = "<NavItem icon={Coffee} label=\"المشروبات غير الكحولية\" active={activeTab === 'non-alcoholic-beverages-dashboard'} onClick={() => handleNavigate('non-alcoholic-beverages-dashboard')} isNew />";
    let newMobileItem = "\n                        <NavItem icon={Landmark} label=\"الاقتصاد والمؤشرات الكلية\" active={activeTab === 'economy-dashboard'} onClick={() => handleNavigate('economy-dashboard')} isNew />";
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Economy dashboard.");
