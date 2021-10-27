import React from 'react';
import { TechnicianForm } from './TechnicianForm';

export const EditTechnician = (prop) => {
  const { onEditTechnician, technicianToEdit } = prop;
  return (
    <TechnicianForm
      onSubmitForm={onEditTechnician}
      technician={technicianToEdit}
    />
  );
};
