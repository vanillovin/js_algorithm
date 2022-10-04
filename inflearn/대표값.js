function solution(input) {
  const [first, second] = input.split('\n');
  const N = parseInt(first);
  const [...scores] = second.split(' ').map((e) => parseInt(e));

  const average = Math.round(scores.reduce((acc, cur) => acc + cur) / N);
  const diff = [];
  for (let i = 0; i < N; i++) {
    diff.push(scores[i] - average);
  }
  const diffAbs = [];
  for (let i = 0; i < N; i++) {
    diffAbs.push(Math.abs(diff[i]));
  }

  const minDiffAbs = Math.min(...diffAbs);
  // obj = {} # {'12': 36, '22': 34, '32': 36, '42': 34, '52': 36}
  const obj = {};

  for (let i = 0; i < N; i++) {
    if (diffAbs[i] == minDiffAbs) {
      obj[i + 1] = scores[i];
    }
  }
  const sortDict = Object.entries(obj).map((e) => parseInt(e[0])); // key값 형변환
  // .sort((a,b)=> a[1] - b[1])
  // [
  //   [ 22, 34 ],
  //   [ 42, 34 ],
  //   [ 12, 36 ],
  //   [ 32, 36 ],
  //   [ 52, 36 ]
  // ]

  return [average, sortDict[0]].join(' ');
}

const input = `60
25 60 17 60 11 15 27 42 39 31 25 36 32 25 17 45 67 89 24 65 13 34 17 6 11 15 27 42 39 31 25 36 32 25 17 45 67 89 24 65 13 34 17 6 11 15 27 42 39 31 25 36 32 25 17 45 67 89 24 65`;
console.log(solution(input)); // 35 12
