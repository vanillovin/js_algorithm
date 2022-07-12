function mySolution(n) {
  for (let i = 0; i < n; i++) {
    while (n % i === 1) {
      return i;
    }
  }
}

function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

console.log(mySolution(10)); // 3
console.log(solution(10)); // 3
