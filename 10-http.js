const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.end(
      "<h1>Welcome to the home page</h1> <p>You are on the home page</p>"
    );
  } else {
    res.end("Cannot find the page you are lookign for");
  }
});
server.listen(5000);
