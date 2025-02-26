function solution(arg) {
    let splitStrings = [];
    for (let i = 0; i < arg.length; i += 2) {
        splitStrings.push(arg[i] + (arg[i + 1] || '_'));
    }
    return splitStrings;
}

const arg = 'abcde';
const x = solution(arg);
console.log(x);
