function sumOfListPrime(x) {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    var sum = 0;
    for (var i = 0; i <= x; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

var x = 10;
console.log(sumOfListPrime(x));