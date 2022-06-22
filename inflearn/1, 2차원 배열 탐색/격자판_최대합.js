function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let row = (col = diag = reDiag = 0);

  for (let i = 0; i < arr.length; i++) {
    row = col = 0;
    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    answer = Math.max(answer, row, col);
  }

  for (let i = 0; i < arr.length; i++) {
    diag = arr[i][i];
    reDiag = arr[i][arr.length - 1 - i];
  }
  answer = Math.max(answer, diag, reDiag);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
