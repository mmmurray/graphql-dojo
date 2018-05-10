import nock from 'nock';
import mockTfgmData from '../mock-apis/tfgm/data/metrolinks.json';
import mockNaptanData from '../mock-apis/naptan/data/stops.json';
import { tfgmBaseUrl, naptanBaseUrl } from '../src/server/config.json';

nock(tfgmBaseUrl)
  .get('/odata/Metrolinks')
  .reply(200, JSON.stringify(mockTfgmData))
  .persist();

nock(naptanBaseUrl)
  .get('/stops')
  .reply(200, JSON.stringify(mockNaptanData))
  .persist();
