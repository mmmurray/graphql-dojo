import nock from 'nock';
import mockTfgmData from './data/tfgm-mock-data.json';
import { tfgmBaseUrl } from '../src/server/config.json';

nock(tfgmBaseUrl)
  .get('/odata/Metrolinks')
  .reply(200, JSON.stringify(mockTfgmData))
  .persist();
