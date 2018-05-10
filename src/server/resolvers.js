import { groupBy, uniqBy, isEqual, sortBy } from 'lodash/fp';
import { fetchTramData } from './fetchers';

const createCarriages = tram =>
  [tram.Carriages0, tram.Carriages1, tram.Carriages2, tram.Carriages3]
    .filter(Boolean)
    .map(size => ({ size }));

const createTram = tram => ({
  id: tram.Id,
  line: tram.Line,
  direction: tram.Direction,
  station: tram.StationLocation,
  carriages: createCarriages(tram),
});

const createStation = data => {
  const trams = [];

  for (let i = 0; i < 4; i++) {
    if (data[`Dest${i}`]) {
      trams.push({
        destination: { name: data[`Dest${i}`] },
        due: Number(data[`Wait${i}`]),
        size: data[`Carriages${i}`],
      });
    }
  }

  return {
    name: data.StationLocation,
    trams,
  };
};

const resolvers = {
  Query: {
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
  },
};

export default resolvers;
