let x = 10;

function main() {
    let x = 0;
    console.log("x1 is " + x); // 0
    x = 20;
    console.log("x2 is " + x); // 20
    if (x > 0) {
        x = 30;
        console.log("x3 is " + x); // 30
    }
    console.log("x4 is " + x); // 30

    function f(x) {
        console.log("x5 is " + x); // 50
    }
    f(50);
    console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);