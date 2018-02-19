'use strict';

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 8080;

const app = express();

// app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));

app.use(serveStatic(__dirname + "/dist"));
app.get('/', (req, res) => {
  res.render('index');
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
