function solution(values, n) {
    if (n == 0) { return []; }
    let newValues = [...values];

    let b = createArray(n);
    let index = 0;
    while (newValues.length > 0) {
        // if (values[0] >= values[values.length - 1]) {
        //     b[index].push(values.shift())
        // } else if (values[0] < values[values.length - 1]) {
        //     b[index].push(values.pop())
        // }

        b[index].push(newValues.shift());
        // console.log(index)
        index = (index + 1) % n;
    }
    b = b.map(arr => {
        return summarize(arr);
        // console.log("Arr ", arr);
    })
    return b;
}

function createArray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push([])
    }
    return array;
}

function summarize(arr) {
    return arr.reduce((a, c) => a + c, 0)
}

const arg = null
const x = solution([1, 2, 3, 4, 5], 0)
console.log(x)