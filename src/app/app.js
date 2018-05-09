import { Paper, AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Tram from './tram';
import glamorous from 'glamorous';
import StopInput from './stop-input';

const ContainingDiv = glamorous.div({
  padding: '8px 16px',
  backgroundColor: '#f5f5f5',
  height: '100%'
});

class App extends Component {
  render() {
    const trams = [
      { id: '1', destination: 'MediaCityUK', size: 1, due: 3 },
      { id: '2', destination: 'Cornbrook', size: 2, due: 12 },
      { id: '3', destination: 'Eccles', size: 1, due: 25 }
    ];

    return (
      <MuiThemeProvider>
        <AppBar
          title="MetroLink Departures"
          showMenuIconButton={false}
          style={{ backgroundColor: '#ffdb4d' }}
          titleStyle={{ color: 'black' }}
        />
        <ContainingDiv>
          <StopInput />
          {trams.map(({ id, ...props }) => <Tram key={id} {...props} />)}
        </ContainingDiv>
      </MuiThemeProvider>
    );
  }
}

export default App;
