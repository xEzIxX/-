// replace를 이용한 풀이
import * as fs from "fs";
let binary: string = fs.readFileSync("input.txt", "utf-8").trim();

binary = binary.padStart(Math.ceil(binary.length / 3) * 3, "0");

const result = binary.replace(/.{1,3}/g, (b) => parseInt(b, 2).toString(8));
console.log(result);
