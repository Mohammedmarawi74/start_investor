const fs = require('fs');

let sidebarPath = 'components/Sidebar.tsx';
let sidebarParams = fs.readFileSync(sidebarPath, 'utf8');
sidebarParams = sidebarParams.replace(/\\u0642\\u0637\\u0627\\u0639 \\u0627\\u0644\\u062A\\u0639\\u062F\\u064A\\u0646 \\u0648\\u0627\\u0644\\u0645\\u0639\\u0627\\u062F\\u0646/g, 'قطاع التعدين والمعادن');
fs.writeFileSync(sidebarPath, sidebarParams, 'utf8');

let mobilePath = 'components/MobileMenu.tsx';
let mobileParams = fs.readFileSync(mobilePath, 'utf8');
mobileParams = mobileParams.replace(/\\u0642\\u0637\\u0627\\u0639 \\u0627\\u0644\\u062A\\u0639\\u062F\\u064A\\u0646 \\u0648\\u0627\\u0644\\u0645\\u0639\\u0627\\u062F\\u0646/g, 'قطاع التعدين والمعادن');
fs.writeFileSync(mobilePath, mobileParams, 'utf8');

console.log('Fixed labels!');
