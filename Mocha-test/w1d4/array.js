"use strict";

/* You need the module.exports when testing in node. Comment it out when you send your file to the browser
 */

module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams };

//  Q\ #1  find maxOfThree

function maxOfThree(a, b, c) {
    let max = Math.max(a, b, c);
    return max;
}

//  Q #2 addition of array element
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Print out the total to the console
// console.log(sum([1, 2, 3, 4]));

// Q #3 multiplication of array elements
function multiply(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product = (product * numbers[i]);
    }
    return product;
}
// Print out the total to the console
// console.log(multiply([1, 2, 3, 4]));

/* Q #4
Write a function findLongestWord() that takes an array of words and returns the length of 
the longest one.
*/
function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Q #5a
function reverseArray(array) {

    let array2 = [];

    for (let i = array.length - 1; i >= 0; i--) {
        array2.push(array[i]);
    }
    return array2;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));



// Q #5b
// function reverseArrayInPlace(arr) {
//     let reversed = [];
//     for (let i = 0; i < arr.length; i++) {
//         reversed.push((arr[arr.length - 1 - i]));
//     }
//     return reversed;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));


function reverseArrayInPlace(array) {
    let reversedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArr.push(array[i]);

    }
    for (let i = 0; i > reversedArr.length; i++) {

        array.push(reversedArr[i]);
    }
    return reversedArr;
}

/*
Q #6
*/
function scoreExams(studentAnswers, correctAnswers) {
    let studentScore = [];
    for (let singleAnswore of studentAnswers) {
        let answer = 0;
        for (let i = 0; i < singleAnswore.length; i++) {
            if (singleAnswore[i] === correctAnswers[i])

                answer++;
        }
        studentScore.push(answer)

    }
    return studentScore;
}