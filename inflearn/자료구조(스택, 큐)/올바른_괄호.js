// ___    ___ 공이 구덩이에 빠져서 공을 꺼낸다고 가정했을 때
//   | ● |
//   | ◎ |
//   |_○_|
// 가장 나중에 들어간 공을 먼저, 제일 처음 들어간 공은 마지막으로 꺼낼 수 있음
// 스택 : 들어가는 입구와 나오는 출구가 동일한 지점
// 가장 나중에 들어간 게 먼저 나온다. LIFO(Last In, Frist Out)
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
