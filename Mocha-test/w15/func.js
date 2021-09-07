'use strict';

// function A() {
//     console.log("A is called");
//     console.log("Before B is called");
//     B();
//     console.log("After B is called")
// }

// function B() {
//     console.log("B is called");
//     console.log("Before C is called");
//     C();
//     console.log("After C is called");
// }

// function C() {
//     console.log("C is called");
// }
// A();
// console.log("After A is called");
/*
C:\Program Files\nodejs\node.exe .\func.js
A is called
Before B is called
B is called
Before C is called
C is called
After C is called
After B is called
After A is called
*/

// function funA(a, n) {
//     let something;
//     something = "something.";
//     funB(something, n);
// }

// function funB(a, b) {
//     let thing;
//     thing = "a thing.";
//     console.log("What is on the stack when we're here?");
// }

// function main() {
//     let test;
//     let n;
//     test = "Hello";
//     n = 5;
//     funA(n, 10);
// }
// main();           
// What is on the stack when we're here?

// function funX(a, b) {
//     let c;
//     c = 5;
//     funY(a * c, "yes");
// }

// function funY(x, y) {
//     let z;
//     z = "I can see the sea";
//     console.log("What is on the stack here?");
// }

// function main() {
//     let a;
//     let b;
//     a = "Hello";
//     funX(3, a);
//     b = "World";
// }
// main();
// What is on the stack here?

// let testArray = [1, 4, 9, 16];

// console.log(testArray.map(testArray => testArray * 100));


// let testArray = [1, 4, 9, 16];
// let myFun = function() { console.log(testArray.map(testArray * 100)) }

// myFun();

function sayHi(John) {
    alert(`Hello, ${John}`);
}