// A 멘토 - B 멘티
// A 학생은 M 번의 수학테스트에서 모두 B 학생보다 등수가 앞서야 함.
// 총 경우의 수는 16가지겠구나. 나는 이 16가지를 모두 확인해 봐야겠다 => 블루투포스
function solution(test) {
  let answer = 0; // 멘토 멘티가 될 수 있는 횟수
  const [M, N] = [test.length, test[0].length];

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      // 총 16가지 경우의 수 (i 멘토 - j 멘티)
      // i 학생이 멘토, j 학생의 멘티가 되는 경우는
      // i가 j를 3번의 수학 테스트에서 모두 등수가 앞서야 함
      let cnt = 0;
      for (let k = 0; k < M; k++) {
        // 이렇게하면안됨. 전통파로 가라 => let
        let pi = (pj = 0); // 자바스크립트 표현식의 특이한 꼼수를 이용한 방법
        // s 등수
        for (let s = 0; s < N; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === M) answer++;
    }
  }

  return answer;
}

// 2중 for문 - n개 중에 2개를 고르는 것
// 패턴 - 무슨의미인지알고싶으면값을바꾸는부분을찾아라
function solution1013(test) {
  // 명령문대신 함수형 array 메서드 사용하기 indexOf, includes
  let answer = 0; //
  const M = test.length; // 테스트 회수
  const N = test[0].length; // 학생 수
  for (let i = 1; i <= N; i++) {
    // 멘토가1번일때 -> N
    for (let j = 1; j <= N; j++) {
      // 멘티가i번일때 -> N
      let count = 0; // PI가 PJ보다 등수가 높은데 숫자는 작은 경우
      for (let k = 0; k < M; k++) {
        // k번째시험의등수표
        const pi = test[k].indexOf(i); // k번째시험에서i는몇등이니
        const pj = test[k].indexOf(j); // j의인덱스는몇이니
        if (pi < pj) count++; //
      }
      if (count === M) answer++; // cnt===M일때만증가하는군
    }
  }
  return answer;
}

function solution1(arr) {
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

function solution2(test) {
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
console.log(solution2(arr)); // 3
