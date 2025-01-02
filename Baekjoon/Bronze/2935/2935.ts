import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, op, B] = input.map((v) => v.trim());

const result =
  op == "+"
    ? (BigInt(A) + BigInt(B)).toString()
    : (BigInt(A) * BigInt(B)).toString();

console.log(result);
