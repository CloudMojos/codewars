function invert(array) {
    return array.map(element => (element >= 0) ? -Math.abs(element) : Math.abs(element));
}

const x = invert([1,-2,3,-4,5]);
console.log(x);

