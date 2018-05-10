import { gql } from 'apollo-boost';
import React from 'react';
import { Query } from 'react-apollo';
import StopInput from './stop-input';
import CircularProgress from 'material-ui/CircularProgress';
import { Div } from 'glamorous';

// const stops = ['MediaCityUk', 'Cornbrook', 'Eccles'];

const STATIONS_QUERY = gql`
  query {
    stations {
      name
    }
  }
`;

const StopInputLoader = ({ onSelect }) => (
  <Query query={STATIONS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <Div display="flex" justifyContent="center" paddingTop="32px" width="100%">
            <CircularProgress />
          </Div>
        );
      }

      if (error) return <div>Error :(</div>;

      const stops = data.stations.map(({ name }) => name);

      return <StopInput stops={stops} onSelect={onSelect} />;
    }}
  </Query>
);

export default StopInputLoader;
