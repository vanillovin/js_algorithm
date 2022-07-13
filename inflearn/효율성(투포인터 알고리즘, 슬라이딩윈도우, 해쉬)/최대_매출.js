// 슬라이딩 윈도우 기법
// 창문을 그리고(k칸) 옆으로 한 칸씩 미는 것
// [12 15 11] 20 25 ...
// => 38
//
// 12 [15 11 20] 25 ...
// 38 + 20 - 12 => 46
//
// for 문에서 i 가 증가하면서 가니까, sum + arr[i] - arr[i-k]
// 창문에 보이는 숫자 더하면서 옆으로 밀고 가기
function solution(k, arr) {
  let answer = (sum = 0);
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr)); // 56
