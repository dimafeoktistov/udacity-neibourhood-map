import React from 'react';
import './Header.css';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const Header = props => {
  return (
    <header className="App-header">
      <DrawerToggle burgerClicked={props.burgerClicked} />

      <div className="Title">
        <h1 className="App-title">Guide to Tomsk</h1>
      </div>
    </header>
  );
};

export default Header;
