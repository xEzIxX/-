// 주어진 9개의 수 중에 합이 100인 수를 오름차순으로 출력

import * as fs from "fs";
const nineDwarfs: Array<number> = fs
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

const numberBeOut = nineDwarfs.reduce((acc, d) => acc + d, 0) - 100;
const sortednineDwarfs = nineDwarfs.sort((a, b) => a - b);

let isResult: boolean = false;

for (let i = 8; i > 0; i--) {
  if (numberBeOut < sortednineDwarfs[i]) continue;

  for (let j = i - 1; j >= 0; j--) {
    isResult = nineDwarfs[j] + nineDwarfs[i] === numberBeOut;
    if (isResult) {
      nineDwarfs.splice(i, 1);
      nineDwarfs.splice(j, 1);
      console.log(nineDwarfs.join("\n"));
      break;
    }
  }
  if (isResult) break;
}
