// R1과 S(R1+R2)/2를 통해 R2값을 구한다
import * as fs from "fs";
const [R1, S] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(2 * S - R1);
