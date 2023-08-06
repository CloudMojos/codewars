function solution(arg) {
    let array = [];
    let lowest = arg[0];

    for (let i = 0; i < arg.length; i++) {
        if (lowest > arg[i]) {
            lowest = arg[i]
        }
    }

    for (let i = 0; i < arg.length; i++) {
        if (lowest === arg[i]) {
            lowest = null;
        } else {
            array.push(arg[i]);
        }
    }
    return array
}

const arg = [5, 3, 2, 1, 4]
const x = solution(arg)
console.log(x)