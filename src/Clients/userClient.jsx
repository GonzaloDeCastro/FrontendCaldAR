import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import styles from './style.module.css';
export const ClientItem = (props) => {
  const { clientToShow, onDelete, onEdit } = props;
  return (
    <table>
      <thead>
        <tr>
          <th scope='col'>Company</th>
          <th scope='col'>Address</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{clientToShow.company}</td>
          <td>{clientToShow.address}</td>
          <td>{clientToShow.phone}</td>
          <td>
            <EditIcon
              onClick={() => onEdit(clientToShow)}
              className={styles.icon}
            />
          </td>
          <td>
            {' '}
            <DeleteIcon
              onClick={() => onDelete(clientToShow.id)}
              className={styles.icon}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
