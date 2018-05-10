import React from 'react';
import StationInput from './station-input';

const StationInputLoader = ({ onSelect }) => {
  const mockStations = ['MediaCityUK', 'Bury', 'Piccadilly', 'Eccles'];

  return <StationInput stations={mockStations} onSelect={onSelect} />;
};

export default StationInputLoader;
