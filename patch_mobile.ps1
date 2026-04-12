$file = 'e:\start-investor\nnew-ui\components\MobileMenu.tsx'
$content = [System.IO.File]::ReadAllText($file)

$oldLine = '                        <NavItem icon={FlaskConical} label="قطاع الصناعات الكيماوية" active={activeTab === ' + "'chemical-industry-dashboard'} onClick={() => handleNavigate('chemical-industry-dashboard')} isNew />`r`n" + '                        <NavItem icon={Flame} label="قطاع الوقود الأحفوري" active={activeTab === ' + "'fossil-fuels-dashboard'} onClick={() => handleNavigate('fossil-fuels-dashboard')} isNew />"
$newBlock = $oldLine + "`r`n" + '                        <NavItem icon={Mountain} label="قطاع التعدين والمعادن" active={activeTab === ' + "'mining-dashboard'} onClick={() => handleNavigate('mining-dashboard')} isNew />"

$content = $content.Replace($oldLine, $newBlock)
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done"
