'use strict';


const path = require('path');

const filePath = path.join('content','subfolder','test.txt');
console.log(filePath);

const  base = path.basename(filePath);
console.log(base);

const absoulte = path.resolve(__filename,'content','subfolder','text.txt');
console.log(absoulte);