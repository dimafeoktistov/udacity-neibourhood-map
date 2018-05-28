import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapStyles from "../utils/MapStyles";

const MapCanvas = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCejQoXsMW6FestdxLCiM4uCny49qz5rHc&v=3.exp&libraries=geometry,drawing,places",
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
  // let markers = props.places.map(place => {
  //   return (
  //     <Marker
  //       position={{
  //         lat: place.location.lat,
  //         lng: place.location.lng
  //       }}
  //       key={place.id}
  //     />
  //   );
  // });

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: 56.488,
        lng: 84.98
      }}
      defaultOptions={{
        styles: MapStyles
      }}
    >
      {props.places.map(place => {
        return (
          <Marker
            position={{
              lat: place.location.lat,
              lng: place.location.lng
            }}
            key={place.id}
          />
        );
      })}
    </GoogleMap>
  );
});

export default MapCanvas;
