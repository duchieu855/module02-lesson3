function isPerfectNumber(n) {
	let sum = 0;
	for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}
	if (sum === n) {
		return true;
	}
	return false;
}

const number = isPerfectNumber(10);
console.log(number);
