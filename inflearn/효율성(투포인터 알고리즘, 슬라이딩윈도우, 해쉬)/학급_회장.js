// Map은 key와 value가 한 쌍으로 된 객체
// let sH = new Map(); // string hash
//      B   A   ...
// sH | 1 | 1 | ... |
//
// sH.set('B', 1) B 문자열의 키를 갖는 값을 1로 세팅
// 기존 키에 값이 없으면 만들고, 있으면 get 해서 + 1

function solution(str) {
  let answer;
  let sH = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  for (let s of str) {
    if (sH.has(s)) {
      sH.set(s, sH.get(s) + 1);
    } else {
      sH.set(s, 1);
    }
  }

  for (let [key, val] of sH) {
    // console.log(key, ':', val);
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str)); // C
