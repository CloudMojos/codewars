function solution(str1, str2) {
    let currentString = ''
    for (let i = 0; i < str1.length; i++) {
        currentString = str1[i];
        for (let j = i + 1; j < str1.length; j++) {
            currentString += str1[j];
        }
        if (currentString.length === str2.length) break;
    }
    return currentString === str2
}

const arg = null
const x = solution("abc", "d")
console.log(x)