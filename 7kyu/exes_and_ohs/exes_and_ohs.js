function solution(arg) {
    let ohCounter = 0
    let exCounter = 0

    arg.split('').forEach((char) => {
        if (char.toLowerCase() == 'x') {
            exCounter++;
        } else if (char.toLowerCase() == 'o') {
            ohCounter++;
        }
    })
    return exCounter === ohCounter  
}

const arg = "xxo"
const x = solution(arg)
console.log(x)