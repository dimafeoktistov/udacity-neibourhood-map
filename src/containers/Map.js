import React, { Component } from 'react';
import MapCanvas from '../components/MapCanvas.js';

class Map extends Component {
  state = {
    id: '',
    mapDone: true
  };

  markerClickHandler = id => {
    this.setState({ id });
  };

  onLoadMapHandler = map => {
    if (!map) {
      this.setState({
        mapDone: false
      });
    }
  };

  render(props) {
    const { places, selectPlace } = this.props;
    const { id } = this.state;

    let renderPlaces;
    let selectedPlaceDetails;

    if (id) {
      renderPlaces = places.filter(place => place.id !== id);
      selectedPlaceDetails = places.filter(
        place => place.id === id || place.id === selectPlace
      );
    } else {
      renderPlaces = places;
    }

    return (
      <div>
        <MapCanvas
          onLoadMap={this.onLoadMapHandler}
          onClickMarker={this.markerClickHandler}
          detail={selectedPlaceDetails}
          places={renderPlaces}
        />
      </div>
    );
  }
}

export default Map;
