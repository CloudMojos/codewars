function solution(word) {
    let answer = true
    word.split('').forEach((letter, index) => {
        for (let i = 0; i < word.length; i++) {
            if (i == index) { continue }

            if (word[i].toLowerCase() === letter.toLowerCase()) 
            {
                answer = false
            }
        }
    })
    return answer
}

const arg = "moose"
const x = solution(arg)
console.log(x)
