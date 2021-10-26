import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import styles from './style.module.css';
export const ClientItem = (props) => {
  const { clientToShow, onDelete, onEdit } = props;
  return (
    <div className='border border-secondary my-2'>
      <div className={styles.hola}>
        <p>Company: {clientToShow.company} |</p>
        <p>Address: {clientToShow.address} |</p>
        <p>Phone: {clientToShow.phone} | </p>
        <EditIcon
          onClick={() => onEdit(clientToShow)}
          className={styles.icon}
        />
        <DeleteIcon
          onClick={() => onDelete(clientToShow.id)}
          className={styles.icon}
        />
      </div>
    </div>
  );
};
