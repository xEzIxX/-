import * as fs from "fs";
const coordinates = fs.readFileSync("input.txt").toString().trim().split("\n");

// 0으로 초기화된 고정적인 100*100 배열 생성
const arr: number[][] = Array.from(Array(100), () => Array(100).fill(0));

for (let i = 0; i < coordinates.length; i++) {
  const [x1, y1, x2, y2]: number[] = coordinates[i]
    .replace(/\r/g, "")
    .split(" ")
    .map(Number);

  for (let start = x1; start < x2; start++) {
    for (let end = y1; end < y2; end++) {
      if (arr[start][end] === 1) continue;
      arr[start][end] = 1;
    }
  }
}

const count = arr.flat().filter((value) => value === 1).length;
console.log(count);
