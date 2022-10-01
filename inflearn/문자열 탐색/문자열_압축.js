// KKHSSSSSSSE -> K2HS7E
function solution(str) {
  let cnt = 1; // 처음엔알파벳이무조건하나있으니까
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) cnt += 1;
    else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}

function solution1(str) {
  let answer = '';
  for (let s of str) {
    if (!answer.includes(s)) {
      // 처음
      answer += s;
    } else if (answer[answer.length - 1] === s) {
      // 두 번째 +2
      answer += 2;
    } else if (!isNaN(answer[answer.length - 1])) {
      // 마지막 문자열이 숫자일 때 +1
      answer = answer.replace(
        answer.length - 1,
        Number(answer[answer.length - 1]) + 1
      );
    }
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE')); // K2HS7E
console.log(solution1('KKHSSSSSSSE')); // K2HS7E
