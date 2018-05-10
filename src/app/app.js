import ApolloClient from 'apollo-boost';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import DeparturesLoader from './components/departures-loader';
import Layout from './components/layout';
import StopInput from './components/stop-input';

const client = new ApolloClient({ uri: 'http://localhost:3001/graphql' });

const App = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <Layout>
        <StopInput />
        <DeparturesLoader station="Piccadilly" />
      </Layout>
    </MuiThemeProvider>
  </ApolloProvider>
);

export default App;
