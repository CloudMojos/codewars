function solution(arg) {
    return arg.reduce(((accumulator, currentValue) => accumulator + currentValue), 0)
}

const arg = [1, 5.2, 4, 0, -1]
const x = solution(arg)
console.log(x)