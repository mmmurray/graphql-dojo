import { fetchNaptanData, fetchTramData } from './fetchers';
import transformTramData from './helpers/transform-tram-data';

const getStations = async () => transformTramData(await fetchTramData());

const getStation = async name => (await getStations())[name];

const resolvers = {
  Query: {
    stations: async () => Object.keys(await getStations()).map(name => ({ name })),
    station: (root, { name }) => ({ name }),
  },
  Station: {
    trams: async root => {
      const station = await getStation(root.name);
      return station ? station.trams : [];
    },
    location: async root => {
      const station = await getStation(root.name);
      const stops = await fetchNaptanData();
      const stop = stops.find(stop => stop.ATCOCode === station.AtcoCode);

      return {
        lat: Number(stop.Latitude),
        lon: Number(stop.Longitude),
      };
    },
  },
};

export default resolvers;
