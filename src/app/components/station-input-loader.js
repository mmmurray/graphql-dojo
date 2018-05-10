import { gql } from 'apollo-boost';
import React from 'react';
import { Query } from 'react-apollo';
import StationInput from './station-input';
import CircularProgress from 'material-ui/CircularProgress';
import { Div } from 'glamorous';

const STATIONS_QUERY = gql`
  query {
    stations {
      name
    }
  }
`;

const StationInputLoader = ({ onSelect }) => (
  <Query query={STATIONS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <Div display="flex" justifyContent="center" paddingTop="32px" width="100%">
            <CircularProgress />
          </Div>
        );
      }

      if (error) {
        return <div>Something went badly wrong</div>;
      }

      const stations = data.stations.map(({ name }) => name);

      return <StationInput stations={stations} onSelect={onSelect} />;
    }}
  </Query>
);

export default StationInputLoader;
