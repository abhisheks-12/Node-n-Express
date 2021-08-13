'use strict';
// Modules
// CommonJS , every file in node  is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./04_names.js');
const sayHi = require('./05_util.js');
const data = require('./06_alternativeFlavor.js');
require('./07_mind_grenade'); // -->>> dont need to save function into variable

sayHi('susan');
sayHi(names.jhon);
sayHi(names.peter);
