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

// 못 풀음. str[i] === str[i+!]이 아니라 answer랑 str을 비교하려고 했음
function mySolution(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (answer.length > 0) {
      if (answer[i - 1] === str[i]) {
        answer += 1;
      } else if (!isNaN(answer[i - 1])) {
      }
    }
    answer += str[i]; // K1 -> K
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE'));
