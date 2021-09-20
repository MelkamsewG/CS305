"use strict"

/*    Complete the following tasks from The JavaScript Language book.
Chapter: Advanced working with functions
Section: Closure */

/* Q • Does afunction pickup latest changes ?
The function sayHi uses an external variable name.When the
function runs, which value is it
going to use ?  */

let name = "John";

function sayHi() {
    alert("Hi, " + name);
}
name = "Pete";
sayHi(); // what will it show: reference error;


/*Q. •Which variables are available ?

The function makeWorker below makes another
function and returns it.That new function can
be called from somewhere else .
Will it have access to the outer variables from its creation place, 
or the invocation place, or both ?  */

function makeWorker() {
    let name = "Pete";
    return function() {
        alert(name);
    };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work(); // what will it show?   Pete


/*  • Are counters independent?
        Here we make two counters: counter and counter2 using the same makeCounter
        function.
        Are they independent? What is the second counter going to show? 0,1 or 2,3 or something
        else?   */

function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter2()); // 0
alert(counter2()); //1

//  Answer The answer: 0,1.
//  Functions counter and counter2 are created by different invocations of
//  makeCounter .
//  So they have independent outer Lexical Environments, each one has its own count .

/*Q  • Counter object
    Here a counter object is made with the help of the constructor function.
    Will it work? What will it show?  */

function Counter() {
    let count = 0;
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}
let counter = new Counter();
alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1
//   Answer:   1, 2, 1


/*Q  • Function in if
 Look at the code. What will be the result of the call at the last line? */
let phrase = "Hello";
if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}
sayHi(); //  The result is an error.
// The function sayHi is declared inside the if , 
// so it only lives inside it. There is no
// sayHi outside. 


/* Q • Sum with closures
        
        Write function sum that works like this: sum(a)(b) = a+b .
        Yes, exactly this way, using double parentheses (not a mistype).
        For instance: */
sum(1)(2) = 3
sum(5)(-1) = 4

// Answer 		
function sum(a) {
    return function(b) {
        return a + b; // takes "a" from the outer lexical environment
    };
}
alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4




/* Q • Is variable visible?
What will be the result of this code?  */
let x = 1;

function func() {
    console.log(x); // 1
    let x = 2;
}
func();


// Q • Filter through function
//      Filter inBetween
function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// Filter inArray
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10]))); // 1,2


//Q•   Sort by field

// We’ ve got an array of objects to sort:

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
// The usual way to do that would be:
// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)

users.sort((a, b) => a.age > b.age ? 1 : -1);

// make it less verbose as follows

users.sort(byField('name'));
users.sort(byField('age'));

/*instead of writing a
function, just put byField(fieldName).
Write the
function byField that can be used
for that.  */

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

/*•
Army of functions
For makeArmy replace the inner
function with this code(it slightly simplifies the Mocha test):  */
let shooter = function() {
    console.log("I am shooter ", idx);
    return idx;
};