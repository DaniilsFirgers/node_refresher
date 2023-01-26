const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log("start");

// flag: 'a' to append to the file
writeFileSync("./content/result.txt", "Hello this is the result...", {
  flag: "a",
});
console.log("done with the task");
