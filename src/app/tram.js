import { Paper } from 'material-ui';
import React from 'react';

import glamorous from 'glamorous';

const TextSpan = glamorous.span({
  display: 'inline-block',
  width: '33%'
});

const TramImg = glamorous.img({ height: '32px', marginLeft: '4px' });

const tramImage = <TramImg src="/tram.png" />;

const Tram = ({ destination, size, due }) => (
  <Paper
    style={{
      marginTop: '8px',
      padding: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <span>
      {destination} - {due} minutes
    </span>
    <span>{Array(size).fill(tramImage)}</span>
  </Paper>
);

export default Tram;
