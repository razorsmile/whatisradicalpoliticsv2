#!/usr/bin/env node
// Clean build artifacts

const fs = require('fs');
const path = require('path');

const dirsToRemove = ['public', 'resources'];
const filesToRemove = ['.hugo_build.lock'];

console.log('🧹 Cleaning build artifacts...');

dirsToRemove.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`   Removed: ${dir}/`);
  }
});

filesToRemove.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`   Removed: ${file}`);
  }
});

console.log('✓ Clean complete\n');
