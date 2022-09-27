// 대소문자를구분하지않음
function solution(str) {
  return str.toLowerCase().split('').join() ==
    str.toLowerCase().split('').reverse().join()
    ? 'YES'
    : 'NO';
}

function solution1(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) {
      return 'NO';
    } else {
      return 'YES';
    }
  }
}

// string.length / 2 까지만 돌기
function solution2(str) {
  let answer = 'YES';
  str = str.toLowerCase();
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) return 'NO';
  }
  return answer;
}

console.log(solution('gooG')); // YES
console.log(solution1('gooG')); // YES
console.log(solution2('gooG')); // YES

console.log(solution('goooG')); // YES
console.log(solution1('goooG')); // YES
console.log(solution2('goooG')); // YES

console.log(solution('hello')); // NO
console.log(solution1('hello')); // NO
console.log(solution2('hello')); // NO
