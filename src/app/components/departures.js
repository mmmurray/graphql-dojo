import React from 'react';
import Tram from './tram';
import { Ul } from 'glamorous';

const Departures = ({ trams }) => (
  <Ul listStyle="none" overflowY="auto">
    {trams.map(tram => (
      <li>
        <Tram {...tram} />
      </li>
    ))}
  </Ul>
);

export default Departures;
