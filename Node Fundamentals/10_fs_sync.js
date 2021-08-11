// FS MODULE
// const fs = require('fs');
// fs.readFileSync();

// same by destructuring
const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/subfolder/text.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');
console.log(first, second);

writeFileSync(
  './content/result-sync.txt',
  `Here is result: ${first} and ${second}`,
  {flag:'a'}
);

console.log('done with next task');
console.log('starting the next week');