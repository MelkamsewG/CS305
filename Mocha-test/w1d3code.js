/*
Q #1
 */
"use strict";

function computeSalesCommission(salaried, sales) {

    if (salaried == true) {
        if (sales < 300) {

            console.log("Commission: " + 0.00 * sales);
        } else if (sales <= 500) {
            console.log("Commission: " + 0.02 * sales);
        } else {
            console.log("Commission: " + 0.03 * sales);
        }
    } else if (salaried == false) {
        if (sales > 300) {
            console.log("Commission: " + 0.02 * sales);
        } else if (sales > 500) {
            console.log("Commission: " + 0.03 * sales);
        } else {
            console.log("Commission: " + 0.00 * sales);
        }
    }
}
console.log("expect: 8", computeSalesCommission(true, 400));
console.log("expect: 8", computeSalesCommission(false, 600));

/*
Q #2
*/
function savingsAccountBalance(amount, rate, years) {
    let accountBalance = amount * Math.pow((1 + rate / 12), (rate * years / 12));
    console.log("Your accountBalance is: " + accountBalance.toFixed(2));
}
console.log("expect: 165.72", savingsAccountBalance(100, 10, 1));

/*
Q #3
*/

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
console.log("expect: 7500", calcDownPayment(100000))


/*
Q # 4
*/
function convertFahrenheit(fahrenheit) {

    let tempInCelsius = (fahrenheit - 32) * 5 / 9;
    console.log(tempInCelsius.toFixed(2));
}
console.log(convertFahrenheit(39));

/*
Q #5
*/

function distance(x1, y1, x2, y2) {
    let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(d.toFixed(2));
}
console.log(distance(0, 0, 5, 5));