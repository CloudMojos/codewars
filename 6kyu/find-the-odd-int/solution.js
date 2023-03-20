function solution(arg) {
    let x = {}
    // first part in journal section of ./desc.md
    for (let i = 0; i < arg.length; i++) {
        // if arg[i] not in x, add it in x
        if (!x[arg[i]]) {
            x[arg[i]] = 1
        } else { // else add one to itself
            x[arg[i]]++
        }
    }
    // second part in journal section of ./desc.md
    // for properties in x, if x is odd, return the key
    return parseInt(Object.keys(x).find(key => x[key] % 2 !== 0))
}

const arg = [20,1,1,2,2,3,3,5,5,4,20,4,5]
const x = solution(arg)
console.log(x)