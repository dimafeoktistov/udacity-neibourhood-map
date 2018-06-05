import React, { Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import Layout from './HOCs/Layout/Layout';
import axios from 'axios';
import List from './components/List/List.js';
import Map from './containers/Map.js';
import Drawer from 'react-motion-drawer';
import AsyncBoundary from './components/AsyncBoundary/AsyncBoundary';

const SEARCH_STRING =
  'search?ll=56.488,84.98&query=&radius=3000&categoryId=4d4b7104d754a06370d81259&client_id=TUJ2XFDBJ1A514DNTUSTFPFCWKFMJGGBJVEELJLWEC3M2NXN&client_secret=FGZQ5WAJZ1FNMQHROFE10Z5EIHSUDGZPDVLP1OCOGQIITE03&v=20201215&limit=50';

class App extends Component {
  state = {
    places: [],
    query: '',
    selecredPlace: '',
    error: false,
    open: false
  };

  componentDidMount() {
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

  updatePlace = place => {
    this.setState({ selectedPlace: place });
  };

  openDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { query, places, selectedPlace } = this.state;
    let filtered;

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filtered = places.filter(place => match.test(place.name));
    } else {
      filtered = places;
    }

    if (!this.state.error) {
      return (
        <div className="App">
          <Layout burgerClicked={this.openDrawer}>
            <Map places={filtered} selectPlace={selectedPlace} />
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
    } else {
      return (
        <Layout>
          <AsyncBoundary />
        </Layout>
      );
    }
  }
}

export default App;
