// 입력에 괄호가 들어오면 열의 여덟은 스택 문제임

// 1. 여는 괄호를 만나면 무조건 stack에 push
// ( = 막대기의 시작점 or 레이저의 여는 괄호

// 2. 닫는 괄호를 만났을 땐 막대기의 끝인지 레이저인지 살펴봐야 함
// - 레이저
// 만약 바로 앞에 i 번째에서 만났다면 i-1 번째가 여는 괄호면 레이저임
// i-1('(')  i(')') / 아니면 막대기의 끝!
// => 그리고 무조건 하나는 pop! 레이저의 여는 괄호이므로
// answer += stack.size (stack에있는여는괄호들은막대기들)
// - 막대기
// 닫는 괄호를 만나서 앞을 봤더니 여는 괄호가 아니면 막대기의 끝임
// 그러면 막대기가 끝났으니까 그 막대기의 여는 괄호는 스택에서 pop 하고 + 1

function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      stack.pop();

      // 레이저일때
      if (str[i - 1] === '(') answer += stack.length;
      // 막대기의끝
      else answer += 1;
    }
  }

  return answer;
}

function solution1(s) {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      // 닫는 괄호
      cnt--;
      if (s[i - 1] === '(') {
        // 레이저인 경우
        answer += cnt;
      } else {
        // 레이저가 아닌 경우
        answer += 1;
      }
    } else {
      //여는 괄호
      cnt++;
    }
  }
  return answer;
}

function solution2(s) {
  let a = s.split('');
  let laser = (sum = originPos = 0);
  let stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (a[i] === '(' && a[i + 1] === '(') {
      originPos = i;
      do {
        if (a[i] === '(') sum++;
        else sum--;
        if (a[i] === '(' && a[i + 1] === ')') laser++;
        ++i;
      } while (sum !== 0);
      i = originPos;
      stack.push([i, laser + 1]);
      sum = laser = 0;
    }
  }
  sum = stack.reduce((acc, v) => {
    return acc + v[1];
  }, 0);
  return sum;
}

const a = '(((()())(())()))';
console.log(solution(a)); // 15
console.log(solution1(a)); // 15
console.log(solution2(a)); // 15

const b = '()(((()())(())()))(())';
console.log(solution(b)); // 17
console.log(solution(b)); // 17
console.log(solution1(b)); // 17

const c = '(((()(()()))(())()))(()())';
console.log(solution1(c)); // 24
console.log(solution2(c)); // 24
console.log(solution2(c)); // 24
