// The Coding Train
// Coding Challenge 122.1
// Quick Draw
// https://youtu.be/yLuk0twx8Hc
// https://thecodingtrain.com/CodingChallenges/122.1-quick-draw
// Part 2: https://youtu.be/EcRK6oFddPQ
// https://thecodingtrain.com/CodingChallenges/122.2-quick-draw
// @ts-ignore

const fs = require('fs');
const ndjson = require('ndjson');

let tornadoes = [];
fs.createReadStream('tornado.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj) {
    tornadoes.push(obj);
  });

// let cats = [];
// fs.createReadStream('cat.ndjson')
//   .pipe(ndjson.parse())
//   .on('data', function(obj) {
//     cats.push(obj);
//   });

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/tornado', (request, response) => {
  const index = Math.floor(Math.random() * tornadoes.length);
  response.send(tornadoes[index]);
});

// app.get('/tornado', (request, response) => {
//   const index = Math.floor(Math.random() * cats.length);
//   response.send(cats[index]);
// });

app.use(express.static('public'));