/**
 * Checks if a given number is a prime number.
 *
 * A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
 * This function first checks if the number has more than 15 digits, in which case it returns false.
 * It then checks if the number is less than or equal to 1, returning false if so.
 * If the number is 2 or 3, it returns true as these are prime numbers.
 * For numbers greater than 3, it checks divisibility by 2 and 3.
 * Finally, it uses a loop to check for factors up to the square root of the number, incrementing by 6 each iteration.
 * If any factor is found, it returns false; otherwise, it returns true.
 *
 * @param {number} num - The number to check for primality.
 * @returns {boolean} - Returns true if the number is prime, false otherwise.
 */
function isPrime(num) {
    if (num.toString().length > 15) return false;
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function add(a, b) {
    return a + b;
}

// write the output of 3 plus 5
console.log()

// function to multuply two numbers


