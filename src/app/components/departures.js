import React from 'react';
import Tram from './tram';

const Departures = ({ trams }) => (
  <div>{trams.map(({ id, ...props }) => <Tram key={id} {...props} />)}</div>
);

export default Departures;
