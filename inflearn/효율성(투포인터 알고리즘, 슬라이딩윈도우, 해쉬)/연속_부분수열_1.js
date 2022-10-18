// M 보다
// 작으면 rt가 증가하면서 더하고,
// 크거나 같으면 lt가 증가하면서 빼기
function solution(M, arr) {
  let answer = 0;
  let lt = 0; // left
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]; // rt = right
    if (sum === M) answer++;
    while (sum >= M) {
      sum -= arr[lt++];
      if (sum === M) answer++;
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr)); // 3

//    lt    rt
// 1  2  1  3  1  1  1  2
//
//  6 === M  -> 카운팅
// sum    6
// 카운팅하고 나서도 같으면 lt 값을 빼고 증가!
