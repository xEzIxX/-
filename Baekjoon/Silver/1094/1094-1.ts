import * as fs from "fs";

function calculate() {
  const initialValue: number = 64;
  const result: number[] = [initialValue];

  if (X === 64) {
    console.log(1);
    return;
  }

  while (1) {
    const min = Math.min(...result);
    const minIndex = result.indexOf(min);
    result.splice(minIndex, 1);

    const half = min / 2;

    result.unshift(half);

    const sum = result.reduce((acc, cur) => acc + cur, 0);

    if (sum > X) {
      continue;
    } else if (sum === X) {
      console.log(result.length);
      break;
    }

    result.unshift(half);
  }
}

let X: number = +fs.readFileSync("input.txt", "utf-8");
toString().trim().split(" ").map;

if (X === 64) {
  console.log(1);
} else {
  calculate();
}
