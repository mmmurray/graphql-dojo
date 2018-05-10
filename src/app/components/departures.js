import glamorous from 'glamorous';
import { AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import StopInput from './stop-input';
import Tram from './tram';

const ContainingDiv = glamorous.div({
  padding: '8px 16px',
  backgroundColor: '#f5f5f5',
  height: '100%',
});

const Departures = ({ trams }) => (
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

export default Departures;
