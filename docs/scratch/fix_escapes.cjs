const fs = require('fs'); 
const p = 'e:/start-investor/nnew-ui/components/ProblemOpportunityEngine.tsx'; 
let c = fs.readFileSync(p, 'utf8'); 
c = c.replace(/\\\$/g, '$').replace(/\\`/g, '`'); 
fs.writeFileSync(p, c);
