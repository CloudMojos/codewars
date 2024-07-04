function solution(arg, n) {
    let unique = uniqueArray(arg);
    let collection = createCollection(unique);
    let result = []
    console.log(unique);

    console.log(collection);
    for (let i = 0; i < arg.length; i++) {
        let index = unique.indexOf(arg[i])
        if (collection[index].length < n) {
            collection[index].push(arg[i]);
            result.push(arg[i]);
        }
    }
    // console.log(collection);
    
    // collection.forEach(arr => {
    //     arr.forEach(v => {
    //         result.push(v);
    //     })
    // })

    // values.forEach(v => {
    //     v.forEach(e => {
    //         result.push(e);
    //     })
    // })

    return result;
}

function createCollection(unique) {
    let collection = [];
    for (let i = 0; i < unique.length; i++) {
        collection.push([]);
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
const n = 2;
const x = solution(arg, n)
console.log(x)