const fs = require('fs');
const path = require('path');

const dir = './src';
const images = [
  '/rohit_hero.jpg',
  '/rohit_bridal.jpg',
  '/rohit_rings.jpg',
  '/rohit_gold_bangles.jpg',
  '/rohit_earrings.jpg',
  '/rohit_storefront.jpg',
  '/rohit_everyday.jpg',
  '/rohit_karigar.jpg'
];

function walkDir(currentPath) {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const fullPath = path.join(currentPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let replaced = false;
      const regex = /https:\/\/images\.unsplash\.com\/[^\s"']+/g;
      if (regex.test(content)) {
        content = content.replace(regex, () => {
          replaced = true;
          return images[Math.floor(Math.random() * images.length)];
        });
        if (replaced) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated ${fullPath}`);
        }
      }
    }
  }
}

walkDir(dir);
console.log("Done replacing unsplash images.");
