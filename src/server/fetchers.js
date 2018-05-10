import fetch from 'node-fetch';
import { tfgmBaseUrl } from './config';

const fetchTramData = () => fetch(`${tfgmBaseUrl}/odata/Metrolinks`).then(res => res.json());

export { fetchTramData };
