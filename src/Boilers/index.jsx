import React from 'react';

const Boilers = () => {
  return (
    <div>
      <table class='table'>
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
            <td>Compañia Argentina System</td>
            <td>Corrientes 1240</td>
            <td>@426332</td>
            <td>Lapiz</td>
            <td>@tacho</td>
          </tr>
          <tr>
            <td>Airoldi</td>
            <td>Alsina 1542</td>
            <td>4780552</td>
            <td>Lapiz</td>
            <td>tacho</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Boilers;
