import React from 'react';
import { ClientItem } from './userClient';
import styles from './style.module.css';
import { FaUserTimes as DeleteUser, FaUserEdit } from 'react-icons/fa';

export const ClientsList = (props) => {
  const { clientList, onDelete, onEdit } = props;
  return (
    <div>
      {' '}
      <table>
        <tr>
          <div className={styles.tittles}>
            <th scope='col'>Company</th>
            <th scope='col'>Address</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
          </div>
          <div className={styles.type}>
            <th scope='col'>Type</th>
          </div>
          <div className={styles.boilers}>
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
