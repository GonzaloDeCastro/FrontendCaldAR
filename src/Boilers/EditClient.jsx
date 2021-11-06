import React from 'react';
import { ClientForm } from './BoilerForm';

export const EditClient = (prop) => {
  const { onEditClient, clientToEdit } = prop;
  return <ClientForm onSubmitForm={onEditClient} client={clientToEdit} />;
};
