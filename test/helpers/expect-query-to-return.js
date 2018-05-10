import { graphql } from 'graphql';
import createSchema from '../../src/server/schema';

const expectQueryToReturn = (query, expected) =>
  expect(graphql(createSchema(), query)).resolves.toEqual(expected);

export default expectQueryToReturn;
