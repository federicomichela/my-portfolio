'use strict';

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(serveStatic(__dirname + "/dist"));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
