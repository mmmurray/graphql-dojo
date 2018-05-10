import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import DeparturesLoader from './components/departures-loader';
import Layout from './components/layout';
import StationInputLoader from './components/station-input-loader';

class App extends React.Component {
  state = { station: '' };

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <StationInputLoader onSelect={station => this.setState({ station })} />
          <DeparturesLoader station={this.state.station} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
