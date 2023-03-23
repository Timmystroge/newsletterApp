var http = require("http");
var fs = require("fs");
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')
// myReadStream.on('data', function(chunk){
//     console.log('new chunk received')
//     // console.log(chunk);
//     myWriteStream.write(chunk)
// })

// using pipe
//! serving html data
// var server = http.createServer(function (req, res) {
//   console.log("request ws made " + req.url);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//   myReadStream.pipe(res);
//   //   res.end("hey ninjas");
// });

// server.listen(3000, "127.0.0.1");
// console.log("Now listening to port 3000")

//! serving json data
// let myServer = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   var myObj = {
//     name: "ryu",
//     job: "ninja",
//     age: 29,
//   };

//   res.end(JSON.stringify(myObj));
// });

// myServer.listen(3000);
// console.log("Server started at 3000");

//!serving pages with different routes
let server = http.createServer(function (req, res) {
  console.log(`New Request was made ${req.url}`);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/ninjas") {
    var ninjas = [
      {
        name: "ryu",
        age: 29,
      },
      {
        name: "yoshi",
        age: 19,
      },
      {
        name: "dark",
        age: 15,
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

server.listen(3000);
console.log("Fam! server started on Port 3000");
