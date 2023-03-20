// This function should return an array, not a single number
function tribonacci(signature, n) {
    let tribonacciArray = signature.slice(); 
    for (var i = 3; i < n; i++) {
        tribonacciArray.push(tribonacciArray[i-1] + tribonacciArray[i-2] + tribonacciArray[i-3]); // Calculate the next number in the sequence and add it to the array
    }
    return tribonacciArray;
}

const signature = [1,1,1]
const n = 10
const x = tribonacci(signature, n)
console.log(x)


