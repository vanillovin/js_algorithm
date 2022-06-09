function solution(str) {
  let answer = 'YES';
  let stack = [];
  for (let s of str) {
    if (s === '(') stack.push(s);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

let str1 = '(())()';
let str2 = ')())';
let str3 = '(()(()))(()';
console.log(solution(str1)); // YES
console.log(solution(str2)); // NO
console.log(solution(str3)); // NO
