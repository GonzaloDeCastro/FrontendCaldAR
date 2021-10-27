import React from 'react';
import { ClientItem } from './userClient';
import clients from './clients.module.css';
import { FaUserTimes as DeleteUser, FaUserEdit } from 'react-icons/fa';

export const ClientsList = (props) => {
  const { clientList, onDelete, onEdit } = props;
  return (
    <div>
      {' '}
      <table>
        <tr>
          <div className={clients.tittles}>
            <th scope='col'>Company</th>
            <th scope='col'>Address</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
          </div>
          <div className={clients.type}>
            <th scope='col'>Type</th>
          </div>
          <div className={clients.boilers}>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>
              <FaUserEdit />
            </td>
            <td>
              <DeleteUser />
            </td>
          </div>
        </tr>
        {clientList.map((client) => (
          <ClientItem
            key={client.id}
            clientToShow={client}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </table>
    </div>
  );
};
