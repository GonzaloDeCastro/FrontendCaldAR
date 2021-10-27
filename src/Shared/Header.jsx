import React, { Fragment } from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
    <Fragment>
      <div className='header'>
        <h1 className='title'>CaldAR</h1>
        <div className='options'>
          <p className='username'>Usuario: Marcos123</p>
          <p className='logout'>Exit</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
