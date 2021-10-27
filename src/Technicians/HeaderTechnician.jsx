import React from 'react';
import { AddTechnician } from './AddTechnician';

import { EditTechnician } from './EditTechnician';
import styles from './style.module.css';

export const HeaderTechnician = (props) => {
  const {
    showTechnicianForm,
    setShowTechnicianForm,
    onAddTechnician,
    technicianToEdit,
    onEditTechnician
  } = props;
  return (
    <div className={styles.tittleHeader}>
      <h1>Technicians</h1>
      <button
        className='btn btn-primary'
        onClick={() =>
          setShowTechnicianForm({ show: !showTechnicianForm.show, mode: 'Add' })
        }
      >
        {showTechnicianForm.show ? 'Cancel' : 'Add Technician'}
      </button>

      {showTechnicianForm.show ? (
        showTechnicianForm.mode === 'Add' ? (
          <AddTechnician onAddTechnician={onAddTechnician} />
        ) : (
          <EditTechnician
            onEditTechnician={onEditTechnician}
            technicianToEdit={technicianToEdit}
          />
        )
      ) : undefined}
    </div>
  );
};

