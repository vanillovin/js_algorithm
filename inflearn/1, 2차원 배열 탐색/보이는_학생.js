function solution(arr) {
  let answer = 0;
  arr.forEach((n, i) => n < arr[i + 1] && answer++);
  return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr)); // 5
