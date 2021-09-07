"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { double, times100, myMap }; //add all of your function names here that you need for the node mocha tests


// Q #1
/**
 *@returns {number} double the input
 */
function double(number) {
    return 2 * number;
}

// Q #2
/**
 * @returns {number} 100 times the input
 */
function times100(number) {
    return 100 * number;
}

// Q #3a
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
//function myMap() {}
function myMap(testArray, double) {

    testArray = [1, 4, 9, 16];

    // pass a function to map

    const map1 = testArray.map(x => x * 2);

    console.log(map1);

    // expected output: Array [2, 8, 18, 32]
}

// Q #3b
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
//function myMap() {}
function myMap(testArray, times100) {

    testArray = [1, 4, 9, 16];

    // pass a function to map

    const map2 = testArray.map(x => x * 100);

    console.log(map2);

    // expected output: Array [100, 400, 900, 1600]
}

//Q #4
// Anonymous 
let testArray = [1, 4, 9, 16];
let myMap = function() { console.log(testArray.map(testArray * 3)) }

// Arrow function
let testArray = [1, 4, 9, 16];

console.log(testArray.map(testArray => testArray * 100));
// expected output: Array [100, 400, 900, 1600]