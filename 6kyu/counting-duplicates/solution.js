function solution(string) {
    // Create an array of map with the letters as key and count as value
    let letters = new Set(string.split(''))
    letters = Array.from(letters).map(letter => [letter, 0])

    string.split('').forEach(c => {
        for (let i = 0; i < letters.length; i++) {
            if (c === letters[i][0]) {
                letters[i][1] += 1
            }
        }
    })

    const x = letters.reduce((count, letter) => {
        if (letter[1] > 1) {
            return count += 1
        }
    }, 0)
    return x
}

const arg = 'absfdf'
const x = solution(arg)
console.log(x)