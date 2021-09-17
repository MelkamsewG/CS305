"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, calculator }; //add all of your function names here that you need for the node mocha tests


// function filterRange(arr, a, b) {}

//higher or equal to a and lower or equal to b
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let ab = arr.filter(function(ele) {
        return ele >= a && ele <= b
    })
    return ab
}
//console.log(filterRange(arr, 1, 4))


// function filterRangeInPlace(arr, a, b) {}

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}
//let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4)



// function Calculator() {}

function calculator(a, b) {}


this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
};

this.calculator = function(str) {

    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
    }

    return this.methods[op](a, b);
};

this.addMethod = function(name, func) {
    this.methods[name] = func;
}


// function unique(arr) {}

function unique(arr) { // [1,2, 2,3,4,4] // ele= l; l=ele? :ele+1
    let empArr = [];
    arr.filter((ele) => {
        if (!empArr.includes(ele))
            empArr.push(ele)
    });
    return empArr;
}
console.log(unique(mm))



// function groupById(array) {}

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
console.log(groupById(users))

let mm = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]