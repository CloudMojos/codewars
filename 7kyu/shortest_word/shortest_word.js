function solution(arg) {
    const words = arg.split(' ');
    let shortest = words[0].length;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest) {
            shortest = words[i].length;
        }
    }
    return shortest;
}

const arg = null;

const x = solution("bitcoin take over world maybe knows a perhaps");
console.log(x);