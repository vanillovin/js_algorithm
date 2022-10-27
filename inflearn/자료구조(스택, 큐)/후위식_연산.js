function solution(str) {
  let stack = [];
  for (let s of str) {
    if (!isNaN(s)) {
      // 숫자를 만나면
      stack.push(Number(s));
    } else {
      // 연산자를 만나면, stack에서 두 개를 꺼내는데
      let rt = stack.pop(); // 먼저 꺼낸 게 rt
      let lt = stack.pop(); // 나중에 나오는 게 lt

      // 연산자가 +-*/ 중 먼지 모르니까
      if (s === '+') stack.push(lt + rt);
      else if (s === '-') stack.push(lt - rt);
      else if (s === '*') stack.push(lt * rt);
      else if (s === '/') stack.push(lt / rt);
    }
  }
  return stack[0];
}

// 중위식 3*(5+2)-9 => 352+*9- 후위식
// 5 + 3 => 53+
let str = '352+*9-';
console.log(solution(str)); // 12
