function pyramid(n) {
    let pyramid = [];
    for (let i = 0; i < n; i++) {
        row = [];
        for (let j = 0; j < i + 1; j++) {
            row.push(1);
        }
        pyramid.push(row);
    }
    return pyramid;
}

const x = 3;
console.log(pyramid(x));