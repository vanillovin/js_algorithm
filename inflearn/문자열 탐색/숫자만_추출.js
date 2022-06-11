function solution(str) {
  let answer = '';
  for (let s of str) {
    if (!isNaN(s)) answer += s;
  }
  return parseInt(answer);
}

console.log(solution('g0en2T0s8eSoft')); // 208
