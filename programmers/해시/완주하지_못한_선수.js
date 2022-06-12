// 다른 사람 풀이..b
var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

function mySolution(participant, completion) {
  let answer = '';
  let participantObj = {};

  participant.forEach((v) => {
    if (participantObj[v] > 0) participantObj[v] += 1;
    else participantObj[v] = 1;
  });

  completion.forEach((v) => (participantObj[v] -= 1));

  Object.keys(participantObj).forEach((v) => {
    if (participantObj[v] > 0) answer = v;
  });

  return answer;
}

console.log(mySolution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // 'leo''
console.log(
  mySolution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
); // 'vinko'
console.log(
  mySolution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
); // 'mislav'
