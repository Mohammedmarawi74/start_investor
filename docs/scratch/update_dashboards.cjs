const fs = require('fs');
const path = require('path');

const dir = 'e:/start-investor/nnew-ui/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Dashboard.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update declaration
  content = content.replace(/React\.FC = \(\) =>/g, 'React.FC<any> = (props) =>');
  
  // Update template call
  content = content.replace(/<SectorDashboardTemplate {\.\.\.config} \/>/g, '<SectorDashboardTemplate {...config} {...props} />');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
