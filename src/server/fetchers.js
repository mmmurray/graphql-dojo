import fetch from 'node-fetch';
import { tfgmBaseUrl, tfgmApiKey } from './config';

const headers = {
  'Ocp-Apim-Subscription-Key': tfgmApiKey,
};

const fetchTramData = () =>
  fetch(`${tfgmBaseUrl}/odata/Metrolinks`, { method: 'GET', headers }).then(res => res.json());

export { fetchTramData };
