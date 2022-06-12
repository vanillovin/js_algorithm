function solution1(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) answer += absolutes[i];
    else answer += -absolutes[i];
  }
  return answer;
}

function solution2(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => {
    if (signs[i]) {
      answer += v;
    } else {
      answer -= v;
    }
  });
  return answer;
}

console.log(solution1([4, 7, 12], [true, false, true])); // 9
console.log(solution2([4, 7, 12], [true, false, true])); // 9

console.log(solution1([1, 2, 3], [false, false, true])); // 0
console.log(solution2([1, 2, 3], [false, false, true])); // 0
