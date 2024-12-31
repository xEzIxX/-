import * as fs from "fs";
const [up, down, height]: bigint[] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

if (up > height) {
  console.log(1);
} else {
  const afterdayHeight: bigint = up - down;
  const day: bigint = (height - up + 1n) / afterdayHeight; // Math.ceil은 number만 가능

  const result = afterdayHeight * (day - 1n) + down >= height ? day - 1n : day;
  console.log(result.toString());
}
