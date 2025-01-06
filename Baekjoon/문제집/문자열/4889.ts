import * as fs from "fs";
const input: string[] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.replace(/\r/g, ""));

let i: number = 0;
while (1) {
  let testcase: string = input[i]; // 길이는 항상 짝수
  if (testcase.includes("-")) break;

  const cleanedString: string = getStableString(testcase);

  const isIncludeLeftSide: boolean = cleanedString.includes("{");
  const isIncludeRightSide: boolean = cleanedString.includes("}");

  let result: number = 0;
  if (isIncludeLeftSide && isIncludeRightSide) {
    const lastRightIndex: number = cleanedString.lastIndexOf("}");
    const rightSideCount: number = lastRightIndex + 1;
    const leftSideCount: number = cleanedString.length - rightSideCount;

    result += Math.ceil(rightSideCount / 2) + Math.ceil(leftSideCount / 2);
  } else {
    const sideCount: number = cleanedString.length;
    result = Math.ceil(sideCount / 2);
  }
  console.log(`${i + 1}. ${result}`);
  i++;
}

function getStableString(testcase: string) {
  let result: string = testcase;
  while (1) {
    const replacedTestcase: string = result.replace(/\{\}/g, "");
    if (result === replacedTestcase) break;
    result = replacedTestcase;
  }
  return result;
}
