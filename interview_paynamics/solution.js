function solution(arg) {
    let summarized = [];
    arg.forEach(e => {
        summarized.push(summarize(e));
    })

    return max(summarized);
}

function summarize(arr) {
    return arr.reduce((a, c) => { return a + c }, 0)
}

function max(arr) {
    let max = arr[0];

    arr.forEach(e => {
        if (e > max) {
            max = e;
        }
    })
    return max;
}

// console.log(summarize([1, 2, 3]))

// const arg = [[2, 5, 3], [1, 9]];
// const arg = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
// const arg = [[10, 10 , 10, -40], [10, 5, -3]];

const arg = [[10, 10 , 10, -40], [10, 5, -3], [10, "a"]];

const x = solution(arg);
console.log(x);

// console.log(max([1, 4, 3]));