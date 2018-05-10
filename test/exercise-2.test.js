import { graphql } from 'graphql';
import createSchema from '../src/server/schema';

const expectQueryToReturn = (query, expected) =>
  expect(graphql(createSchema(), query)).resolves.toEqual(expected);

describe('exercise 2', () => {
  test('can get the location of a station', () => {
    const query = `{
      station(name: "MediaCityUK") {
        location {
          lat
          lon
        }
      }
    }`;

    const expected = {
      data: {
        station: {
          location: {
            lat: 53.4720641271,
            lon: -2.2973038584,
          },
        },
      },
    };

    return expectQueryToReturn(query, expected);
  });
});
