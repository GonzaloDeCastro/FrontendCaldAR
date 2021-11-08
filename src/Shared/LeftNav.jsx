import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/LeftNav.css';

const LeftNav = () => {
  return (
    <Fragment>
      <div className='leftNav'>
        <Link to='/maintenances'>Maintenances</Link>
        <Link to='/boilers'>Boilers</Link>
        <Link to='/technicians'>Technicians</Link>
        <Link to='/clients'>Clients</Link>
        <Link to='/reports'>Reports</Link>
        <Link to='/counter'>Counter</Link>
      </div>
    </Fragment>
  );
};

export default LeftNav;
