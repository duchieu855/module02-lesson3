
function sum(n) {
    let a = 0;
    let i = 2;
    while (i<=2*n) {
        console.log(i);
        a += (1/i);
        i += 2;
    }
    return a;
}
console.log(sum(3));