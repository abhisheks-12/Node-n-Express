'use strict';

// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require  - function to use module (COMMON JS)
// modules - info about current modules
//  process - info about env where program being executed

console.log(__dirname);
console.log(__filename);

setInterval(()=>{
  console.log('Hello World');
},1000);

