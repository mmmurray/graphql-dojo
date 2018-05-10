import { gql } from 'apollo-boost';
import React from 'react';
import { Query } from 'react-apollo';
import Departures from './departures';
import CircularProgress from 'material-ui/CircularProgress';
import { Div } from 'glamorous';
import GoogleMapReact from 'google-map-react';

// const trams = [
//   { id: '1', destination: 'MediaCityUK', size: 1, due: 3 },
//   { id: '2', destination: 'Cornbrook', size: 2, due: 12 },
//   { id: '3', destination: 'Eccles', size: 1, due: 25 },
// ];

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

        if (error) return <div>Error :(</div>;

        const trams = data.station.trams.map(tram => ({
          due: tram.due,
          destination: tram.destination.name,
          size: tram.size === 'Double' ? 2 : 1,
        }));

        return (
          <div>
            <Departures trams={trams} />
            <Div widht="100px" height="300px" marginTop="16px">
              <GoogleMapReact
                defaultCenter={{
                  lat: data.station.location.lat,
                  lng: data.station.location.lon,
                }}
                defaultZoom={17}
              />
            </Div>
          </div>
        );
      }}
    </Query>
  ) : null;

export default DeparturesLoader;
