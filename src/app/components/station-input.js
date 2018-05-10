import { AutoComplete } from 'material-ui';
import React from 'react';

const StationInput = ({ stations, onSelect }) => (
  <AutoComplete
    floatingLabelText="Tram stop"
    filter={AutoComplete.caseInsensitiveFilter}
    dataSource={stations}
    fullWidth={true}
    onNewRequest={onSelect}
  />
);

export default StationInput;
