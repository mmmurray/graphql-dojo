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

test('can get the time trams are due to depart from a station', () => {
  const query = `{
      station(name: "Piccadilly") {
        trams {
          due
        }
      }
    }`;

  const expected = {
    data: {
      station: {
        trams: [{ due: 3 }, { due: 6 }, { due: 6 }, { due: 7 }, { due: 9 }, { due: 9 }],
      },
    },
  };

  return expectQueryToReturn(query, expected);
});

test('can get the size of all departing trams from a station', () => {
  const query = `{
      station(name: "Piccadilly") {
        trams {
          size
        }
      }
    }`;

  const expected = {
    data: {
      station: {
        trams: [{ size: 1 }, { size: 2 }, { size: 1 }, { size: 1 }, { size: 1 }, { size: 1 }],
      },
    },
  };

  return expectQueryToReturn(query, expected);
});

test('can get the name of the destination station for departing trams', () => {
  const query = `{
      station(name: "Baguley") {
        trams {
          destination {
            name
          }
        }
      }
    }`;

  const expected = {
    data: {
      station: {
        trams: [
          { destination: { name: 'Manchester Airport' } },
          { destination: { name: 'Victoria' } },
          { destination: { name: 'Manchester Airport' } },
          { destination: { name: 'Victoria' } },
          { destination: { name: 'Manchester Airport' } },
          { destination: { name: 'Victoria' } },
        ],
      },
    },
  };

  return expectQueryToReturn(query, expected);
});

test('should return no trams for a missing station', () => {
  const query = `{
      station(name: "missing") {
        name
        trams {
          due
        }
      }
    }`;

  const expected = {
    data: {
      station: {
        name: 'missing',
        trams: [],
      },
    },
  };

  return expectQueryToReturn(query, expected);
});
