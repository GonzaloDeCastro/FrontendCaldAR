import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';

export const ClientItem = (props) => {
  const { clientToShow, onDelete, onEdit } = props;
  return (
    <div className='border border-secondary my-2'>
      <p>Name: {clientToShow.company}</p>
      <p>Address: {clientToShow.address}</p>
      <p>Phone: {clientToShow.phone}</p>
      <EditIcon
        onClick={() => onEdit(clientToShow)}
        style={{ cursor: 'pointer', color: 'red' }}
      />
      <DeleteIcon
        onClick={() => onDelete(clientToShow.id)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
