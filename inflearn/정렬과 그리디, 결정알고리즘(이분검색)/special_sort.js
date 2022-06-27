// 이웃하는 것끼리 비교하는 것이 버블 정렬
// 1 2 / 2 3 / 3 -3 ..
// 1 -3 -2 2 3 -6 6
function solution(arr) {
  let answer = arr; // 얕은 복사
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 앞이 양수 뒤가 음수면 바꾸기
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
let arr1 = [1, 4, 2, -5, -2, 5, 6, -6];
console.log(solution(arr)); // [ -3, -2, -6, 1, 2,  3,  5, 6 ]
console.log(solution(arr1)); // [ -5, -2, -6, 1, 4,  2,  5, 6 ]
