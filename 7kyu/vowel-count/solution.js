function solution(arg) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let count = 0

    let argArray = arg.split('')
    argArray.forEach(letter => {
        if (vowels.includes(letter)) {
            count += 1
        }
    })
    return count
}

const arg = 'abracadabra'
const x = solution(arg)
console.log(x)