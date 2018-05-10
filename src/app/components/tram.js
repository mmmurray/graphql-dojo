import { Img } from 'glamorous';
import { Paper } from 'material-ui';
import React from 'react';

const range = length => new Array(length).fill().map((_, i) => i);

const Tram = ({ destination, size, due }) => (
  <Paper
    style={{
      marginTop: '8px',
      padding: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <span>
      {destination} - {due} minutes
    </span>
    <span>
      {range(size).map(index => <Img key={index} height="32px" marginLeft="4px" src="/tram.png" />)}
    </span>
  </Paper>
);

export default Tram;
