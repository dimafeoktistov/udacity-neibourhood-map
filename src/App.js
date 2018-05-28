import React, { Component } from "react";
import "./App.css";
import Layout from "./HOCs/Layout/Layout";
// import Map from "./containers/Map";
import axios from "axios";
import MapCanvas from "./components/MapCanvas.js";

const SEARCH_STRING =
  "search?ll=56.488,84.98&query=&radius=3000&categoryId=4d4b7104d754a06370d81259&client_id=TUJ2XFDBJ1A514DNTUSTFPFCWKFMJGGBJVEELJLWEC3M2NXN&client_secret=FGZQ5WAJZ1FNMQHROFE10Z5EIHSUDGZPDVLP1OCOGQIITE03&v=20201215&limit=10";

class App extends Component {
  state = {
    places: [],
    error: false
  };

  componentDidMount() {
    axios
      .get(SEARCH_STRING)
      .then(res => {
        const places = res.data.response.venues;
        this.setState({ places: places });
        console.log(res.data.response.venues);
      })
      .catch(err => console.log(err));
  }

  render() {
    let places = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      places = this.state.places.map(place => {
        return <div key={place.id}>{place.name}</div>;
      });
    }

    return (
      <div className="App">
        <Layout>
          <MapCanvas places={this.state.places} />
        </Layout>
        <div>{places}</div>
      </div>
    );
  }
}

export default App;
