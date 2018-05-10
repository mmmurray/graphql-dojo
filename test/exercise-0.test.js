import { graphql } from 'graphql';
import createSchema from '../src/server/schema';

const expectQueryToReturn = (query, expected) =>
  expect(graphql(createSchema(), query)).resolves.toEqual(expected);

describe('exercise 0', () => {
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
});
