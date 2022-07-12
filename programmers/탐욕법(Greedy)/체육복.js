function solution(n, lost, reserve) {
  let students = Array.from({ length: n }).fill(1);

  lost.forEach((target) => {
    students[target - 1]--;
  });

  reserve.forEach((target) => {
    students[target - 1]++;
  });

  for (let i = 0, len = students.length; i < len; i++) {
    if (students[i] === 0 || students[i] === 1) continue;
    if (i !== 0 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    }
    if (students[i] > 1 && i + 1 !== len && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  return students.filter((v) => v >= 1).length;
}

function solution1(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4

console.log(solution1(5, [2, 4], [1, 3, 5])); // 5
console.log(solution1(5, [2, 4], [3])); // 4
