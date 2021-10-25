import React, { Fragment } from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import Section from './Section';
import Footer from './Footer';
import '../Styles/index.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className='dashboard'>
        <LeftNav />
        <Section container={children} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
