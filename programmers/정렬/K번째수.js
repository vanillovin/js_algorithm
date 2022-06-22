function solution(array, commands) {
  let answer = [];

  commands.forEach((v) => {
    answer.push(array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]);
  });

  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
console.log(solution(array, commands)); // [5, 6, 3]
