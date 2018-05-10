import { readFileSync } from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
import { join } from 'path';
import resolvers from './resolvers';

const createSchema = () =>
  makeExecutableSchema({
    typeDefs: readFileSync(join(__dirname, 'types.graphql'), 'utf-8'),
    resolvers,
  });

export default createSchema;
