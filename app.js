// var stuffs = require("./stuff"); /* Importing a file */

// let elements = ["Stroge", "Dev-Stroge", "Timmy-STroge", "Stroge-Dev"];
// console.log(stuffs.count(elements));
// console.log(stuffs.adder(2,5));
// console.log(stuffs.pi);

// !EVENT  MODULE
// var events = require('events');

// var myEmmiter = new events.EventEmitter();

// myEmmiter.on('someevent', function(msg) {
//     console.log(msg)
// })
// myEmmiter.emit('someevent', 'hello world');

// !UTILITY MODULE
// var events = require("events");
// var util = require("util");

// let Person = function (name) {
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person("james");
// var mary = new Person("mary");
// var ryu = new Person("ryu");

// var people = [james, mary, ryu];
// people.forEach((person) => {
//   person.on("speak", function (msg) {
//     console.log(person.name + ": " + msg);
//   });
// });

// james.emit("speak", "Hey Dudes");
// ryu.emit("speak", "Hey Dudes from ryu");

// ! READING AND WRITING FILES
// Synchronous Version
// var fs = require("fs"); /* fs => File System */
// var readme = fs.readFileSync('node.txt', 'utf8');
// fs.writeFileSync('writeme.txt', readme);
// console.log(fs.readFileSync('writeme.txt', 'utf8'));

// async Version
// var fs = require("fs"); /* fs => File System */
// fs.readFile("node.txt", "utf8", function(err, data) {
// console.log(data)
// });

// ! DELETING A FILE
// var fs = require('fs');
// fs.unlinkSync('u.txt');

// ! CREATE AND REMOVE DIRECTORIES
// var fs = require("fs");
// fs.mkdirSync("stuff");
// fs.rmdirSync("stuff");

// async
// fs.mkdir("lol", function () {
//   fs.readFile("node.txt", "utf8", function (err, data) {
//     fs.writeFileSync(`lol/lol2.js`, data, function (err, res) {
//       console.log("done man");
//     });
//   });
// });

// !deleting file and folders 
// fs.unlink("./lol/lol2.txt", function () {
//   fs.rmdir("lol", function () {});
// });

// var fs = require('fs');
// fs.unlink('filename', () => {})
