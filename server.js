const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// serves files from our dist directory which now contains out index.html file
app.use('/', serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8080;
app.listen(port);

console.log('listening on port: ' + port);