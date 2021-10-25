import React, { Fragment, useState } from 'react';
import '../Styles/Section.css';

const Section = ({ container }) => {
  return (
    <Fragment>
      <div className='section'>{container} </div>
    </Fragment>
  );
};

export default Section;
