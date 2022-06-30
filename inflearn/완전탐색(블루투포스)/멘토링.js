// A 멘토 - B 멘티
// A 학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 함.
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let nTest = arr[i];
    if (i === 0) {
      for (let x = 0; x < nTest.length - 1; x++) {
        for (let y = x + 1; y < nTest.length; y++) {
          answer.push([nTest[x], nTest[y]]);
        }
      }
    } else {
      let prevArr = [...answer];
      answer = [];
      for (let x = 0; x < prevArr.length; x++) {
        let first = prevArr[x][0];
        let second = prevArr[x][1];
        if (nTest.indexOf(first) < nTest.indexOf(second)) {
          answer.push([first, second]);
        }
      }
    }
  }
  return answer.length;
}

function solution1(test) {
  let answer = 0;
  let flag = 0;
  let m = test[0].length;
  let n = test.length;

  // 첫번째 시험에서 도출되는 총 경우의 수
  for (let i = 1; i < m; i++) answer += i;

  for (let i = 0; i < m - 1; i++) {
    for (let j = i + 1; j < m; j++) {
      flag = 0;

      for (let k = 1; k < n; k++) {
        if (test[k].indexOf(test[0][i]) > test[k].indexOf(test[0][j])) {
          flag = 1;

          break;
        }
      }

      if (flag) answer--;
    }
  }

  return answer;
}

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr)); // 3
console.log(solution1(arr)); // 3
