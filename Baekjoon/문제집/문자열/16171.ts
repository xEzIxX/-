import * as fs from "fs";
const input: string[] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.replace(/\r/g, ""));

const S = input[0];
const K = input[1];

const filteredNumberS = S.replace(/[0-9]/g, "");
const isIncluded = filteredNumberS.includes(K);

isIncluded ? console.log(1) : console.log(0);
