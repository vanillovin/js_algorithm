const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

function solution1(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      // board[i][pos - 1] !== 0 '인형이 아닌 걸 만나면'
      if (board[i][pos - 1] !== 0) {
        // 꺼내고 0으로 바꿔야 함
        let tmp = board[i][pos - 1]; // 꺼냈으면
        board[i][pos - 1] = 0; // 0으로 빈 공간으로 만들기

        // 꺼낸 인형하고 바구니 상단 인형이 같은가?
        if (tmp === stack[stack.length - 1]) {
          stack.pop(); // tmp가 아직 안 들어갔으니, 상단 하나만 꺼내면 됨
          answer += 2; // 두 개 터졌으니까 +2
        } else {
          stack.push(tmp); // 다르더라! push
        }

        // 만약 pos가 0번(1) 열을 탐색할 때, 처음에 4번 인형을 꺼내고
        // 3도 꺼내서 2개를 꺼내버림! for 문을 멈춰야 인형을 하나만 꺼냄
        break;
      }
    }
  });

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4]; // 크레인이멈춘위치
console.log(solution(board, moves)); // 4
console.log(solution1(board, moves)); // 4
