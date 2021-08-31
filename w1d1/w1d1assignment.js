'use strict';
/*  Q #1  1. Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500 
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500
*/

//         let salaried = prompt('are you salaried? enter yes or no');
//         let sales = prompt('Enter sales in $');

//         if (salaried === "yes") {
//             if (sales < 300) {

//                 console.log("Commission: " + 0.00 * sales);
//             } else if (sales <= 500) {
//                 console.log("Commission: " + 0.02 * sales);
//             } else {
//                 console.log("Commission: " + 0.03 * sales);
//             }
//         } else if (salaried === "no") {
//             if (sales > 300) {
//                 console.log("Commission: " + 0.02 * sales);
//             } else if (sales > 500) {
//                 console.log("Commission: " + 0.03 * sales);
//             } else {
//                 console.log("Commission: " + 0.00 * sales);
//             }

//         }

/* Q # 2. Write a loop that continually prompts for age until you enter age older than 18
 Write both while and do while versions.
  */

//  do {

//     let age = prompt('Enter your age : );
// } while (!age > 18);
// prompt('enter age');

// let age = prompt("Enter your age : ");
// while (!age > 18) {
//     prompt('enter age')
//     console.log(age);
// }

/* Q #3. Make a defining table and program to print out the balance of a savings account that 
compounds interest monthly. Prompt the user for the 
• initial amount 
• annual interest rate
• number of years to compound
 */
let initialAmount = prompt('Enter initial amount: ');
let annualInterestRate = prompt("Enter annual interest rate: ");
let numberOfYears = prompt("Enter number of years: ");

function savingsAccountBalance(amount, rate, years) {
    accountBalance = amount * (1 + rate / 12) ** (12 * years);
    console.log("Your accountBalance is: " + accountBalance);
}
savingsAccountBalance(initialAmount, annualInterestRate, numberOfYears);

/* Write code to print the number patterns on the console
12345
12345
12345
12345
12345

1 
22 
333 
4444 
55555

55555 
4444 
333 
22 
1
*/

// for (let i = 0; i < 5; i++) {
//     console.log("12345");
// }

// let str = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         str += i + "";
//     }
//     str += "\n";
// }
// console.log(str);

// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         str += i + "";
//     }
//     str += "\n";
// }

/*
Q #5. Cost of House Down Payment 
Make a defining table and then write a program that calculates down payment for a home loan based 
on following rules. Your program should prompt for the cost and write the down payment amount to 
the console.
Cost of House                  Down Payment 
$0 to less than 50K            5% of the cost
$50K to less than 100K         $1000 + 10% of (cost - $50K)
$100K to less than 200K        $2000 + 15% of (cost - $100K)
$200K and above                $5000 + 10% of (cost - $200K)
*/
// let cost = prompt("Enter cost of the house: ");
// let downPayment;
// if (cost > 200000) {
//     downPayment = 5000 + 0.1 * (cost - 200000);
//     console.log("downpayment amount : " + downPayment);
// } else if (cost > 100000) {
//     downPayment = 2000 + 0.15 * (cost - 100000);
//     console.log("downpayment amount : " + downPayment);
// } else if (cost > 50000) {
//     downPayment = 1000 + 0.1 * (cost - 50000);
//     console.log("downpayment amount : " + downPayment);
// } else if (cost >= 0) {
//     downPayment = 0.05 * cost;
//     console.log("downpayment amount : " + downPayment);
// } else {
//     console.log("enter the cost of the house ");
// }

/*
Q # 6. Write a JavaScript program to prompt for an integer and 
compute the sum of all the digits.
Input   Output
123     6
102     3
8       8
*/

function sumDigits(n) {
    return (--n % 9) + 1;
}
sumDigits();