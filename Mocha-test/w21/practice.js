"use strict";
/*eslint-disable*/
let user = {
    name: "john",
    age: 30
};
// let aa = "comuted";
// user[9]
console.log(user.name);
console.log(user.age);

/*Create 3 objects, student1, student2, student3
➢ property studentId : s101, s102, s103 respectively
➢ property quiz answers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
➢ push the students into an array, quiz
➢ write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and
returns an object that has properties with the names of each studentId and the value of the property will be
their score on the quiz (one point for each correct answer)
➢ expect { s101: 3, s102: 2, s103: 3 }*/
const student1 = { studentId: s101, quizAnswer: [1, 1, 2, 4] };
const student2 = { studentTd: s102, quizAnswer: [2, 1, 2, 2] };
const student3 = { studentTd: s103, quizAnswer: [3, 1, 3, 4] };

let quiz = [];
quiz.push(student1);
quiz.push(student2);
quiz.push(student3);

function gradeQuiz(quiz, correctAnswers) {
    let result = {};
    for (let student of quiz) {
        let score = 0;
        console.log(student, student.studentId)
        if (eachAnswer)
    }
}

function caclAverage(gradeReport) {
    let sum = 0;
    count = 0;
    for (let studentId in gradeReport) {
        console.log(studentId, gradeReport[])
    }

}
///////////////////////////////////////////////
let fruit = "apple";
let bag = {
    [fruit + "computer"]: 5
};
console.log(bag)
    ////////////////////////////////////////////////
const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
};
for (let key in numbers) {

    console.log(key); //one,two,three,four
    console.log(numbers[key]); //1,22,333,444
    //console.log(key,numbers.key);
}


let a = {
    name: "Malik"
};
let b = a;
a.name = "Melkau";
console.log(a.name); //luwam
let x = { l: 1, m: 2 };
let n = x;
console.log("n=x =", x == n, x === x);
true, true
let y = { l: 1, m: 2 };
console.log("x and y =,", x == y, x === y); //false,false
///////////////////////////////////////////////////
//interlinked object
function marry(woman, man) {
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman
    }
};
let family = marry({ name: "fm" }, { name: "mw" })
console.log(family);
////////////////////////////////////////////
const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
};
const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
};

/**
 * @returns {undefined} 
 */
function sayHi() {
    const name = this.name;
    console.log("My name is: ", name);
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'


//   let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }};
//     function getValue(a,b){
//       this.sum;
//       this.mul;
//       calculator.getValue(5,10);
//     }
// console.log(calculator.sum());
// console.log(calculator.mul());