import React from 'react';
import { ClientForm } from './BoilerForm';

export const AddClient = (props) => {
  const { onAddClient } = props;
  return <ClientForm onSubmitForm={onAddClient} />;
};
