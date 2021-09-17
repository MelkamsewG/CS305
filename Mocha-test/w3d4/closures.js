"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


//Filter inBetween
function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

//	Filter inArray
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10]))); // 1,2


function byField(fieldName) {

    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}


function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() { // shooter function
            console.log("I am shooter: " + i);
            return i; // should show its number
        };
        shooters.push(shooter);
    }

    return shooters;
}

//let army = makeArmy();

//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...