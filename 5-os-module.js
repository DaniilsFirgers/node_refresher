const os = require("os");
// info about the user
const user = os.userInfo();
console.log(user);

// method return the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
};
console.log(currentOS);
