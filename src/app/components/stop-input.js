import { AutoComplete } from 'material-ui';
import React from 'react';

const StopInput = ({ stops, onSelect }) => (
  <AutoComplete
    floatingLabelText="Tram stop"
    filter={AutoComplete.caseInsensitiveFilter}
    dataSource={stops}
    fullWidth={true}
    onNewRequest={onSelect}
  />
);

export default StopInput;
