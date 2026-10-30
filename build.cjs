const fs = require('node:fs');
const path = require('node:path');
const destination = path.join(__dirname, 'dist');
fs.mkdirSync(destination, { recursive: true });
for (const name of ['index.html', 'styles.css', 'script.js', 'favicon.svg', 'robots.txt']) fs.copyFileSync(path.join(__dirname, name), path.join(destination, name));
fs.cpSync(path.join(__dirname, 'assets'), path.join(destination, 'assets'), { recursive: true });
console.log('Site estático pronto em dist/');
