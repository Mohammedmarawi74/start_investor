const fs = require('fs');
const path = require('path');

function registerSector(routeId, componentName, arabicName, iconName) {
    console.log(`Registering ${componentName} ...`);
    
    // 1. App.tsx
    let appPath = path.join(__dirname, 'App.tsx');
    let app = fs.readFileSync(appPath, 'utf8');
    
    // Add import
    if (!app.includes(`import ${componentName} from`)) {
        app = app.replace(
            /import \{ DashboardFooter \}/,
            `import ${componentName} from './components/${componentName}';\nimport { DashboardFooter }`
        );
    }
    
    // Add state type (robustly string replacement)
    if (!app.includes(`'${routeId}'`)) {
        app = app.replace(
            /\>\(\(\) \=\> \{/,
            ` | '${routeId}'>(() => {`
        );
    }
    
    // Add Breadcrumb
    if (!app.includes(`{activeTab === '${routeId}'`)) {
        app = app.replace(
            /(                         \{activeTab === 'brand-identity')/,
            `                         {activeTab === '${routeId}' && '${arabicName}'}\n$1`
        );
    }
    
    // Add route body
    if (!app.includes(`<${componentName} />`)) {
        const routeBlock = `          {activeTab === '${routeId}' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <${componentName} />
            </div>
          )}\n`;
        app = app.replace(
            /(\s*\{\/\* Global Dashboard Footer)/,
            `\n${routeBlock}$1`
        );
    }
    fs.writeFileSync(appPath, app, 'utf8');

    // 2. Sidebar.tsx
    let sidebarPath = path.join(__dirname, 'components', 'Sidebar.tsx');
    let sidebar = fs.readFileSync(sidebarPath, 'utf8');
    
    // Add icon
    if (!sidebar.includes(iconName + ',') && !sidebar.includes(iconName + '\n') && !sidebar.includes(iconName + '\r')) {
        sidebar = sidebar.replace(
            /\n\} from 'lucide-react';/,
            `,\n  ${iconName}\n} from 'lucide-react';`
        );
    }
    
    // Add NavItem (insert before closing div of market discovery)
    if (!sidebar.includes(`id="${routeId}"`)) {
        const navItem = `                              <NavItem id="${routeId}" icon={${iconName}} label="${arabicName}" active={activeTab === '${routeId}'} onClick={() => setActiveTab?.('${routeId}')} isCollapsed={isCollapsed} isNew />\n                           </div>`;
        // replace the closing div
        sidebar = sidebar.replace(
            /                           \<\/div\>\s*\)\}\s*\<\/^\>/.source.replace('^', ''), // wait, standard replace is easier
            function() { return arguments[0]; } // fallback
        );
        // Better:
        const searchTarget = "                           </div>\r\n                        )}\r\n                     </>";
        const searchTargetLf = "                           </div>\n                        )}\n                     </>";
        
        if (sidebar.includes("                           </div>\n                        )}\n                     </>")) {
             sidebar = sidebar.replace("                           </div>\n                        )}\n                     </>", navItem.replace(/\r/g, '') + "\n                        )}\n                     </>");
        } else if (sidebar.includes("                           </div>\r\n                        )}\r\n                     </>")) {
             sidebar = sidebar.replace("                           </div>\r\n                        )}\r\n                     </>", `                              <NavItem id="${routeId}" icon={${iconName}} label="${arabicName}" active={activeTab === '${routeId}'} onClick={() => setActiveTab?.('${routeId}')} isCollapsed={isCollapsed} isNew />\r\n                           </div>\r\n                        )}\r\n                     </>`);
        }
    }
    
    // Add to active group
    if (!sidebar.includes(`'${routeId}'`)) {
        sidebar = sidebar.replace(
            /\]\.includes\(activeTab \|\| ''\)\} onClick=\{\(\) \=\> setIsMarketDiscoveryOpen/,
            `, '${routeId}'].includes(activeTab || '')} onClick={() => setIsMarketDiscoveryOpen`
        );
    }
    fs.writeFileSync(sidebarPath, sidebar, 'utf8');

    // 3. MobileMenu.tsx
    let mobilePath = path.join(__dirname, 'components', 'MobileMenu.tsx');
    let mobile = fs.readFileSync(mobilePath, 'utf8');
    
    // Add icon
    if (!mobile.includes(iconName + ',') && !mobile.includes(iconName + '\n') && !mobile.includes(iconName + '\r')) {
        mobile = mobile.replace(
            /\n\} from 'lucide-react';/,
            `,\n  ${iconName}\n} from 'lucide-react';`
        );
    }
    
    // Add NavItem
    if (!mobile.includes(`handleNavigate('${routeId}')`)) {
        const mNavItem = `<NavItem icon={${iconName}} label="${arabicName}" active={activeTab === '${routeId}'} onClick={() => handleNavigate('${routeId}')} isNew />`;
        
        if (mobile.includes("                      </div>\n                    )}")) {
            mobile = mobile.replace("                      </div>\n                    )}", `                        ${mNavItem}\n                      </div>\n                    )}`);
        } else if (mobile.includes("                      </div>\r\n                    )}")) {
             mobile = mobile.replace("                      </div>\r\n                    )}", `                        ${mNavItem}\r\n                      </div>\r\n                    )}`);
        }
    }
    fs.writeFileSync(mobilePath, mobile, 'utf8');

    console.log(`Successfully registered ${componentName}!`);
}

const args = process.argv.slice(2);
if(args.length === 4) {
    registerSector(args[0], args[1], args[2], args[3]);
} else {
    console.log("Usage: node registerSector.cjs [routeId] [componentName] [arabicName] [iconName]");
}
