import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import clients from './clients.module.css';
export const ClientItem = (props) => {
  const { clientToShow, onDelete, onEdit } = props;
  return (
    <tr>
      <div className={clients.tittles}>
        <td>{clientToShow.company}</td>
        <td>{clientToShow.address}</td>
        <td>{clientToShow.phone}</td>
        <td>{clientToShow.email}</td>
      </div>
      <div>
        <td>{clientToShow.type}</td>
      </div>
      <div className={clients.boilers}>
        <td>{clientToShow.boilerA}</td>
        <td>{clientToShow.boilerB}</td>
        <td>{clientToShow.boilerC}</td>
        <td>{clientToShow.boilerD}</td>
        <td>
          <EditIcon
            onClick={() => onEdit(clientToShow)}
            className={clients.icon}
          />
        </td>
        <td>
          <DeleteIcon
            onClick={() => onDelete(clientToShow.id)}
            className={clients.icon}
          />
        </td>
      </div>
    </tr>
  );
};
