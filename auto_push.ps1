
while($true) {
    Clear-Host
    Write-Host "===============================================" -ForegroundColor Magenta
    Write-Host "   KHOTTA AI - GITHUB AUTO-SYNC SYSTEM v1.0   " -ForegroundColor White -BackgroundColor Magenta
    Write-Host "===============================================" -ForegroundColor Magenta
    Write-Host "Status: " -NoNewline; Write-Host "MONITORING ACTIVE" -ForegroundColor Cyan
    Write-Host "Scan Interval: 60 Seconds"
    Write-Host "Last Check: $(Get-Date -Format 'HH:mm:ss')"
    Write-Host "-----------------------------------------------"
    
    # Check for changes
    $changes = git status --porcelain
    
    if ($changes) {
        Write-Host "Detected changes in the following files:" -ForegroundColor Yellow
        git status --short
        Write-Host "-----------------------------------------------"
        Write-Host "Starting Git synchronization..." -ForegroundColor Green
        
        # Git operations
        git add .
        $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
        git commit -m "Auto-Sync: $timestamp [Automated Commit]"
        
        Write-Host "Pushing to remote repository..." -ForegroundColor Green
        git push
        
        Write-Host "SUCCESS: Workspace synced to GitHub at $timestamp" -ForegroundColor Black -BackgroundColor Green
    } else {
        Write-Host "RESULT: No changes found. Workspace is up-to-date." -ForegroundColor Gray
    }
    
    Write-Host "-----------------------------------------------"
    Write-Host "Next scan in 60 seconds... (Press Ctrl+C to stop)"
    
    # Sleep timer
    Start-Sleep -Seconds 60
}
