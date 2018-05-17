import React, { Component } from 'react';
import './App.css';
import Layout from './HOCs/Layout/Layout';
import Map from './containers/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Map />
        </Layout>
      </div>
    );
  }
}

export default App;
