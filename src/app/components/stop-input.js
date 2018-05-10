import { AutoComplete } from 'material-ui';
import React from 'react';

const stops = ['MediaCityUk', 'Cornbrook', 'Eccles'];

const StopInput = ({ destination, size, due }) => (
  <AutoComplete
    floatingLabelText="Tram stop"
    filter={AutoComplete.caseInsensitiveFilter}
    dataSource={stops}
    fullWidth={true}
  />
);

export default StopInput;
