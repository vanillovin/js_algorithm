// 스택 - 나중에들어간게먼저나옴
//
// 큐 Queue - 먼저들어간게먼저나옴
//   ---------------
// <-  1    2    3   <-
//   ---------------
//
// 시간복잡도를 따질때 2중 for 문이라면 안쪽 for문에 속한 연산자가
// 몇 번 연산되는지 계산하는게 시간복잡도입니다.
// 연속부분수열1 문제도 for문 안에 있는 while 문이 프로그램이 종료될 때까지
// 몇 번 반복하는지 확인해보세요.arr의 길이인 n번 이상 반복하지는 않을 겁니다.

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  // 1 2 3 4 5 6 7 8
  // 2 3 4 5 6 7 8 1
  // 3(k) 4 5 6 7 8 2
  // ->
  // 4 5 6 7 8 2
  // 5 6 7 8 4
  // 6(k) 7 8 4 5
  // ->
  // 7 8 4 5
  // 8 4 5 7
  // 4(k) 5 7 8
  // ->
  // 5 7 8
  // 7 8 5
  // 8(k) 5 7
  // ->
  // 5 7
  // 7 5
  // 5(k) 7
  //
  // => 7

  return answer;
}

function solution1(n, k) {
  let queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length !== 1) {
    for (let i = 0; i < k - 1; i++) queue.push(queue.shift());
    queue.shift();
  }

  return queue[0];
}

function solution2(n, k) {
  let princes = Array.from({ length: n }, (value, idx) => idx + 1);
  let cnt = 0;

  while (princes.length >= 2) {
    if (cnt === k - 1) princes.splice(0, 1), (cnt = 0);
    else princes.push(princes.shift()), cnt++;
  }

  return +princes;
}

console.log(solution(8, 3)); // 7
console.log(solution1(8, 3)); // 7
console.log(solution2(8, 3)); // 7
