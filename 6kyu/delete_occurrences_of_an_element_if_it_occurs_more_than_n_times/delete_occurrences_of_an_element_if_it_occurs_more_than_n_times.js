function solution(arg, n) {
    let unique = uniqueArray(arg);
    let collection = createCollection(unique);
    for (let i = 0; i < arg.length; i++) {
        if (collection[arg[i]].length < n) {
            collection[arg[i]].push(arg[i]);
        }
    }
    console.log(collection);
    let result = [];

}

function createCollection(unique) {
    let collection = {};
    for (let i = 0; i < unique.length; i++) {
        collection[unique[i]] = [];
    }
    return collection
}

function uniqueArray(array) {
    let unique = [];
    array.forEach(e => {
        if (!unique.includes(e)) {
            unique.push(e);
        }
    });
    return unique;
}

// createCollection(u)
// const arr1 = uniqueArray([2,2,2,3,3,4,2,2]);
// console.log(createCollection(arr1));

const arg = [20, 37, 20, 21];
const n = 1;
const x = solution(arg, n)
console.log(x)