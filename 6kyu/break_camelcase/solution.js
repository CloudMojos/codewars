// complete the function
function solution(string) {
    let s = ''
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == string[i].toUpperCase()) {
            s += ' ';
        }
        s += string[i];
    }
    return s;
}

console.log(solution('camelCasing'));
