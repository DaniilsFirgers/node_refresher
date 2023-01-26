const { readFile, writeFile } = require("fs");
console.log("starting...");

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) return;
  const first = res;
  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) return;
    const second = res;
    writeFile(
      "./content/result-async.txt",
      `here is the result ${first} and ${second}`,
      (err, res) => {
        if (err) return;
        console.log("finished!");
      }
    );
  });
});

console.log("ready to do another task!");
