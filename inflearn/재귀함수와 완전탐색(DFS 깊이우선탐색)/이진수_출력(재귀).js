// * 재귀 문제는 stack frame 그리면서 풀어보기 *
function solution(n) {
  let answer = '';

  function DFS(n) {
    // 재귀 초보자 if-else
    // 재귀가 언제 멈춰야 되는지. 재귀의 종착점
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      // console.log(n % 2);
      answer += String(n % 2);
    }
  }
  DFS(n);

  return answer;
}

console.log(solution(11)); // 1011
