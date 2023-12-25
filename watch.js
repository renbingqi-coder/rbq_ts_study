// watch.js 
const chokidar = require('chokidar');
const { execSync } = require('child_process');
const deleteFolderRecursive = require('./prebuild.js');

// Initially delete the dist directory, compile the typescript files
deleteFolderRecursive('./dist');
execSync('tsc', { stdio: 'inherit' });

// Initialize watcher.
const watcher = chokidar.watch('src/**/*');

// Add event listeners.
watcher.on('change', (path) => {
  console.log(`File ${path} has been changed`);
  deleteFolderRecursive('./dist');
  execSync('tsc', { stdio: 'inherit' });
});