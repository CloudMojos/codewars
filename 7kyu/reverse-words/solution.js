function solution(arg) {
    return arg.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

const arg = 'sihT si na !elpmaxe'
const x = solution(arg)
console.log(x)