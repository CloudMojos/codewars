function solution(arg, arg1) {
    let dict = {}
    arg.forEach((e, i) => {
        dict[arg1[i]] = e;
    })
    return Object.values(dict);
}

const arg = ['x', 'y', 'z'];
const arg1 = [1, 2, 0];
const x = solution(arg, arg1)
console.log(x)