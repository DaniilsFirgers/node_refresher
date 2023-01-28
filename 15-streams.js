// create big file
// const { writeFileSync, writeFile } = require("fs");
// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
// }
const { createReadStream } = require("fs");

// highwatermark -> size of the chunk in kilobytes
// encoding -> 'utf8' to get string

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 50000,
  //   encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});

stream.on("end", (data) => {
  console.log(data);
});
