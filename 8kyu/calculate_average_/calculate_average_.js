function solution(arg) {
    let sum = 0;
    arg.forEach(el => {
        sum += el
    });
    let ave = sum / arg.length;
    return ave;
}

const arg = null
const x = solution(arg)
console.log(x)