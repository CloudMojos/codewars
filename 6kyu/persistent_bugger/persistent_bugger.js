function solution(arg) {
  return helper(arg, 0);
}

function helper(arg, count) {
  if (arg.toString().length === 1) {
    return count;
  }
  const arr = arg.toString().split('');
  const result = arr.reduce((a, c) => {
    return +a * +c;
  }, 1);

  return helper(result, ++count);
}

const arg = 39;
const x = solution(arg);
console.log(x);
