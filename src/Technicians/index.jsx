import React, { useState } from 'react';
import { technicians as initalTechnicians } from '../Mocks/technicians.json';
import { HeaderTechnician} from './HeaderTechnician';
import { TechnicianList } from './TechniciansList';
import { v4 as uuidv4 } from 'uuid';

const Tenchnicians = () => {
  const [showForm, setShowForm] = useState({ show: false, mode: 'Add' });
  const [technicians, setTechnicians] = useState(initalTechnicians);
  const [technicianToEdit, setTechnicianToEdit] = useState(undefined);

  const handleEditClick = (technician) => {
    setTechnicianToEdit(technician);
    setShowForm({ show: true, mode: 'Edit' });
  };

  const handleAddTechnician = (technician) => {
    technician.id = uuidv4();
    setTechnicians([...technicians, technician]);
  };

  const handleDeleteTechnician = (id) => {
    const newTechnicians = technicians.filter((technician) => technician.id !== id);
    setTechnicians(newTechnicians);
  };

  const handleEditTechnician = (technician) => {
    const newTechnicians = technicians.map((x) => (x.id === technician.id ? technician : x));
    setTechnicians(newTechnicians);
  };

  return (
  <div className='m-3'>
    <HeaderTechnician
      showTechnicianForm={showForm}
      setShowTechnicianForm={setShowForm}
      onAddTechnician={handleAddTechnician}
      onEditTechnician={handleEditTechnician}
      technicianToEdit={technicianToEdit}
    />
    <TechnicianList
      technicianList={technicians}
      onDelete={handleDeleteTechnician}
      onEdit={handleEditClick}
    />
  </div>
  );
};

export default Tenchnicians;
