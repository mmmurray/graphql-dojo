import React from 'react';
import Departures from './components/departures';

const trams = [
  { id: '1', destination: 'MediaCityUK', size: 1, due: 3 },
  { id: '2', destination: 'Cornbrook', size: 2, due: 12 },
  { id: '3', destination: 'Eccles', size: 1, due: 25 },
];

class App extends React.Component {
  render() {
    return <Departures trams={trams} />;
  }
}

export default App;
