import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
// import Toolbar from '../Navigation/Toolbar/Toolbar';
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <header className="App-header">
          <div className="Burger">Sidedrawer</div>
          <div className="Title">
            <h1 className="App-title">Guide to Siberian cities</h1>
          </div>
        </header>

        <main className="Content">{this.props.children}</main>

        <Footer />
      </Aux>
    );
  }
}

// <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
// <SideDrawer
//     open={this.state.showSideDrawer}
//     closed={this.sideDrawerClosedHandler} />

export default Layout;