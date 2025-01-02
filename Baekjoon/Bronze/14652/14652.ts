// 관중석의 왼쪽 위는 (0, 0), 오른쪽 아래는 (N-1, M-1)으로 표시
import * as fs from "fs";
const [N, M, K] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const q = Math.floor(K / M); // 몫
const r = K % M; // 나머지

console.log(q, r);
