const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js server");
  res.end();
});
console.log('hi')
server.listen(3000, () => {
  console.log("Server running on port 3000");
});