import React, { Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import Layout from './HOCs/Layout/Layout';
import axios from 'axios';
import List from './components/List/List.js';
import MapCanvas from './components/MapCanvas/MapCanvas';
import Drawer from 'react-motion-drawer';
import AsyncBoundary from './components/AsyncBoundary/AsyncBoundary';

// Constant string that holds search query for API in order to get list of places
const SEARCH_STRING =
  'search?ll=56.488,84.98&query=&radius=3000&categoryId=4d4b7104d754a06370d81259&client_id=TUJ2XFDBJ1A514DNTUSTFPFCWKFMJGGBJVEELJLWEC3M2NXN&client_secret=FGZQ5WAJZ1FNMQHROFE10Z5EIHSUDGZPDVLP1OCOGQIITE03&v=20201215&limit=50';

class App extends Component {
  state = {
    places: [],
    query: '',
    selectedPlace: null,
    error: false,
    open: false,
    mapDone: true
  };

  componentDidMount() {
    //Using axios for handling AJAX requests to get places from API
    axios
      .get(SEARCH_STRING)
      .then(res => {
        const places = res.data.response.venues;
        this.setState({ places: places });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  markerClicked = (event, place) => {
    if (this.state.selectedPlace === place.id) {
      this.setState({ selectedPlace: 0 });
    } else {
      this.setState({ selectedPlace: place.id });
    }
  };

  infoBoxClosedHandler = () => {
    this.setState({
      selectedPlace: 0
    });
  };

  onLoadMapHandler = map => {
    if (!map) {
      this.setState({
        mapDone: false
      });
    }
  };

  openDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { query, places, selectedPlace, error } = this.state;
    let filtered;

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filtered = places.filter(place => match.test(place.name));
    } else {
      filtered = places;
    }

    let mapKeeper = <AsyncBoundary />;
    if (this.state.mapDone) {
      mapKeeper = (
        <MapCanvas
          onLoadMap={this.onLoadMapHandler}
          infoBoxClosed={this.infoBoxClosedHandler}
          places={filtered}
          selectedPlace={selectedPlace}
          markerClicked={this.markerClicked}
        />
      );
    }

    if (!error) {
      return (
        <div className="App">
          <Layout burgerClicked={this.openDrawer}>{mapKeeper}</Layout>
          <Drawer
            className="Drawer"
            open={this.state.open}
            onChange={open => this.setState({ open: open })}>
            <List
              listElementClicked={this.markerClicked}
              places={filtered}
              query={this.updateQuery}
            />
          </Drawer>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Layout burgerClicked={this.openDrawer}>
            <AsyncBoundary />
          </Layout>

          <Drawer
            className="Drawer"
            open={this.state.open}
            onChange={open => this.setState({ open: open })}>
            <List
              selectPlace={this.updatePlace}
              places={filtered}
              query={this.updateQuery}
            />
          </Drawer>
        </div>
      );
    }
  }
}

export default App;
