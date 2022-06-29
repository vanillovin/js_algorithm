// vertex 정점 노드?
function solution(v) {
  let answer;

  function DFS(v) {
    // 모르겠으면 if else 라도 하기
    if (v > 7) return;
    else {
      // else 쪽에서 호출하기 전에 console 찍어보기
      // console.log(v); // 전위순회 - 1 2 4 5 3 6 7
      DFS(v * 2);
      // console.log(v); // 중위순회 - 4 2 5 1 6 3 7
      DFS(v * 2 + 1);
      console.log(v); // 후위순회 - 4 5 2 6 7 3 1
    }
  }
  DFS(v);

  return answer;
}

console.log(solution(1));
