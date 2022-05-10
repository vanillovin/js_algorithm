function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function mySolution(arr) {
  let answer = [];

  for (let x of arr) {
    const reverseNum = Number(String(x).split('').reverse().join(''));
    if (isPrime(reverseNum)) answer.push(reverseNum);
  }

  return answer;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

console.log(mySolution([32, 55, 62, 20, 250, 370, 200, 30, 100])); // 23 2 73 2 3
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100])); // 23 2 73 2 3
