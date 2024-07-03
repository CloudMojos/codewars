const arr1 = ["apple", "orange", "pineapple", "grapes"];


const arr2 = ["grapes", "lemon", "apple", "strawberry"];

let filtered = arr1.concat(arr2);

filtered = filtered.filter(e => {
    return !containsBoth(e);
})


function containsBoth(value) {
    return arr1.includes(value) && arr2.includes(value);
}

console.log(filtered)