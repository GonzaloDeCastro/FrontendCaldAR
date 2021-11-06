import React from 'react';
import { AddClient } from './AddBoiler';
import { EditClient } from './EditClient';
import clients from './clients.module.css';

export const HeaderClient = (props) => {
  const {
    showClientForm,
    setShowClientForm,
    onAddClient,
    clientToEdit,
    onEditClient
  } = props;
  return (
    <div className={clients.tittleHeader}>
      <h1>Boilers</h1>
      <button
        className='btn btn-primary'
        onClick={() =>
          setShowClientForm({ show: !showClientForm.show, mode: 'Add' })
        }
      >
        {showClientForm.show ? 'Cancel' : 'Add Boiler'}
      </button>
      {showClientForm.show ? (
        showClientForm.mode === 'Add' ? (
          <AddClient onAddClient={onAddClient} />
        ) : (
          <EditClient onEditClient={onEditClient} clientToEdit={clientToEdit} />
        )
      ) : undefined}
    </div>
  );
};
