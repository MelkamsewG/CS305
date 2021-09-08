"use strict"
/**
 * 
 * @param {*} currentValue 
 * @param {*} increment 
 * @returns {Accumulator} constructor function
 */
function Accumulator(currentValue, increment) {
    this.currentValue = currentValue;
    this.increment = increment;
    /**
     * 
     * @returns current values+ increment
     */
    this.accumulate = function() {
            return this.currentValue += this.increment;
        };
        /**
         * 
         * @returns the current values
         */
    this.report = function() {
        return this.currentValue;
    };
}
// let sample = new Accumulator(5,10)
//  console.log(sample)
module.exports = { Accumulator };