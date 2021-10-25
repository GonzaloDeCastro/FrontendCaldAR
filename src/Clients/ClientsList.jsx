import React from 'react';
import { ClientItem } from './userClient';

export const ClientsList = (props) => {
  const { clientList, onDelete, onEdit } = props;
  return (
    <div>
      {clientList.map((client) => (
        <ClientItem
          key={client.id}
          clientToShow={client}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
