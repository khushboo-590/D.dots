function numbers(a, b, c) {
    return a + b + c;
}

let result = numbers(10, 20, 30);
console.log(result)


// --------------
function palindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(palindrome("madam"));

// -------------
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
// ---------------------
function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const n = [12, 45, 78, 23, 89, 34];
console.log(largestNumber(n));