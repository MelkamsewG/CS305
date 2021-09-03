"use strict"

module.exports = { convertFahrenheit };

function convertFahrenheit(fahrenheit) {

    let tempInCelsius = (fahrenheit - 32) * 5 / 9;
    console.log(tempInCelsius.toFixed(2));
}
console.log(convertFahrenheit(39));


describe('temprature convesion', function() {
    it("temperature in celsius", function() {

        assert.equal(convertFahrenheit(32), 0);

    });

});


function distance(x1, y1, x2, y2) {
    let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(d.toFixed(2));
}
console.log(distance(0, 0, 5, 5));

describe('calcularte distance', function() {
    it("takes x,y coordinates", function() {
        assert.equal(distance(0, 0, 3, 4), 5);
    })
})

function calcDownPayment(cost) {
    let downPayment;
    if (cost > 200000) {
        downPayment = 5000 + 0.1 * (cost - 200000);
        console.log("downpayment amount : " + downPayment);
    } else if (cost >= 100000) {
        downPayment = 7500 + 0.15 * (cost - 100000);
        console.log("downpayment amount : " + downPayment);
    } else if (cost >= 50000) {
        downPayment = 2500 + 0.1 * (cost - 50000);
        console.log("downpayment amount : " + downPayment);
    } else if (cost >= 0) {
        downPayment = 0.05 * cost;
        console.log("downpayment amount : " + downPayment);
    } else {
        console.log("enter the cost of the house ");
    }
}
console.log("expect: 7500", calcDownPayment(100000));

describe('compute down payment', function() {
    it("uses the rate to calculate down payment from cost of the house", function() {
        assert.equal(calcDownPayment(100000, 0.15), 7500);
        it("uses the rate to calculate down payment from cost of the house", function() {
            assert.equal(calcDownPayment(50000, 0.15), 2500);
        })

    });
});