const fs = require('fs');

const csv = fs.readFileSync('~/Desktop/Stops.csv', 'utf-8');
const lines = csv.split('\n');
const headings = lines[0].replace(/"/g, '').split(',');

const trams = lines
  .slice(1)
  .filter(line => {
    const fields = line.split(',');
    const CommonName = fields[headings.indexOf('CommonName')];
    return CommonName && CommonName.toLowerCase().indexOf('metrolink') !== -1;
  })
  .map(line => {
    const fields = line.split(',');
    const obj = {};
    fields.forEach((field, index) => {
      obj[headings[index]] = field.replace(/"/g, '');
    });
    return obj;
  });

fs.writeFileSync('trams.json', JSON.stringify(trams, 0, 2));
