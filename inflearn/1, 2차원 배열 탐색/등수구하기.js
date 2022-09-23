function solution(arr) {
  let obj = {};
  const copyArr = [...arr];
  copyArr.sort((a, b) => b - a).forEach((sNum, sI) => (obj[sNum] = sI + 1));
  return arr.map((num) => obj[num]).join(' ');
}

function solution1(arr) {
  const answer = [];
  const copy = arr.slice();
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr.indexOf(copy[i]) + 1);
  }
  return answer.join(' ');
}

const solution3 = (arr = [87, 89, 92, 100, 76]) =>
  arr.map((i) => arr.filter((j) => i < j).length + 1).join(' ');

console.log(solution([87, 89, 92, 100, 76])); // 4 3 2 1 5
console.log(solution1([87, 89, 92, 100, 76])); // 4 3 2 1 5
console.log(solution3()); // 4 3 2 1 5
