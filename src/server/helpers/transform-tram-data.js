import { groupBy, mapValues, sortBy, uniqBy } from 'lodash/fp';

/*
`transformTramData` will convert the raw data from the TFGM API into an object that looks like this:

{
  'Ashton Moss': {
    AtcoCode: '9400ZZMAAMO2',
    trams: [
      {
        destination: {
          name: 'Eccles',
        },
        due: 5,
        size: 1,
      },
      {
        destination: {
          name: 'Ashton-under-Lyne',
        },
        due: 7,
        size: 1,
      },
    ],
  },
  Bury: {
    AtcoCode: '9400ZZMABUR1',
    trams: [
      {
        destination: {
          name: 'Altrincham',
        },
        due: 5,
        size: 2,
      },
      {
        destination: {
          name: 'Piccadilly',
        },
        due: 11,
        size: 1,
      },
    ],
  },
  Eccles: {
    AtcoCode: '9400ZZMAECC1',
    trams: [
      {
        destination: {
          name: 'Ashton-under-Lyne',
        },
        due: 0,
        size: 1,
      },
      {
        destination: {
          name: 'Ashton-under-Lyne',
        },
        due: 12,
        size: 1,
      },
    ],
  },
};
*/

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

const transformTramData = tramData => {
  const allStations = tramData.value.map(createStation);
  const groupedStations = groupBy('name', allStations);
  const flattenedStations = mapValues(
    station =>
      station.reduce((acc, s) => ({ AtcoCode: s.AtcoCode, trams: [...acc.trams, ...s.trams] }), {
        trams: [],
      }),
    groupedStations,
  );

  return mapValues(
    station => ({ ...station, trams: sortBy('due', uniqBy(JSON.stringify, station.trams)) }),
    flattenedStations,
  );
};

export default transformTramData;
