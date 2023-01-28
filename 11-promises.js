const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// };

// getText("./content/first.txt").then((res) => console.log(res));

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/results-mind-grenade.txt",
      `This is awesome: ${first}, ${second}`
    );
  } catch (err) {
    console.log(err);
  }
};

start();
