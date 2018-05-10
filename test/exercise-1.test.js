import expectQueryToReturn from './helpers/expect-query-to-return';

test('can get a station by name', () => {
  const query = `{
      station(name: "MediaCityUK") {
        name
      }
    }`;

  const expected = {
    data: {
      station: {
        name: 'MediaCityUK',
      },
    },
  };

  return expectQueryToReturn(query, expected);
});

test('can get the name of every station', () => {
  const query = `{
      stations {
        name
      }
    }`;

  const expected = {
    data: {
      stations: expect.arrayContaining([
        {
          name: 'Heaton Park',
        },
        {
          name: 'Market Street',
        },
        {
          name: 'Piccadilly Gardens',
        },
      ]),
    },
  };

  return expectQueryToReturn(query, expected);
});
