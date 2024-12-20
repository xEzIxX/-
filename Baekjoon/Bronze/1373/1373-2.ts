// reduce를 이용한 풀이
import * as fs from "fs";
let binary: string = fs.readFileSync("input.txt", "utf-8").trim();

binary = binary.padStart(Math.ceil(binary.length / 3) * 3, "0");

const binarys = binary.match(/.{3}/g);

const result = binarys?.reduce(
  (acc, b) => acc + parseInt(b, 2).toString(8),
  ""
); // acc의 초기값 "" 설정

console.log(result);
