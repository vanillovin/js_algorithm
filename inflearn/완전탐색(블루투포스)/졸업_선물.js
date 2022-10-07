// 그냥 다 해보는 것. 모든 경우를 다 탐색하는 것 => 완전 탐색
// 이 문제에서 모든 경우는? 어떤 상품을 할인받을지
// 1. 정렬 -> 28 - 배송비+상품가격 -> 남은 금액에서?
// 2 2 -> 4 3 -> 4 5 -> ... 이걸 할인받는다. 생각하고 다해보고
// 모든 상품을 다 할인받았다 가정하고 하는 수밖에 없음
// => 이런 생각을 해내야 한다..

function solution(M, products) {
  let answer = 0; // 몇 개 살 수 있는지 최대개수 카운팅
  let N = products.length;

  products.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 오름차순 정렬
  // 총비용으로정렬됨 [ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]

  for (let i = 0; i < N; i++) {
    // i번째 상품을 할인받는다

    // 상품 가격은 항상 짝수로만 입력되므로 -> /2
    let leftMoney = M - (products[i][0] / 2 + products[i][1]); //남은예산=>원래예산-(상품가격/2+배송비)

    let cnt = 1; // 몇개까지살수있는지카운팅
    for (let j = 0; j < N; j++) {
      // 밑에 if가 참이 아닐 때 카운팅 되진 않겠지만 학생수가 많으면 계속 돌아서 break
      // j번째 상품을 사는 총 비용이 남은 예산보다 크면 -> break
      if (j !== i && products[j][0] + products[j][1] > leftMoney) break;

      // 정렬된 순서(최소비용)대로 남은 금액으로 살 수 있는 것들 다 사기
      // "갯수가 중요"하니 비용이 작은 것들로 사야 최대 갯수로 많이 살 수 있음

      // i 는 할인된 상품이라 사면 안됨
      //  && 사려고 하는 j 번째 상품 총비용 금액이 남은 예산보다 작거나 같아야 함
      if (j !== i && products[j][0] + products[j][1] <= leftMoney) {
        leftMoney -= products[j][0] + products[j][1];
        cnt++; // 상품을 하나 더 샀다
      }
    }

    // j가 다 돌고
    answer = Math.max(answer, cnt);
  }

  return answer;
}

const param = {
  m: 28,
  arr: [
    [6, 6], // 이 상품이 할인받는다 해보고
    [2, 2], // 이 상품이 할인받는다 해보고
    [4, 3], // ... 다해보고
    [4, 5],
    [10, 3],
  ],
};
const param1 = {
  m: 41,
  arr: [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ],
};
const param2 = {
  m: 596,
  arr: [
    [6, 331],
    [4, 251],
    [8, 675],
    [5, 214],
    [10, 735],
    [5, 996],
    [9, 609],
    [9, 371],
    [8, 377],
    [5, 707],
    [7, 907],
    [6, 433],
    [9, 737],
    [8, 796],
    [4, 265],
    [3, 484],
    [8, 488],
    [8, 191],
    [9, 232],
    [4, 195],
  ],
};
const param3 = {
  m: 41,
  arr: [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ],
};

console.log(solution(param.m, param.arr)); // 4
console.log(solution(param1.m, param1.arr)); // 5
console.log(solution(param2.m, param2.arr)); // 2
console.log(solution(param3.m, param3.arr)); // 5

function getPresentStudent(maxMoney, product) {
  let answer = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < product.length; i++) {
    let buySaleLeftMoney = maxMoney - (product[i][0] * 0.5 + product[i][1]);
    let count = 1;
    for (let j = 0; j < product.length; j++) {
      if (j === i) continue;
      buySaleLeftMoney -= product[j][0] + product[j][1];
      count++;
      if (buySaleLeftMoney <= 0) {
        answer = count;
        break;
      }
    }
  }
  return answer;
}

console.log(getPresentStudent(param.m, param.arr)); // 4
console.log(getPresentStudent(param1.m, param1.arr)); // 5
console.log(getPresentStudent(param2.m, param2.arr)); // 2
console.log(getPresentStudent(param3.m, param3.arr)); // 5
