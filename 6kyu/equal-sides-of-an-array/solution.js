function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        const left = arr.slice(0, i)
        const right = arr.slice(i + 1, arr.length)
        if (sum(left) === sum(right)) {
            return i
        }
    }
    return -1
}

function sum(arr) {
    return arr.length > 0 ? arr.reduce((sum, num) => sum += num) : 0
}

const arg = [20,10,-80,10,10,15,35]
const x = findEvenIndex(arg)
console.log(x)