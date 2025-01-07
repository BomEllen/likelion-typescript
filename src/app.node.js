// const http = require("node:http");

// http://localhost:4000

import http from "node:http";


const HOSTNAME = "localhost";
const PORT = 4000;

const server = http.createServer((request, response) => {

  console.log(request.url)
  console.log(request.qurery)


  
  response.end(/* html */ `
      <!doctype html>
      <html lang="ko-KR">
        <head>
          <meta charset="utf-8"/>
          <title>TypeScript 에센셜</title>
        </head>
        <body>
          <h1>타입스크립트 에센셜</h1>
        </body>
      </html>
    `);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`서버 구동 http://${HOSTNAME}:${PORT}`);
});
