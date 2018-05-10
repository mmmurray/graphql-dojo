import { groupBy, uniqBy, isEqual, sortBy, mapValues, flatten, unzipWith } from 'lodash/fp';
import { fetchTramData, fetchNaptanData } from './fetchers';

const createStation = data => {
  const trams = [];

  for (let i = 0; i < 4; i++) {
    if (data[`Dest${i}`]) {
      trams.push({
        destination: { name: data[`Dest${i}`] },
        due: Number(data[`Wait${i}`]),
        size: data[`Carriages${i}`] === 'Double' ? 2 : 1,
      });
    }
  }

  return {
    name: data.StationLocation,
    trams,
    AtcoCode: data.AtcoCode,
  };
};

const getStations = async () => {
  const tramData = await fetchTramData();
  const stations = tramData.value.map(createStation);
  const groupedStations = groupBy('name', stations);

  return mapValues(
    station =>
      station.reduce((acc, s) => ({ AtcoCode: s.AtcoCode, trams: [...acc.trams, ...s.trams] }), {
        trams: [],
      }),
    groupedStations,
  );
};

const resolvers = {
  Query: {
    stations: async () => {
      const stations = await getStations();

      return Object.keys(stations).map(name => ({ name }));
    },
    station: (root, { name }) => {
      return { name };
    },
  },
  Station: {
    trams: async root => {
      const tramData = await fetchTramData();
      const stations = tramData.value.map(createStation);
      const groupedStations = groupBy('name', stations);
      const station = groupedStations[root.name];
      if (!station) {
        return [];
      }
      const allTrams = station.reduce((acc, { trams }) => [...acc, ...trams], []);
      const trams = sortBy('due', uniqBy(JSON.stringify, allTrams));
      return trams;
    },
    location: async root => {
      const stations = await getStations();
      const station = stations[root.name];
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
