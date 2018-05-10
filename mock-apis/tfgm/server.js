const { readFileSync } = require('fs');
const { join } = require('path');
const express = require('express');

const app = express();

const metrolinks = JSON.parse(readFileSync(join(__dirname, 'data', 'metrolinks.json'), 'utf-8'));

app.get('/odata/Metrolinks', (req, res) => res.json(metrolinks));

app.listen(3002, () => {
  console.log('Mock TFGM API running: http://localhost:3002/odata/Metrolinks');
});
