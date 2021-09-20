"use strict"
// let name = "John";

// function sayHi() {
//     alert("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?
// function makeWorker() {
//     let name = "John";
//     return function() {
//         alert(name);
//     };
// }
//let name = "Pete";
// create a function
//let work = makeWorker();
// call it
//work(); // what will it show? “John" (name where created) or “Pete" (name where called)?



function funA(a, n) {
    let something;
    something = "something.";
    funB(something, n);
}

function funB(a, b) {
    let thing;
    thing = "a thing.";
    console.log("What is on the stack when we're here?");
}

function main() {
    let test;
    let n;
    test = "Hello";
    n = 5;
    funA(n, 10);
}
main();


let name = "John";

function sayHi() {
    alert("Hi, " + name);
}
name = "Pete";
sayHi(); // what will it show: "John" or "Pete"?
l