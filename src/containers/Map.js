import React from "react";
import MapCanvas from "../components/MapCanvas.js";

class Map extends React.Component {
  render(props) {
    return (
      <div>
        <MapCanvas places={this.props.places} />
      </div>
    );
  }
}

export default Map;
