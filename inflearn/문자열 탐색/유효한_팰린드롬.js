// 회문을 검사할 때 순수하게 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않음
// 알파벳 이외의 문자들을 무시합니다. 해당 문자열이 팰린드롬이면 'YES' 아니면 'NO'를 출력

function solution(str) {
  let answer = 'YES';
  str = str.toLowerCase().replace(/[^a-z]/g, ''); // 알파벳만놥두고나머지다빈문자로바꾸기
  if (str.split('').reverse().join('') !== str) return 'NO';
  return answer;
}

function solution1(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  s = s.split('').filter((value) => value >= 'a' && value <= 'z');
  if (s.join('') !== s.reverse().join('')) return 'NO';
  return answer;
}

const str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str)); // 'YES'
console.log(solution1(str)); // 'YES'
