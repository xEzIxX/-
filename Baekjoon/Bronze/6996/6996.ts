import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
const testcase = +input[0];

function areAnagrams(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  const aArr: string[] = a.split("").sort();
  const bArr: string[] = b.split("").sort();

  return JSON.stringify(aArr) === JSON.stringify(bArr);
}

for (let i = 1; i <= testcase; i++) {
  const [a, b] = input[i].split(" ").map((s) => s.trim());

  const getIsAnagrams = areAnagrams(a, b);

  const result = getIsAnagrams
    ? `${a} & ${b} are anagrams.`
    : `${a} & ${b} are NOT anagrams.`;

  console.log(result);
}
