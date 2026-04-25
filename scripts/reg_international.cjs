const fs = require('fs');

function updateIcons(content) {
  const match = content.match(/import {([\s\S]*?)} from 'lucide-react'/);
  if (match) {
    let icons = match[1].split(',').map(i => i.trim()).filter(i => i);
    const newIcons = ['Map']; 
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
if (!app.includes('InternationalDashboard')) {
    app = app.replace("import EconomyDashboard from './components/EconomyDashboard';", "import EconomyDashboard from './components/EconomyDashboard';\nimport InternationalDashboard from './components/InternationalDashboard';");
    app = app.replace("| 'economy-dashboard'>(() => {", "| 'economy-dashboard' | 'international-dashboard'>(() => {");
    app = app.replace("{activeTab === 'economy-dashboard' && 'الاقتصاد والمؤشرات الكلية'}", "{activeTab === 'economy-dashboard' && 'الاقتصاد والمؤشرات الكلية'}\n                         {activeTab === 'international-dashboard' && 'الشؤون الدولية والدول'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'international-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <InternationalDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
sidebar = updateIcons(sidebar);
if (!sidebar.includes('id="international-dashboard"')) {
    sidebar = sidebar.replace("'economy-dashboard'].includes", "'economy-dashboard', 'international-dashboard'].includes");
    let sidebarTarget = "<NavItem id=\"economy-dashboard\" icon={Landmark} label=\"الاقتصاد والمؤشرات الكلية\" active={activeTab === 'economy-dashboard'} onClick={() => setActiveTab?.('economy-dashboard')} isCollapsed={isCollapsed} isNew />";
    let newSidebarItem = "\n                              <NavItem id=\"international-dashboard\" icon={Map} label=\"الشؤون الدولية والدول\" active={activeTab === 'international-dashboard'} onClick={() => setActiveTab?.('international-dashboard')} isCollapsed={isCollapsed} isNew />";
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
mobile = updateIcons(mobile);
if (!mobile.includes('id="international-dashboard"')) {
    let mobileTarget = "<NavItem icon={Landmark} label=\"الاقتصاد والمؤشرات الكلية\" active={activeTab === 'economy-dashboard'} onClick={() => handleNavigate('economy-dashboard')} isNew />";
    let newMobileItem = "\n                        <NavItem icon={Map} label=\"الشؤون الدولية والدول\" active={activeTab === 'international-dashboard'} onClick={() => handleNavigate('international-dashboard')} isNew />";
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered International dashboard.");
