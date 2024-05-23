function solution(arg) {
    const nigger = arg.filter(person => {
        if (person.length === 4) { return person }
    })

    return nigger
}

const arg = ["Ryan", "Kieran", "Mark"]
const x = solution(arg)
console.log(x)