// 투 포인터 방식

import * as fs from "fs";
const nineDwarfs: Array<number> = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

nineDwarfs.sort((a, b) => a - b);

const total = nineDwarfs.reduce((acc, d) => acc + d, 0);
const targetSum = total - 100;

let left = 0;
let right = nineDwarfs.length - 1;

while (left < right) {
  let targetDwarfs = nineDwarfs[left] + nineDwarfs[right];

  if (targetDwarfs === targetSum) {
    const result = nineDwarfs.filter((_, idx) => idx !== left && idx !== right);
    console.log(result.join("\n"));
    break;
  } else if (targetDwarfs > targetSum) {
    right--;
  } else {
    left++;
  }
}
