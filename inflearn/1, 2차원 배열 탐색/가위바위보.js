// 1: 가위, 2: 바위, 3: 보

// A가 이기는 경우
// A  B
// 1  3
// 2  1
// 3  2
// => 경우를 따질 때는 분류 기준을 잘 잡아야 함
function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D ';
    else if (a[i] === 1 && b[i] === 3) answer += 'A ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A ';
    else answer += 'B ';
  }

  return answer;
}

function solution1(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push('D');
    else if (a[i] - b[i] === 1 || a[i] - b[i] === -2) answer.push('A');
    else answer.push('B');
  }
  return answer;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // 'A B A B D'
console.log(solution1(a, b)); // [ 'A', 'B', 'A', 'B', 'D' ]
