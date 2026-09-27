const fs = require('fs');
const file = 'src/data/showcaseItems.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/"Diamond"/g, '"Silver"');
content = content.replace(/'Diamond'/g, "'Silver'");
content = content.replace(/"Diamond Collection"/g, '"Silver Collection"');
content = content.replace(/"Platinum & Solitaire"/g, '"Pure Sterling Silver"');
fs.writeFileSync(file, content);
console.log("Replaced Diamond with Silver in showcaseItems.js");
