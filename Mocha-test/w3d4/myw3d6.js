"use strict"
// const abc = { a: 1, b: 2, add: function() { console.log("1+2 = 3?", this.a + this.b); } }
// abc.add();
// setTimeout(abc.add, 2000); //problem!
// setTimeout(abc.add.bind(abc), 2000); //works 
// setTimeout(function() { abc.add.call(abc) }, 2000); //works 
// setTimeout(function() { abc.add.apply(abc) }, 2000); //works


// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// }
// console.log(user.sayHi()); // Hello, John!  , undefined
//setTimeout(user.sayHi, 1000); // Hello, undefined!

//"use strict";
// function a() {
//     console.log(this);   
// }
// const b = {
//     dog: 'fido',
//     log: function() {
//         console.log(this);  
//     }
// }
// console.log(this); // {}  
// a();       // undefined
// b.log();
// let mylog = b.log;
// mylog();

// {}
// undefined
// {dog: 'fido', log: ƒ}
// undefined


// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
// setTimeout(function() { user.sayHi(); }, 1000);
// setTimeout(() => user.sayHi(), 1000);




// let user = {
//     firstName: "John"
// };

// function func(phrase) {
//     console.log(phrase + ', ' + this.firstName);
// }
// // bind this to user
// let funcUser = func.bind(user);
// funcUser("Hello"); // Hello, John



// function area() {
//     // console.log(this); //undefine_____________________________
//     console.log(this.side) //______________________________________
//     console.log(this.side * this.side);
// }
// const square1 = { side: 5, area: area };

// let sqrArea = area.bind(square1);
// sqrArea();
// console.log(area()); //________



// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(2, 3));

// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else if (n == 0) {
//         return 1;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
// console.log(pow(2, 5));

// function log() {
//     console.log("No Arguments");
// }

// function log(x) {
//     console.log("1 Argument: " + x);
// }

// function log(x, y) {
//     console.log("2 Arguments: " + x + ", " + y);
// }
//log();
// log(5);
//log(6, 7);

// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// const max1 = findMax(1, 123, 500, 115, 66, 88);
// const max2 = findMax(3, 6, 8);
// console.log(max1, max2);

// function sum(x, y, ...more) {
//     //"more" is array of all extra passed params
//     let total = x + y;
//     if (more.length > 0) {
//         for (let i = 0; i < more.length; i++) {
//             total += more[i];
//         }
//     }
//     console.log("Total: " + total);
//     return total;
// }
// sum(5, 5, 5);
// sum(6, 6, 6, 6, 6);

// let name = "John";

// function sayHi() {
//     console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); //  Hi, Pete


//function makeWorker() {
//     let name = "John";
//     return function() {
//         console.log(name);
//     };
// }
// let name = "Pete";
// // create a function
// let work = makeWorker();
// // call it
// work(); // what will it show?

// function b() {
//     function a() {
//         console.log(x);
//     }
//     const x = 10;
//     a();
// }
// const x = 20;
// b();   // 10


// function a() {
//     console.log(x); // consult 
//     // Global for x and print 20 
//     // from Global 
// }

// function b() {
//     const x = 10;
//     a(); // consult Global for a 
// }
// const x = 20;
// b(); // 20
// 9
// Global Env
// X = 20
// b = fn
// a = fn
// b() Env
// X = 10
// a() Env


// function sayHi() {
//     alert("Hi");
// }
// console.log(sayHi.name); // sayHi

// const abc = { a: 1, b: 2, add: function() { console.log("1+2 = 3?", this.a / this.b); } };
// abc.add(); //works 
//setTimeout(abc.add, 2000); //problem!
// console.log(setTimeout(abc.add.bind(abc), 2000)); //works 
// console.log(setTimeout(function() { abc.add.call(abc) }, 2000)); //works 
// console.log(setTimeout(function() { abc.add.apply(abc) }, 2000)); //works


// function a() {
//     console.log(this);
// }

// const b = {
//     dog: 'fido',
//     log: function() {
//         console.log(this);

//     }

// }
// console.log(this);
// a();
// b.log();
// let mylog = b.log;
// mylog();



// function foo() {
//     console.log(this);
// }
// const bob = {
//     log: function() {
//         console.log(this);
//     }
// };

// foo(); // undefined      foo() is called by global or window object 
// console.log(this); // {}      this is window in browser (‘global’ in node)
// bob.log();



// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(
//             //function(){console.log(this.title + ': ' + student); //error – ‘this’ is undefined (or window)
//             student => console.log(this.title + ': ' + student) //works as expected – ‘this’ from lexical environment, showList
//             //method
//         );
//     }
// };
// group.showList();
