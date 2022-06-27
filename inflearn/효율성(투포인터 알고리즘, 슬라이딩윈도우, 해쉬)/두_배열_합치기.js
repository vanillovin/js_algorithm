function solution1(arr1, arr2) {
  // 일단 sort를 하면 NlogN의 시간복잡도
  return [...arr1, ...arr2].sort();
}

// 나중에 병합정렬을 배우기 위해서
function solution2(arr1, arr2) {
  let answer = [];
  let p1 = 0,
    p2 = 0;
  // 두개의포인트를잡음 => two pointers algorithm => O(n + m) 시간 복잡도
  let n = arr1.length;
  let m = arr2.length;
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

console.log(solution1(a, b)); // [ 1, 2, 3, 3, 5, 6, 7, 9 ]
console.log(solution2(a, b)); // [ 1, 2, 3, 3, 5, 6, 7, 9 ]
