import React from 'react';
import { AddClient } from './AddClient';
import { EditClient } from './EditClient';
import styles from './style.module.css';

export const HeaderClient = (props) => {
  const {
    showClientForm,
    setShowClientForm,
    onAddClient,
    clientToEdit,
    onEditClient
  } = props;
  return (
    <div className={styles.tittleHeader}>
      <h1>Clients</h1>
      <button
        className='btn btn-primary'
        onClick={() =>
          setShowClientForm({ show: !showClientForm.show, mode: 'Add' })
        }
      >
        {showClientForm.show ? 'Cancel' : 'Add Client'}
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
