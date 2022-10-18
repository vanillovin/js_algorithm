// JavaScript의 Map은 key와 value가 한 쌍으로 된 객체
// let sH = new Map(); // string hash
// key  B   A   ...
// sH | 1 | 1 | ... |
//
// sH.set('B', 1) => B 문자열의 키를 갖는 값을 1로 세팅
// 기존 키에 값이 없으면 만들고, 있으면 get 해서 + 1

function solution(str) {
  let answer;
  let sH = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  for (let s of str) {
    if (sH.has(s)) sH.set(s, sH.get(s) + 1);
    else sH.set(s, 1);
  }
  for (let [key, val] of sH) {
    // console.log(key, ':', val); // B : 3
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

// reduce
function solution1(s) {
  let answer;
  let students = [...s];
  let countedNames = students.reduce((prev, curr) => {
    if (curr in prev) prev[curr]++;
    else prev[curr] = 1;
    return prev;
  }, {});
  let max = 0;
  for (let x in countedNames) {
    if (max < countedNames[x]) {
      max = countedNames[x];
      answer = x;
    }
  }
  return answer;
}

// 객체
function solution2(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) obj[s[i]]++;
    else obj[s[i]] = 1;
  }
  let array = [];
  for (let v in obj) {
    array.push([v, obj[v]]);
  }
  array.sort((a, b) => a[1] - b[1]);
  return array[array.length - 1][0];
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str)); // C
console.log(solution1(str)); // C
console.log(solution2(str)); // C

// Object보다 HashMap을 쓰는게 무슨 이점이 있는지?
// https://erim1005.tistory.com/m/entry/Javascript-%EC%97%90%EC%84%9C-Object%EB%A5%BC-%ED%95%B4%EC%8B%9C%EB%A7%B5%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94
