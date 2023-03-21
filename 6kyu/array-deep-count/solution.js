function deepCount(arg) {
    // If array is empty, return 0
    if (arg.length === 0) { return 0 }
    // Else, loop through the array, adding one to deepLength
    let deepLength = 0
    for (let i = 0; i < arg.length; i++) {
        deepLength += 1
        // If it's an array, run deepCount.
        if (Array.isArray(arg[i])) {
            deepLength += deepCount(arg[i])
        }
    }
    return deepLength
}

const arg = [1, 2, [3, 4, [5]]]
const x = deepCount(arg)
console.log(x)