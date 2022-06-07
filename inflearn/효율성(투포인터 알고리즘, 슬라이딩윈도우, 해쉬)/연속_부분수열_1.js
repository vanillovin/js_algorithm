// m보다 작으면 rt증가하면서 더하고, 크거나 같으면 lt가 증가하면서 빼기
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
