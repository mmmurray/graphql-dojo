import fetch from 'node-fetch';

const fetchTramData = () =>
  fetch('http://localhost:3002/odata/Metrolinks').then(res => res.json());

const createCarriages = tram =>
  [tram.Carriages0, tram.Carriages1, tram.Carriages2, tram.Carriages3]
    .filter(Boolean)
    .map(size => ({ size }));

const createTram = tram => ({
  id: tram.Id,
  line: tram.Line,
  direction: tram.Direction,
  station: tram.StationLocation,
  carriages: createCarriages(tram)
});

const resolvers = {
  Query: {
    trams: async () => {
      const tramData = await fetchTramData();
      return tramData.value.map(createTram);
    }
  }
};

export default resolvers;
