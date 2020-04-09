const args = process.argv.slice(2);
const fs = require('fs');
const host = args[0];
const path = args[1];

const request = require('request');
request(host, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (err) throw err;
  });
  console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`)
});