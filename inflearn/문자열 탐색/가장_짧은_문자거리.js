// 입력을 보고 어떻게 이런 출력이 나왔을지 예측
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
  for (let i = str.length - 1; i >= 0; i--) {
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
// [ 1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0 ]

/* 
p=1000, e를 만나면 0 아니면 +1 & answer에 push
------------------------>
  t   e a c h e r m o d e
[1001|0|1|2|3|0|1|2|3|4|0]
↳ 이것은 자기의 "왼쪽"에 있는 e로부터 떨어진 거리인데
"t"는 왼쪽에 e가 없어서 큰 숫자로 초기화?
"c"는 왼쪽에 있는 e로부터 거리가 2

이제 오른쪽으로부터 떨어진 거리 구하기
첫 번째에 e가 있으니까 바로 p=0 바꾸기 & e가 아니면 ++
<------------------------
     t   e a c h e r m o d e
   [1001|0|1|2|3|0|1|2|3|4|0]
=> [1   |0|1|2|1|0|1|2|2|1|0]
기존 값을 더 작은 값으로 교체
*/
