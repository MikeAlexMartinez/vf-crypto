require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const apiv1 = require('./api/v1');

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// V1 of app api
app.use('/api/v1', apiv1);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
