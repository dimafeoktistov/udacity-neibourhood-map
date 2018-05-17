import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MapCanvas = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?AIzaSyCejQoXsMW6FestdxLCiM4uCny49qz5rHc&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `80vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={13} defaultCenter={{ lat: 56.488, lng: 84.98 }}>
    <Marker position={{ lat: 56.488, lng: 84.98 }} />
  </GoogleMap>
));

export default MapCanvas;
