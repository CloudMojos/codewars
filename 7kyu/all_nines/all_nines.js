function solution(arg) {
    arg = BigInt(arg);
    let multiple = 1n;
    while (!allNine(multiple * arg)) {
        multiple += 1n;
    }
    return multiple
}

function allNine(num) {
    return num.toString().split('').every(d => {
        if (Number(d) !== 9) { return false }
        return true
    })
}

const arg = 3969
const x = solution(arg)
console.log(x)