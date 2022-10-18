function solution(input = '10 3\n13 15 34 23 45 65 33 11 26 42') {
  const [_, nums] = input.split('\n');
  const [N, K] = _.split(' ');
  const arr = nums.split(' ').map(Number); // ❓
  let set = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        set.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  // Array.from() 함수는 유사배열객체나 반복가능객체를 얕은 복사하여 새로운 배열을 만듦
  // 유사배열객체(array-like object) : length 속성과 index element를 가지는 객체
  // 반복가능객체(iterable object) : 배열을 일반화한 객체 ex) Map, Set
  return Array.from(set).sort((a, b) => b - a)[K - 1];
}

console.log(solution()); // 143

function solution1(n, k, card) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution1(10, 3, arr)); // 143
