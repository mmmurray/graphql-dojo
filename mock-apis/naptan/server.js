const { readFileSync } = require('fs');
const { join } = require('path');
const express = require('express');

const app = express();

const stops = JSON.parse(readFileSync(join(__dirname, 'data', 'stops.json'), 'utf-8'));

app.get('/stops', (req, res) => res.json(stops));

app.listen(3003, () => {
  console.log('Mock NaPTAN API running: http://localhost:3003/stops');
});
