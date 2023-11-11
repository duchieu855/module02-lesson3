function findDivisors (n) {
    let number = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            number = i;
            console.log(number);
        }
    }
}
findDivisors(20);