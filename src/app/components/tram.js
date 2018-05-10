import { Img } from 'glamorous';
import { Paper } from 'material-ui';
import React from 'react';

const tramImage = <Img height="32px" marginLeft="4px" src="/tram.png" />;

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
    <span>{Array(size).fill(tramImage)}</span>
  </Paper>
);

export default Tram;
