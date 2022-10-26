function solution(str) {
  let answer = '';
  let stack = [];
  for (let s of str) {
    if (s === '(') stack.push(s);
    else if (s === ')') stack.pop();
    else {
      if (stack.length === 0) answer += s;
    }
  }
  return answer;
}

function solution1(s) {
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x);
    }
  }
  return stack.join('');
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str)); // EFLM
console.log(solution1(str)); // EFLM
