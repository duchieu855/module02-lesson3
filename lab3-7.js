function findPrimes(n) {
	function isPrimes(num) {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				return false;
			}
		}

		return true;
	}

	for (let i = 2; i < n; i++) {
		if (isPrimes(i)) {
			console.log(i);
		}
	}
}

findPrimes(20);
