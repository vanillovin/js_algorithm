function solution(str) {
  let answer = '';
  for (let s of str) {
    if (!isNaN(s)) answer += s;
  }
  return parseInt(answer);
}

function solution1(str) {
  let answer = '';
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

function solution2(str) {
  return +str.replace(/[a-z]/gi, '').replace(/(^0+)/, '');
}

console.log(solution('g0en2T0s8eSoft')); // 208
console.log(solution1('g0en2T0s8eSoft')); // 208
console.log(solution2('g0en2T0s8eSoft')); // 208
