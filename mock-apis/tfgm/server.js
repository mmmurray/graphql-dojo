const { readFileSync } = require('fs');
const { join } = require('path');
const express = require('express');

const app = express();

const loadData = name => JSON.parse(readFileSync(join(__dirname, 'data', name), 'utf-8'));

app.get('/odata/Metrolinks', (req, res) => res.json(loadData('2018-04-30_07:31:29.json')));

app.listen(3002, () => {
  console.log('Mock TFGM API running: http://localhost:3002/odata/Metrolinks');
});
