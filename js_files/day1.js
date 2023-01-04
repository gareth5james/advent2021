const fs = require("fs");

const sonar = fs
  .readFileSync(`${__dirname}/../text_files/day1.txt`, "utf-8")
  .split("\n");

function task1(sonar) {
  let count = 0;

  for (let i = 1; i < sonar.length; i++) {
    if (sonar[i] > sonar[i - 1]) count++;
  }

  return count + 1;
}

function task2(sonar) {
  let count = 0;

  const newSonar = [];

  for (let i = 0; i < sonar.length - 2; i++) {
    newSonar.push(
      parseInt(sonar[i]) + parseInt(sonar[i + 1]) + parseInt(sonar[i + 2])
    );
  }

  for (let i = 1; i < newSonar.length; i++) {
    if (newSonar[i] > newSonar[i - 1]) count++;
  }

  return count + 1;
}

console.log(`task 1 depth increases ${task1(sonar)} times`);

console.log(`task 1 depth increases ${task2(sonar)} times`);
