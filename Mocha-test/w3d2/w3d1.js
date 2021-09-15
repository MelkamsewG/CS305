"use strict"

function sumTo(num) {
    if (num == 0)
        return 0;
    else
        return num + sumTo(num - 1);
}

function factorial(num) {
    if (num == 0)
        return 1;
    else
        return num * factorial(num - 1);
}

function fibonacciRecu(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecu(n - 1) + fibonacciRecu(n - 2)
}

function outputList(list, result = "") {
    if (list === null) {
        return result;
    } else {
        result += list.value + " ";
        return outputList(list.next, result);
    }
}

function outputListLoop(list, result = "") {
    while (list) {
        result += list.value + " ";
        list = list.next;
    }
    return result;
}

function outputList(list, result = "") {
    if (list === null) {
        return result;
    } else {
        result += list.value + " ";
        return outputList(list.next, result);
    }
}

function reverseListLoop(list) {
    let result = [];
    let reverse = "";
    while (list !== null) {
        result.push(list.value);
        list = list.next;
    }
    for (let i = result.length - 1; i >= 0; i--) {
        reverse += result[i] + " ";
    }
    return reverse;
}

function reverseList(list, result = []) {
    if (list !== null) {
        result.unshift(list.value)
        reverseList(list.next, result);
    }
    return result

}