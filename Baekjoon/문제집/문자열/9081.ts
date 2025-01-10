import * as fs from "fs";
const testcase: string[] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.replace(/\r/g, ""));

const testcaseCount = +testcase[0];
testcase.shift();

for (let i = 0; i < testcaseCount; i++) {
  const word = testcase[i];

  const nextWord: string = getNextPermutation(word);

  console.log(nextWord ?? "");
}

function getNextPermutation(word: string): string {
  const arr = word.split("");
  let i = arr.length - 2;

  while (i >= 0 && arr[i] >= arr[i + 1]) i--; // 뒤로 가면서 "감소"하는 접미사 찾기

  if (i < 0) return word; // 마지막 순열인 경우 문자 그대로 반환

  let j = arr.length - 1; // i 보다 큰 값 중 가장 작은 값 찾기
  while (arr[j] <= arr[i]) j--;

  [arr[i], arr[j]] = [arr[j], arr[i]];

  // arr에는 0~i 번째까지의 요소가 존재
  // nextPart에는 잘린 요소가 존재
  const nextPart = arr.splice(i + 1).reverse();

  return arr.concat(nextPart).join("");
}
