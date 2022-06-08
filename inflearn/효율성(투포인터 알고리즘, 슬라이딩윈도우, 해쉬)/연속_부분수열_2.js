// 뺴놓고도카운팅
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
}

function solution1(m, arr) {
  let answer = 0,
    lt = 0,
    rt = 0,
    sum = arr[rt];

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

let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr)); // 10
console.log(solution1(5, arr)); // 10
