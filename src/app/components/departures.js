import { Div, Ul } from 'glamorous';
import React from 'react';
import Tram from './tram';
import GoogleMapReact from 'google-map-react';

const Departures = ({ trams, lat, lon }) => (
  <div>
    <Ul listStyle="none" overflowY="auto">
      {trams.map((tram, index) => (
        <li key={index}>
          <Tram {...tram} />
        </li>
      ))}
    </Ul>
    <Div widht="100px" height="300px" marginTop="16px">
      <GoogleMapReact center={[lat, lon]} defaultZoom={17} />
    </Div>
  </div>
);

export default Departures;
