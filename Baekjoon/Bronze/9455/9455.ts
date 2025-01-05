import * as fs from "fs";
const input: string[] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.replace(/\r/g, ""));

const count = +input[0];
let row = 1;

for (let testcase = 0; testcase < count; testcase++) {
  const [m, n]: number[] = input[row].split(" ").map(Number);

  const arr: number[][] = input
    .slice(row + 1, row + 1 + m)
    .map((line) => line.split(" ").map(Number))
    .reverse();

  // 전치 행렬
  const transposedArr: number[][] = arr[0].map((_, colIndex) =>
    arr.map((row) => row[colIndex])
  );

  const sum = calculateMovementFromIndex(transposedArr);

  row += m + 1;
  console.log(sum);
}

function calculateMovementFromIndex(arr: number[][]): number {
  let result = 0;
  arr.forEach((row) => {
    const filteredIndexes: number[] = [];

    row.forEach((element, index) => {
      if (element === 1) filteredIndexes.push(index);
    });

    result += calculateRowMovement(filteredIndexes);
  });
  return result;
}

function calculateRowMovement(filteredIndexes: number[]): number {
  let sum = 0;

  if (filteredIndexes.length === 1) {
    return filteredIndexes[0];
  }

  for (let i = 0; i < filteredIndexes.length; i++) {
    if (i === 0 && filteredIndexes[0] !== 0) {
      sum += filteredIndexes[0];
      filteredIndexes[0] = 0;
    } else if (i > 0) {
      const diff = filteredIndexes[i] - filteredIndexes[i - 1] - 1;
      sum += Math.max(0, diff);
      filteredIndexes[i] = filteredIndexes[i - 1] + 1;
    }
  }

  return sum;
}
