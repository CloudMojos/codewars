// Generate the combination
function solution(str, n) {
  let str = '';

  str.concat(helper('('));
}

// Recursive
function helper(str, n) {
  if (str.length == n) {
    return str;
  }

  return solution(str.concat('('), n);
}

const arg = '';
const x = solution(arg, 3);
console.log(x);
