import ApolloClient from 'apollo-boost';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import DeparturesLoader from './components/departures-loader';
import Layout from './components/layout';
import StationInputLoader from './components/station-input-loader';

const client = new ApolloClient({ uri: 'http://localhost:3001/graphql' });

class App extends React.Component {
  state = { station: '' };

  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider>
          <Layout>
            <StationInputLoader onSelect={station => this.setState({ station })} />
            <DeparturesLoader station={this.state.station} />
          </Layout>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
