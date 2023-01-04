const fs = require("fs");

const instructions = fs
  .readFileSync(`${__dirname}/../text_files/day2.txt`, "utf-8")
  .split("\n")
  .map((instruction) => instruction.split(" "))
  .map((instruction) => [instruction[0], parseInt(instruction[1])]);

function task1(instructions) {
  let forward = 0;
  let down = 0;

  instructions.forEach((instruction) => {
    switch (instruction[0]) {
      case "forward":
        forward += instruction[1];
        break;
      case "down":
        down += instruction[1];
        break;
      case "up":
        down -= instruction[1];
    }
  });

  return forward * down;
}

function task2(instructions) {
  let forward = 0;
  let depth = 0;
  let aim = 0;

  instructions.forEach((instruction) => {
    switch (instruction[0]) {
      case "forward":
        forward += instruction[1];
        depth += aim * instruction[1];
        break;
      case "down":
        aim += instruction[1];
        break;
      case "up":
        aim -= instruction[1];
    }
  });

  return forward * depth;
}

console.log(`solution task 1 = ${task1(instructions)}`);

console.log(`solution task 2 = ${task2(instructions)}`);
