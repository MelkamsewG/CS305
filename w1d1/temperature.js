"use strict";
let prompt = require('prompt-sync')();
let tempInCelsius = prompt('enter the temp');
let tempInFahrenehit = 9 / 5 * tempInCelsius + 32;
console.log(tempInFahrenehit);