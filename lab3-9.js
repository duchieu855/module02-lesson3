function countDivisors(n) {
	let count = 0;
	for (let i = 1; i < n; i++) {
		if (n % i === 0 && i % 2 === 0) {
			console.log(i);
			count++;
		}
	}
	return count;
}

const counts = countDivisors(20);
console.log(counts);
