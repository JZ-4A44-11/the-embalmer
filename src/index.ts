import http from "http";

const server = http
  .createServer((req, res) => {
    res.end("The Show Must Go On");
  })
  .listen(4001);
