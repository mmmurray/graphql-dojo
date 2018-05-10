import fetch from 'node-fetch';
import { tfgmBaseUrl, tfgmApiKey, naptanBaseUrl } from './config';

const fetchTramData = () =>
  fetch(`${tfgmBaseUrl}/odata/Metrolinks`, {
    method: 'GET',
    headers: { 'Ocp-Apim-Subscription-Key': tfgmApiKey },
  }).then(res => res.json());

const fetchNaptanData = () => fetch(`${naptanBaseUrl}/stops`).then(res => res.json());

export { fetchTramData, fetchNaptanData };
