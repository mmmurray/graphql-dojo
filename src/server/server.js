import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import createSchema from './schema';

// Create a schema object.
const schema = createSchema();

// Initialize the app.
const app = express();

// Allow our React app to fetch data from this endpoint.
app.use(cors());

// The GraphQL endpoint.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries.
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server.
app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});
