'use strict';

// const { NOTIMP } = require("dns");

// npm global command ,comes with node
// npm --version

// local dependency - use it only in particular project
// npm i <packageName>

// Global dependency - sue it any project
// npm install -g <packageName>

// package.json - manifest file (store important info aboutprokject / package)
// npm init (step by step ress enter oto skip)
// npm init -y (everything default)
// npm install
// npm uninstall <package>


// npm start ---> to start programme
// npm run dev ->>> to run

const loadlash = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = loadlash.flattenDeep(items);
console.log(newItems);
console.log('Hello');