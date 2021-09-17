/*
Write a function, makeCounter() that declares a local count variable and then 
returns an increment function. 
Call it twice to make different counters, counter1 and counter2. 
Do they keep independent counts?

*/

// function makeCounter(n) {
//     let count1 = 0;
//     return function(){
//         console.log(count1++)
//     }

//     let count2 =function( ){
//         return count1++;
//     }
//         console.log()
//     }


// makeCounter(2);

function b() {
    function a() {
        console.log(x);
    }
    const x = 10;
    a();
}
const x = 20;
b();