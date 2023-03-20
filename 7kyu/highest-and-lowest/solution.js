function highAndLow(numbers) {
    // numbers is a string
    // "8 3 -5 42 -1 0 0 -9 4 7 4 -4" -> "42 -9"
    numbers = numbers.split(' ').map(num => Number(num))
    const highest = numbers.reduce((highest, current) => {
        return current > highest ? current : highest
    })
    const lowest = numbers.reduce((highest, current) => {
        return current < highest ? current : highest
    })
    return `${highest} ${lowest}`
}

const arg = "3 8 -5 42 -1 0 0 -9 4 7 4 -4"
const x = highAndLow(arg)
console.log(x)