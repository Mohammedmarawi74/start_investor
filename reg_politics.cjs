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
if (!app.includes('PoliticsDashboard')) {
    app = app.replace("import InternationalDashboard from './components/InternationalDashboard';", "import InternationalDashboard from './components/InternationalDashboard';\nimport PoliticsDashboard from './components/PoliticsDashboard';");
    app = app.replace("| 'international-dashboard'>(() => {", "| 'international-dashboard' | 'politics-dashboard'>(() => {");
    app = app.replace("{activeTab === 'international-dashboard' && 'الشؤون الدولية والدول'}", "{activeTab === 'international-dashboard' && 'الشؤون الدولية والدول'}\n                         {activeTab === 'politics-dashboard' && 'السياسة والحكومة'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'politics-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <PoliticsDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx (New Data-Driven Logic)
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'politics-dashboard'")) {
    const newItem = "  { id: 'politics-dashboard', icon: Landmark, label: 'السياسة والحكومة' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx (New Data-Driven Logic)
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'politics-dashboard'")) {
    const newItem = "  { id: 'politics-dashboard', icon: Landmark, label: 'السياسة والحكومة' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Politics dashboard.");
