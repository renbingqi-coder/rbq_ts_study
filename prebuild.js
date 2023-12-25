// prebuild.js
const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(directory) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file, index) => {
      const curPath = path.join(directory, file);
      if (fs.lstatSync(curPath).isDirectory()) { 
        // recurse on the child directory
        deleteFolderRecursive(curPath);
      } else { 
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    // delete the directory itself
    fs.rmdirSync(directory);
  }
};

module.exports = deleteFolderRecursive;