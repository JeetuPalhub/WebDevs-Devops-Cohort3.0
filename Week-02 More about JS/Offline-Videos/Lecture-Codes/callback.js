// A callback is a function passed into another function as an argument to be “called back” later.

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File contents:", contents);
});
