// greedy 알고리즘 사용

import * as fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((row) => row.replace(/\r/g, ""));

const count: number = +input[0];
input.shift();

const sortedWords: string[] = input.sort().sort((a, b) => b.localeCompare(a));

for (let currentIdx = count - 1; currentIdx > 0; currentIdx--) {
  let currentWord: string = sortedWords[currentIdx];

  for (let frontIdx = currentIdx - 1; frontIdx >= 0; frontIdx--) {
    const isPrefix: boolean = sortedWords[frontIdx].startsWith(currentWord);

    if (isPrefix) {
      sortedWords.splice(currentIdx, 1);
      break;
    }
  }
}

console.log(sortedWords.length);
