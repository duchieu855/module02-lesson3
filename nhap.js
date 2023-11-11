function findPrimes(n) {
	const primes = [];

	// Hàm kiểm tra xem một số có phải là số nguyên tố hay không
	function isPrime(num) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}

		return num > 1;
	}

	for (let i = 2; i < n; i++) {
		if (isPrime(i)) {
			// Console.log(i);
			primes.push(i);
		}
	}

	return primes;
}

const limit = 2;
const primeNumbers = findPrimes(limit);

console.log(`Các số nguyên tố nhỏ hơn ${limit} là:`, primeNumbers);

