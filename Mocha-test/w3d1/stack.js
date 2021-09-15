"use strict"

// function funX(a, b) {
//     let c;
//     c = 5;
//     funY(a * c, "yes");
// }

// function funY(x, y) {
//     let z;
//     z = "I can see the sea";
//     console.log("What is on the stack here?");
// }

// function main() {
//     let a;
//     let b;
//     a = "Hello";
//     funX(3, a);
//     b = "World";
// }
// main();

// function pow(x, n) {
//     let result = 1;
//     // multiply result by x n times in the loop
//     for (let i = 1; i <= n; i++) {
//         result *= x;
//     }
//     //return result;
//     console.log(result);

// }
// pow(2, 3);


// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// //alert(fib(77));
// // fib(77); // will be extremely slow!

function findLengthRecursive(s) {
    if (s === "")
        return 0;
    else
        return 1 + findLengthRecursive(s.substr(1));
}
console.log(findLengthRecursive("Melkamu"));
alert(arr.from(0))