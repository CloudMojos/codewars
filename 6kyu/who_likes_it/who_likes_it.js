function solution(arg) {
    if (arg.length === 0) {
        return 'no one likes this';
    } else if (arg.length === 1) {
        return arg[0] + ' likes this';
    } else {
        if (arg.length > 3) {
            return `${arg[0]}, ${arg[1]} and ${
                arg.length - 2
            } others like this`;
        }
        return arg
            .map((person, i) => {
                if (i == arg.length - 1) {
                    return 'and ' + person + ' like this';
                } else if (i == arg.length - 2) {
                    return person + ' ';
                } else return person + ', ';
            })
            .join('');
    }
}

const arg = ['Alex', 'Jacob', 'Mark', 'Max'];
const x = solution(arg);
console.log(x);
