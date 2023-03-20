// This function should return an array, not a single number
function tribonacci(signature, n) {
    if (n === 0) {
        return [];
      } else if (n === 1) {
        return [signature[0]];
      } else if (n === 2) {
        return [signature[0], signature[1]];
      } else if (n === 3) {
        return [signature[0], signature[1], signature[2]];
      } else {
        var tribonacciArray = signature.slice(); // Create a copy of the signature array
        for (var i = 3; i < n; i++) {
          tribonacciArray.push(tribonacciArray[i-1] + tribonacciArray[i-2] + tribonacciArray[i-3]); // Calculate the next number in the sequence and add it to the array
        }
        return tribonacciArray;
    }
}

const signature = [1,1,1]
const n = 5
const x = tribonacci(signature, n)
console.log(x)


