import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

let count: number = 0;

for (let i = 0; i < 8; i++) {
  let eightNumbers: Array<string> = input[i].split("").slice(0, 8);

  eightNumbers.forEach((num, index) => {
    // 흰 칸인지 확인 (i와 index의 짝수 여부가 동일한 경우 흰 칸)
    const isWhiteSpace =
      (i % 2 === 0 && index % 2 === 0) || (i % 2 === 1 && index % 2 === 1);

    // 흰 칸에 "F"가 있는 경우 카운트 증가
    if (isWhiteSpace && num === "F") count++;
  });
}

console.log(count);
