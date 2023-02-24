function fibonacci(num) {
    if (num === 1) {
        return 0
    } else if (num === 2) {
        return 1
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

const arg = 6
const x = fibonacci(arg)
console.log(x)