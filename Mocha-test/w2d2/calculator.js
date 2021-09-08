"use strict";

//const calculator = {}; // implement this

let calculator = {
    sum() {
    return this.a + this.b;
    },
    mul() {
    return this.a * this.b;
    },
    read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
    }
    };
    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );

/* You need the module.exports when testing in node.  
Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so 
the export is after the definition */
module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests




"use strict"

exports.Accumulator = Accumulator;
exports.Calculator = Calculator;
/**
 * @returns {Calculator} this is a constructor function
 */

function Calculator(a, b) {
 //implement this
    this.a = a,
    this.b= b,
    this.sum = function(){
        return this.a + this.b
    },
    this.mul = function(){
        return this.a * this.b
    }
  }

  let test = new Calculator(2,3)
  console.log(test.mul())
 
