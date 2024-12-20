import * as fs from "fs";
let binary: string = fs.readFileSync("input.txt", "utf-8").trim();

// 3의 배수의 길이로 만들어놓음
binary = binary.padStart(Math.ceil(binary.length / 3) * 3, "0");

// 3칸씩 자름
let binarys: Array<string> | null = binary.match(/.{3}/g);

let result = "";
if (binarys !== null) {
  // 각각 8진수로 변환하여 묶음
  binarys.forEach((b) => {
    result += parseInt(b, 2).toString(8);
  });

  console.log(result);
}
