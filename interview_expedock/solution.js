function solution(arg) {
  const validOpenings = ['{', '[', '('];
  const validClosings = ['}', ']', ')'];

  let validOpening = [];
  arg.split('').forEach((e) => {
    if (validOpenings.includes(e)) {
      validOpening.push(e);
    } else if (validClosings.includes(e)) {
      if (
        validClosings.indexOf(e) ===
        validOpenings.indexOf(validOpening[validOpening.length - 1])
      ) {
        validOpening.pop();
      }
    }
  });

  return validOpening.length === 0;
}

const arg = '(())[]';
const x = solution(arg);
console.log(x);
