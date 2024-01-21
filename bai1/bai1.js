function calculateSum(event) {
    event.preventDefault();
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const primes = findPrimes(num1, num2);
    const sum = primes.reduce((a, b) => a + b, 0);
    document.getElementById("result").innerText = `Tổng các số nguyên tố trong khoảng từ ${num1} đến ${num2} là: ${sum}`;

    document.getElementById("prime-numbers").innerText = `Các số nguyên tố trong khoảng từ ${num1} đến ${num2} là: ${primes}`;
}

function findPrimes(a, b) {
    const primes = [];
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}