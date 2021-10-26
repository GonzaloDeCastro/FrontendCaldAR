import React from 'react';
import { TechnicianItem } from './userTechnician';
import {
    FaUserTimes as DeleteUser,
    FaUserEdit
  } from 'react-icons/fa';

export const TechnicianList = (props) => {
  const { technicianList, onDelete, onEdit } = props;
  return (
    <div>
      <table>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Telephone</th>
            <th scope='col'>Type</th>
            <th scope='col'>State</th>
            <th scope='col'>Maintenance</th>
            <th scope='col'>Mail</th>
            <th>
              <FaUserEdit />
            </th>
            <th>
              <DeleteUser />
            </th>
          </tr>
          {technicianList.map((technician) => (
            <TechnicianItem
              key={technician.id}
              technicianToShow={technician}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
      </table>
    </div>

  );
};
