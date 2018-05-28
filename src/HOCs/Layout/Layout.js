import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
// import Toolbar from '../Navigation/Toolbar/Toolbar';
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import Header from '../../components/Header';

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
        <Header />

        <main className="Content">{this.props.children}</main>

        <aside>
          <List places={this.props.places} />
        </aside>

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
