function solution(arg) {
    let newString = ''
    for (let i = arg.length - 1; i >= 0; i--) {
        newString += arg[i]
    }
    return newString
}

const arg = 'word'
const x = solution(arg)
console.log(x)