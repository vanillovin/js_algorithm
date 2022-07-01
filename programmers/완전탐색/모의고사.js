function solution(answers) {
  let answer = [];

  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  let a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  let a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  let max = Math.max(a1c, a2c, a3c);

  if (a1c === max) answer.push(1);
  if (a2c === max) answer.push(2);
  if (a3c === max) answer.push(3);

  return answer;
}

function solution1(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

function solution2(answers) {
  const A = '12345'.split('');
  const B = '21232425'.split('');
  const C = '3311224455'.split('');

  const scores = [A, B, C]
    .map((p) => {
      return answers
        .map((answer, i) => answer === Number(p[i % p.length]))
        .filter((c) => c).length;
    })
    .map((score, i) => ({ id: i + 1, score }))
    .sort((a, b) => b.score - a.score);

  const ret = [];

  while (scores.length) {
    const p = scores.shift();
    if (ret[0] && ret[0].score !== p.score) break;
    ret.push(p);
  }

  return ret.map((p) => p.id).sort();
}

console.log(solution([1, 2, 3, 4, 5])); // [ 1 ]
console.log(solution([1, 3, 2, 4, 2])); // [ 1, 2, 3 ]

console.log(solution1([1, 2, 3, 4, 5])); // [ 1 ]
console.log(solution1([1, 3, 2, 4, 2])); // [ 1, 2, 3 ]

console.log(solution2([1, 2, 3, 4, 5])); // [ 1 ]
console.log(solution2([1, 3, 2, 4, 2])); // [ 1, 2, 3 ]
