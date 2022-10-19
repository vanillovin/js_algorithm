function solution(str1, str2) {
  let answer;
  let map1 = new Map();
  for (let s of str1) {
    if (map1.has(s)) map1.set(s, map1.get(s) + 1);
    else map1.set(s, 1);
  }
  let map2 = new Map();
  for (let s of str2) {
    if (map2.has(s)) map2.set(s, map2.get(s) + 1);
    else map2.set(s, 1);
  }
  for (let s of str1) {
    if (map1.get(s) === map2.get(s)) answer = 'YES';
    else answer = 'NO';
  }
  return answer;
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution1(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer > 0 ? 'YES' : 'NO';
}

function getStrMap(str) {
  let map = new Map();
  for (let s of str) {
    if (map.has(s)) map.set(s, map.get(s) + 1);
    else map.set(s, 1);
  }
  return map;
}

function mySolution(s1, s2) {
  let m1 = getStrMap(s1);
  let m2 = getStrMap(s2);
  // if (m1.size !== m2.size) return 'NO';
  return compareMaps(m1, m2) ? 'YES' : 'NO';
}

const s1 = 'AbaAeCe';
const s2 = 'baeeACA';
console.log(solution(s1, s2)); // YES
console.log(solution1(s1, s2)); // YES
console.log(mySolution(s1, s2)); // YES
const str1 = 'abaCC';
const str2 = 'Caaab';
console.log(solution(str1, str2)); // NO
console.log(solution1(str1, str2)); // NO
console.log(mySolution(str1, str2)); // NO
let a = 'AABBCC';
let b = 'EEFFGG';
console.log(solution(a, b)); // NO
console.log(solution1(a, b)); // NO
console.log(mySolution(a, b)); // NO
