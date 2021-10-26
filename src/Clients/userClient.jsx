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
    <table>
      <thead>
        <tr>
          <div className={styles.tittles}>
            <th scope='col'>Company</th>
            <th scope='col'>Address</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
          </div>
          <div className={styles.boilers}>
            <td className={styles.boilers}>A </td>
            <td className={styles.boilers}>B </td>
            <td className={styles.boilers}>C </td>
            <td className={styles.boilers}>D </td>

            <td className={styles.boilers}>
              <FaUserEdit />
            </td>
            <td className={styles.boilers}>
              <DeleteUser />
            </td>
          </div>
        </tr>
      </thead>
      <tbody>
        <tr>
          <div className={styles.tittles}>
            <td>{clientToShow.company}</td>
            <td>{clientToShow.address}</td>
            <td>{clientToShow.phone}</td>
            <td>{clientToShow.email}</td>
          </div>
          <div className={styles.boilers}>
            <td className={styles.boilers}>{clientToShow.boilerA}</td>
            <td className={styles.boilers}>{clientToShow.boilerB}</td>
            <td className={styles.boilers}>{clientToShow.boilerC}</td>
            <td className={styles.boilers}>{clientToShow.boilerD}</td>

            <td className={styles.boilers}>
              <EditIcon
                onClick={() => onEdit(clientToShow)}
                className={styles.icon}
              />
            </td>
            <td className={styles.boilers}>
              {' '}
              <DeleteIcon
                onClick={() => onDelete(clientToShow.id)}
                className={styles.icon}
              />
            </td>
          </div>
        </tr>
      </tbody>
    </table>
  );
};
