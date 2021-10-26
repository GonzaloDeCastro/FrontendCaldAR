import React from 'react';
import { TechnicianForm } from './TechnicianForm';

export const AddTechnician = (props) => {
  const { onAddTechnician } = props;
  return <TechnicianForm onSubmitForm={onAddTechnician} />;
};