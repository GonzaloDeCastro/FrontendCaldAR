import React from 'react';
import {
  FaTrash as DeleteIcon,
  FaPen as EditIcon
} from 'react-icons/fa';
import styles from './style.module.css';

export const TechnicianItem = (props) => {
  const { technicianToShow, onDelete, onEdit } = props;
  return (
      <tr>
        <td>{technicianToShow.name}</td>
        <td>{technicianToShow.telephone}</td>
        <td>{technicianToShow.type}</td>
        <td>{technicianToShow.state}</td>
        <td>{technicianToShow.maintenance}</td>
        <td>{technicianToShow.mail}</td>
        <td>
          <EditIcon
            onClick={() => onEdit(technicianToShow)}
            className={styles.icon}
          />
        </td>
        <td>
          <DeleteIcon
            onClick={() => onDelete(technicianToShow.id)}
            className={styles.icon}
          />
        </td>
      </tr>
  );
};

