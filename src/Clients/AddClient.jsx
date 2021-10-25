import React from 'react';
import { ClientForm } from './ClientForm';

export const AddClient = (props) => {
  const { onAddClient } = props;
  return <ClientForm onSubmitForm={onAddClient} />;
};
