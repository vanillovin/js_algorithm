function solution(arr) {
  let answer = 0; // 카운팅
  let n = arr.length;
  // 방향   12  3  6  9 시
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 가려고하는방향의 행좌표.
        let ny = j + dy[k]; // 열좌표
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          // 크거나같은게있으면봉우리가아님
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr)); // 10
