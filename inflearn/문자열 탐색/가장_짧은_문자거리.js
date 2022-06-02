// 입력을 보고 어떻게 이런 출력이 나왔을지 예측

// 최소거리
// t e a c h e r m o d e / e
// 1 0 1 2 1 0 1 2 2 1 0
function solution(str, t) {
  let answer = [];
  let p = 1000;

  for (let x of str) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = str.length; i >= 0; i--) {
    if (str[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

console.log(solution('teachermode', 'e'));
