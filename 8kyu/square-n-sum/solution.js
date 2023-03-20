function squareSum(numbers) {
    // Use function reduce to find the sum.
    return numbers.reduce((sum, num) => {
        return sum + (num * num)
    }, 0)
}
const arg = [0, 3, 4, 5]
const x = squareSum(arg)
console.log(x)