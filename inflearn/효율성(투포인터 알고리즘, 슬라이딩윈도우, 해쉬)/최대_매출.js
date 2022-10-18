// 슬라이딩 윈도우 기법?
// 창문을 하나 정해서 그리고(k칸) 옆으로 쭉 한 칸씩 미는 것
//
// >길이가 3 짜리인 창문이라 생각<
// [12 15 11] 20 25 ...
//  => 38 (k매출첫번째숫자)
//
// → 창문을 옆으로 밀기
//
// 12 [15 11 20] 25 ...
// 기존 38에서 20이 추가됨. => 38 + 20 - 12 => 46
// 하나 더하고 왼쪽? 거 빼고,,
// for 문에서 i 가 증가하면서 가니까, sum + arr[i] - arr[i-k]
// 창문에 보이는 숫자 더하면서 i끝까지 옆으로 밀고 가기
function solution(K, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < K; i++) sum += arr[i];
  answer = sum;
  for (let i = K; i < arr.length; i++) {
    sum += arr[i] - arr[i - K];
    answer = Math.max(answer, sum);
  }
  return answer;
}

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr)); // 56
