const EventEmitter = require("events");

const customEmmiter = new EventEmitter();

customEmmiter.on("response", (name, id) => {
  console.log(`Data receiveed ${name}, ${id}`);
});

customEmmiter.on("response", () => {
  console.log(`111 Data receiveed`);
});

customEmmiter.emit("response", "john", 34);
