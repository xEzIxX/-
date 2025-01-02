import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
const testcase = +input[0];

for (let i = 1; i <= testcase; i++) {
  const studentInfo = input[i].split(" ");

  const studentCount: number = +studentInfo[0];
  const studentScore: number[] = studentInfo.slice(1).map(Number);

  const studentsAboveAverage: number = getStudentsAboveAverage(
    studentCount,
    studentScore
  );
  console.log(`${studentsAboveAverage.toFixed(3)}%`);
}

function getStudentsAboveAverage(
  studentCount: number,
  studentScore: number[]
): number {
  const average: number = getStudentAverage(studentCount, studentScore);

  const aboveAverage: number = studentScore.filter(
    (score) => score > average
  ).length;
  const studentsAboveAverage: number = (aboveAverage / studentCount) * 100;
  return studentsAboveAverage;
}

function getStudentAverage(
  studentCount: number,
  studentScore: number[]
): number {
  const studentSum: number = studentScore.reduce((acc, cur) => acc + cur, 0);
  const average: number = studentSum / studentCount;
  return average;
}
