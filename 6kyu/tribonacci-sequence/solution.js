// This function should return an array, not a single number
function tribonacci(signature, n) {
    let tribonacciArray = signature.slice(0, n); 
    for (var i = 0; i < n - 3; i++) {
        tribonacciArray.push(tribonacciArray[i] + tribonacciArray[i + 1] + tribonacciArray[i + 2]); // Calculate the next number in the sequence and add it to the array
    }
    return tribonacciArray;
}

const signature = [1,1,1]
const n = 0
const x = tribonacci(signature, n)
console.log(x)


