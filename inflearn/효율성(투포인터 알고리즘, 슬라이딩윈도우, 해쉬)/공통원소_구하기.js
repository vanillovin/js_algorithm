// sort - O(nlogn)
function solution1(arr1, arr2) {
  let answer = [];
  for (let v of arr1) {
    if (arr2.includes(v)) answer.push(v);
  }
  // 정렬 기준 콜백 함수를 전달하지 않고 그냥 sort만 쓰면
  // 기본적으로 배열의 원소들을 문자열로 변환한 후 정렬함
  return answer.sort((a, b) => a - b);
}

function solution2(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } //
    else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

console.log(solution1([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])); // [ 2, 3, 5 ]
console.log(solution2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])); // [ 2, 3, 5 ]
