// 더 나은 풀이
// 주어진 9개의 수 중에 합이 100인 수를 오름차순으로 출력

import * as fs from "fs";
const nineDwarfs: Array<number> = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

const total = nineDwarfs.reduce((acc, d) => acc + d, 0);
const targetSum = total - 100;

let result: number[] = [];

// outer라는 이름이 붙은 label과 이중 for 루프는 여러 중첩 루프를 한 번에 종료함
outer: for (let i = 0; i < nineDwarfs.length; i++) {
  for (let j = i + 1; j < nineDwarfs.length; j++) {
    if (nineDwarfs[i] + nineDwarfs[j] === targetSum) {
      result = nineDwarfs.filter((_, idx) => idx !== i && idx !== j);
      break outer;
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.join("\n"));
