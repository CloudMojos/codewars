function solution(arr1, arr2) {
  return arr1.filter((e) => !arr2.includes(e));
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2];
const x = solution(arr1, arr2);
console.log(x);
