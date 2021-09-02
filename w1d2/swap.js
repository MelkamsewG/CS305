function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}
console.log(swap(3, 5));