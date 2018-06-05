import React from 'react';
import Aux from '../Aux/Aux';
import './Layout.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Layout = props => {
  return (
    <Aux>
      <Header burgerClicked={props.burgerClicked} />

      <main className="Content">{props.children}</main>

      <Footer />
    </Aux>
  );
};

export default Layout;
