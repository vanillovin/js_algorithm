// 대소문자를구분하지않음
function solution(str) {
  let result;

  return str.toLowerCase().split('').join() ==
    str.toLowerCase().split('').reverse().join()
    ? 'YES'
    : 'NO';
}

console.log(solution('gooG')); // YES
console.log(solution('hello')); // NO
