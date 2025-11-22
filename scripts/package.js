#!/usr/bin/env node
// Create offline download package (platform-neutral)

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 Creating offline package...\n');

const publicDir = path.join(process.cwd(), 'public');
const downloadDir = path.join(process.cwd(), 'static', 'downloads');
const zipFile = path.join(downloadDir, 'radical-politics-course.zip');

// Ensure downloads directory exists
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// Remove old ZIP if it exists
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

// Check if public directory exists
if (!fs.existsSync(publicDir)) {
  console.error('✗ Error: public/ directory not found. Run "npm run build" first.');
  process.exit(1);
}

try {
  // Platform detection for ZIP command
  const isWindows = process.platform === 'win32';
  
  if (isWindows) {
    // Windows: Use PowerShell Compress-Archive
    console.log('   Platform: Windows (PowerShell)');
    const psCommand = `
      $tempDir = 'temp-package';
      Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue;
      New-Item -ItemType Directory -Path $tempDir | Out-Null;
      Get-ChildItem -Path 'public' | Where-Object { $_.Name -ne 'downloads' } | Copy-Item -Destination $tempDir -Recurse -Force;
      Compress-Archive -Path "$tempDir/*" -DestinationPath '${zipFile.replace(/\\/g, '\\\\')}' -Force;
      Remove-Item -Recurse -Force $tempDir;
    `.replace(/\n/g, ' ');
    
    execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });
  } else {
    // Unix/Linux/Mac: Use zip command
    console.log('   Platform: Unix/Linux/Mac (zip)');
    const tempDir = 'temp-package';
    
    // Create temp directory
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    fs.mkdirSync(tempDir);
    
    // Copy files excluding downloads
    const items = fs.readdirSync(publicDir);
    items.forEach(item => {
      if (item !== 'downloads') {
        const src = path.join(publicDir, item);
        const dest = path.join(tempDir, item);
        execSync(`cp -r "${src}" "${dest}"`, { stdio: 'pipe' });
      }
    });
    
    // Create ZIP
    execSync(`cd ${tempDir} && zip -r "../${zipFile}" . -q`, { stdio: 'pipe' });
    
    // Clean up
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  
  // Get file size
  const stats = fs.statSync(zipFile);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  console.log(`\n✓ Package created: ${sizeMB} MB`);
  console.log(`✓ Location: static/downloads/radical-politics-course.zip\n`);
  
} catch (error) {
  console.error('✗ Error creating package:', error.message);
  process.exit(1);
}
