import React from 'react';
import Departures from './departures';

const DeparturesLoader = ({ station }) => {
  const mockTrams = [
    { destination: 'MediaCityUK', due: 4, size: 1 },
    { destination: 'Bury', due: 15, size: 2 },
    { destination: 'Piccadilly', due: 19, size: 1 },
  ];

  return <Departures trams={mockTrams} lat={53.472038} lon={-2.300002} />;
};

export default DeparturesLoader;
