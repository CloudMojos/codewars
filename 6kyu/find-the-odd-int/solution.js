function solution(arg) {
    let x = {}
    for (let i = 0; i < arg.length; i++) {
        // if arg[i] not in x, add it in x
        if (!x.arg[i]) {
            x.arg[i] = 0;
        }
        // else add one to itself
    }
    return x
}

const arg = 1234
const x = solution(arg)
console.log(x)