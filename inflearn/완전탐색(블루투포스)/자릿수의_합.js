function solution(numArr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of numArr) {
    let sum = 0,
      tmp = x;
    // tmp 128 / tmp%10 8
    // tmp 12  / tmp%10 2
    // tmp 1   / tmp%10 1
    // tmp 0   / break;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x; // x=원본
    } else if (sum === max) {
      // 128 < 137
      if (x > answer) answer = x;
    }
  }

  return answer;
}

function solution1(numArr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of numArr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => +a + +b, 0);
    if (sum > max) {
      max = sum;
      answer = x; // x=원본
    } else if (sum === max) {
      // 128 < 137
      if (x > answer) answer = x;
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123])); // 137
console.log(solution1([128, 460, 603, 40, 521, 137, 123])); // 137

function solution3(arr) {
  let answer = [];
  const strArr = arr.map((i) => String(i));

  for (let i = 0; i < strArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < strArr[i].length; j++) {
      sum += Number(strArr[i][j]);
    }
    answer.push([+strArr[i], +sum]);
    sum = 0;
  }

  return Math.max(
    ...answer
      .sort((a, b) => b[1] - a[1])
      .filter(([_, sum]) => sum === answer[0][1])
      .map(([num, _]) => num)
  );
}
console.log(solution3([128, 460, 603, 40, 521, 137, 123])); // 137
