'use strict';

// FS MODULE ---- Callback hell

const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/subfolder/text.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result);
  const first = result;
  readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(result);
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is result: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});

console.log('start next')