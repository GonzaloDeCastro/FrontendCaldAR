import React from 'react';
import {
  FaTrash as DeleteIcon,
  FaPen as EditIcon,
  FaUserTimes as DeleteUser,
  FaUserEdit
} from 'react-icons/fa';
import styles from './style.module.css';
export const ClientItem = (props) => {
  const { clientToShow, onDelete, onEdit } = props;
  return (
    <tr>
      <div className={styles.tittles}>
        <td>{clientToShow.company}</td>
        <td>{clientToShow.address}</td>
        <td>{clientToShow.phone}</td>
        <td>{clientToShow.email}</td>
      </div>
      <div className={styles.type}>
        <td>{clientToShow.type}</td>
      </div>
      <div className={styles.boilers}>
        <td>{clientToShow.boilerA}</td>
        <td>{clientToShow.boilerB}</td>
        <td>{clientToShow.boilerC}</td>
        <td>{clientToShow.boilerD}</td>
        <td>
          <EditIcon
            onClick={() => onEdit(clientToShow)}
            className={styles.icon}
          />
        </td>
        <td>
          <DeleteIcon
            onClick={() => onDelete(clientToShow.id)}
            className={styles.icon}
          />
        </td>
      </div>
    </tr>
  );
};
