"use strict";

//const calculator = {}; // implement this

/**
 *  * @returns {Calculator} constructor function
 */
function Calculator() {
    this.setValue = function Calculator(a, b) {
            this.a = a;
            this.b = b;
        }
        /**
         * 
         * @returns{Number} sum;
         */
    this.sum = function() {
        return this.a + this.b;
    };

    /**
     * 
     * @returns {Number} multiplication;
     */
    this.mul = function() {
            return this.a * this.b;
        }
        /**
         * 
         * @returns {Number} subtraction;
         */
    this.sub = function() {
            return this.a - this.b
        }
        /**
         * 
         * @returns {Number} division;
         */
    this.div = function() {
        return this.a / this.b;
    }
};
module.exports = { Calculator };

/* You need the module.exports when testing in node.  
Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so 
the export is after the definition */
module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests