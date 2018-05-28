import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import MapStyles from '../utils/MapStyles';

const MapCanvas = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCejQoXsMW6FestdxLCiM4uCny49qz5rHc&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: (
      <div
        style={{
          height: `100%`
        }}
      />
    ),
    containerElement: (
      <div
        style={{
          height: `80vh`
        }}
      />
    ),
    mapElement: (
      <div
        style={{
          height: `100%`
        }}
      />
    )
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      ref={props.onLoadMap}
      defaultZoom={13}
      defaultCenter={{
        lat: 56.488,
        lng: 84.98
      }}
      defaultOptions={{
        styles: MapStyles
      }}>
      {props.detail
        ? props.detail.map(place => (
            <Marker
              tabIndex="0"
              key={place.id}
              position={{ lat: place.location.lat, lng: place.location.lng }}
              animation={window.google.maps.Animation.BOUNCE}>
              <InfoBox>
                <div className="info" tabIndex="0">
                  <div className="info__name">
                    <h3>{place.name}</h3>
                  </div>
                  <div className="info__contact">
                    <p>
                      <strong>Address</strong>
                    </p>
                    <p>
                      {place.location.formattedAddress[0]}
                      <br />
                      {place.location.formattedAddress[1]}
                      <br />
                      {place.location.formattedAddress[2]}
                    </p>
                  </div>
                </div>
              </InfoBox>
            </Marker>
          ))
        : null}

      {props.places.map(place => {
        return (
          <Marker
            position={{
              lat: place.location.lat,
              lng: place.location.lng
            }}
            key={place.id}
            animation={window.google.maps.Animation.BOUNCE}
            onClick={() => props.onClickMarker(place.id)}
          />
        );
      })}
    </GoogleMap>
  );
});

export default MapCanvas;

// animation={window.google.maps.Animation.DROP}
