// 모든 아나그램 찾기(Hash & Sliding Window && Two Pointers Algorithm)

// 두개의맵을비교해서같은지다른지
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  const len = t.length - 1; // 3('abc') - 1 = rt가 2번째인덱스부터 돌아야 함
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(x, sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  // console.log(sH); // Map(2) { 'b' => 1, 'a' => 1 }

  let lt = 0; // lt & rt = 투포인터
  for (let rt = len; rt < s.length; rt++) {
    // 2. 추가
    // 추가하면 3개가 됐음(+'c') -> 비교하기 -> a 추가하고
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    // 3, 비교
    // sH, tH 두 Map이 같으면 ++, 아니면 lt 빼고 증가. 추가 -> 비교
    if (compareMaps(sH, tH)) answer++;

    // 1. 빼고 (b)
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // 키의값이0이면키가슬라이딩윈도우안에존재하지않는것 키자체를delete
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++; // 증가 => 밀고가는것
  }

  return answer;
}

let s = 'bacaAacba';
let t = 'abc';
console.log(solution(s, t)); // 3

// ---------------------->
// lt    rt
// b  a  c  A  a  c  b  a
//
// s문자해시맵
//    b  a  c
// sH 1  1  1 <- '윈도우'가3크기(t문자열의길이만큼)
//
//    a  b  c
// tH 1  1  1
//
// rt 위치의 문자열을 추가하는 순간! 둘이 같은지 (두 개의 Map이 같은지) 비교
// sH.size === tH.size (compare) 통과되면, 키가 개수가 일치하는지 확인
// 루틴이,,
// rt 더하고 for문 돌면서 해시맵에 추가하고 compare 호출해서 통과하면 추가 ?
// lt가 가리키는 부분을 빼고 증가함. b -> a => b가 빠짐 => b : 0 => 키가0이면
// => b가슬라이딩윈도우에존재x => key를 아예 Map에서 delete
//
// rt 증가해서 추가되고 나면? 더하고 윈도우가 완성되면 비교(compare)

// function solution(n, arr) {
//   let answer = '';
//   let cash = Array.from({ length: n }, () => 0);
//   for (let a of arr) {
//     if (cash.indexOf(a) < 0) {
//       cash.unshift(a);
//       cash.pop();
//     } else {
//       cash.splice(cash.indexOf(a), 1);
//       cash.unshift(a);
//     }
//   }
//   answer = cash;
//   return answer;
// }
// console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
