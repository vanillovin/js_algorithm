// rt가 증가하면서 더하는 것도 카운팅, lt도 빼놓고도 카운팅
// rt가 증가해서 "새로운 숫자가 추가돼야지" 새로운 숫자가 연속부분수열의 마지막이면서 개수가 구해짐.
function solution(M, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > M) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

function solution1(m, arr) {
  let answer = 0;
  let lt = 0;
  let rt = 0;
  let sum = arr[rt];
  while (rt < arr.length) {
    if (sum <= m) {
      answer += rt - lt + 1;
      rt++;
      sum += arr[rt];
    } else {
      sum -= arr[lt];
      lt++;
    }
  }
  return answer;
}

let arr = [1, 3, 1, 2, 3]; // 5개의 연속수열로 5이하가되면 연속부분수열
console.log(solution(5, arr)); // 10
console.log(solution1(5, arr)); // 10

// 새로운 숫자가 추가되면(ex.3) 무조건 rt가 증가해서 sum에 추가되면
// 그 숫자가 포함된 (포함하는) 연속부분수열은 무조건 한개이상임. (5이하면)
// 1 3 <- 이 구간에서 연속부분수열은 {1} {1, 3}
// 1
// 1 3
// sum이 M 이하니까 rt가 증가하면서
// 1 3 1(rt)
// => sum : 5
// 이하니까 카운팅하는데, 새롭게 추가된 1이 포함된 연속부분수열
// {1} {1,3} {1,3,1} 이렇게 3개
// 그럼 이 개수는 어떻게 구하나?
// (lt)1 3 1(rt) <- 이렇게 3개가 연속부분수열이면
// 새로 추가된 끝숫자가 포함된 연속부분수열은
// => rt - lt + 1 = 3
// 합이5면카운팅 -> 또rt증가해서 더했는데 7 -> lt는빼면서증가 -> 5이하가될때까지반복더
