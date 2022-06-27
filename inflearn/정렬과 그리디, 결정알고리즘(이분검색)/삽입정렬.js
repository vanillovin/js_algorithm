function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      console.log('tmp', tmp, 'i', i, 'j', j);
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break; // tmp보다 작은 값이 발견되면 멈춤
      // 멈춘 곳이 j 지점
    }
    arr[j + 1] = tmp;
  }

  return answer;
}

function solution1(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let tmp = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[tmp] < arr[j]) {
        [arr[j], arr[tmp]] = [arr[tmp], arr[j]];
        tmp--;
      }
    }
  }
  return answer;
}

let arr = [11, 7, 4, 5, 10, 9];
console.log(solution(arr)); // [ 4, 5, 7, 9, 10, 11 ]
console.log(solution1(arr)); // [ 4, 5, 7, 9, 10, 11 ]
