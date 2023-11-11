const pow = (n) => {
     return function multi(m) {
        let z=1;
        for (let i = 0; i < m; i++ ) {
            // console.log(i);
            z *= n;
        }
        return z;
    }
}
const pow2 = pow(2);
const pow22 = pow2(2);
console.log(pow22);