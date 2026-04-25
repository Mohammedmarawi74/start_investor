$file = 'e:\start-investor\nnew-ui\components\Sidebar.tsx'
$content = [System.IO.File]::ReadAllText($file)

$oldLine = '                              <NavItem id="fossil-fuels-dashboard" icon={Flame} label="قطاع الوقود الأحفوري" active={activeTab === ' + "'fossil-fuels-dashboard'} onClick={() => setActiveTab?.('fossil-fuels-dashboard')} isCollapsed={isCollapsed} isNew />"
$newBlock = $oldLine + "`r`n" + '                              <NavItem id="mining-dashboard" icon={Mountain} label="قطاع التعدين والمعادن" active={activeTab === ' + "'mining-dashboard'} onClick={() => setActiveTab?.('mining-dashboard')} isCollapsed={isCollapsed} isNew />"

$content = $content.Replace($oldLine, $newBlock)

$oldActive = "'fossil-fuels-dashboard'].includes"
$newActive = "'fossil-fuels-dashboard', 'mining-dashboard'].includes"
$content = $content.Replace($oldActive, $newActive)

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done"
