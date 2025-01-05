import * as fs from "fs";
const input: string[] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.replace(/\r/g, ""));

let count = 0;

while (+input[count] !== 0) {
  const testcase = +input[count];
  const words = input.slice(count + 1, count + testcase + 1);

  const sortedWord = words
    .map((word) => ({ original: word, lower: word.toLowerCase() }))
    .sort((a, b) => a.lower.localeCompare(b.lower));

  count += testcase + 1;
  console.log(sortedWord[0].original);
}
