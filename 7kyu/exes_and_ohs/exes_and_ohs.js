function solution(arg) {
    let ohCounter = 0
    let exCounter = 0

    arg.split('').forEach((char) => {
        char.toLowerCase()
        if (char == 'x') {
            exCounter++;
        } else if (char == 'o') {
            ohCounter++;
        }
    })
    return exCounter === ohCounter  
}

const arg = "xxoo"
const x = solution(arg)
console.log(x)