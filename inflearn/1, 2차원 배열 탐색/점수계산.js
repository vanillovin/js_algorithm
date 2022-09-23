function solution(arr) {
  let count = 0;
  let answer = 0;

  // 1이 맞은거
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      answer += count;
    } else {
      count = 0;
    }
  }

  return answer;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // 10
