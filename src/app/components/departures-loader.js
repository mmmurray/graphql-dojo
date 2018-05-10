import { gql } from 'apollo-boost';
import { Div } from 'glamorous';
import CircularProgress from 'material-ui/CircularProgress';
import React from 'react';
import { Query } from 'react-apollo';
import Departures from './departures';

const createQuery = station => gql`
  query {
    station(name: "${station}") {
      location {
        lat
        lon
      }
      trams {
        due
        size
        destination {
          name
        }
      }
    }
  }
`;

const DeparturesLoader = ({ station }) =>
  station ? (
    <Query query={createQuery(station)}>
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

        const trams = data.station.trams.map(tram => ({
          due: tram.due,
          destination: tram.destination.name,
          size: tram.size,
        }));

        return (
          <Departures
            trams={trams}
            lat={data.station.location.lat}
            lon={data.station.location.lon}
          />
        );
      }}
    </Query>
  ) : null;

export default DeparturesLoader;
