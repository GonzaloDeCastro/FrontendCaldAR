import React, { useState } from 'react';
import { clients as initalClients } from '../Mocks/clients.json';
import { HeaderClient } from './HeaderClient';
import { ClientsList } from './ClientsList';
import { v4 as uuidv4 } from 'uuid';

const Clients = () => {
  const [showForm, setShowForm] = useState({ show: false, mode: 'Add' });
  const [clients, setclients] = useState(initalClients);
  const [clientToEdit, setClientToEdit] = useState(undefined);

  const handleEditClick = (client) => {
    setClientToEdit(client);
    setShowForm({ show: true, mode: 'Edit' });
  };

  const handleAddClient = (client) => {
    client.id = uuidv4();
    setclients([...clients, client]);
  };

  const handleDeleteClient = (id) => {
    const newClients = clients.filter((client) => client.id !== id);
    setclients(newClients);
  };

  const handleEditClient = (client) => {
    const newClients = clients.map((x) => (x.id === client.id ? client : x));
    setclients(newClients);
  };

  return (
    <div className='m-3'>
      <HeaderClient
        showClientForm={showForm}
        setShowClientForm={setShowForm}
        onAddClient={handleAddClient}
        onEditClient={handleEditClient}
        clientToEdit={clientToEdit}
      />
      <ClientsList
        clientList={clients}
        onDelete={handleDeleteClient}
        onEdit={handleEditClick}
      />
    </div>
  );
};

export default Clients;
