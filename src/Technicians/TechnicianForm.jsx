import React, { useEffect, useState } from 'react';

export const TechnicianForm = (props) => {
  const { onSubmitForm, technician } = props;
  const [name, setName] = useState(technician ? technician.name : '');
  const [telephone, setTelephone] = useState(
    technician ? technician.telephone : ''
  );
  const [type, setType] = useState(technician ? technician.type : '');
  const [state, setState] = useState(technician ? technician.state : '');
  const [maintenance, setMaintenance] = useState(
    technician ? technician.maintenance : ''
  );
  const [mail, setMail] = useState(technician ? technician.mail : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({
      id: technician ? technician.id : undefined,
      name,
      telephone,
      type,
      state,
      maintenance,
      mail
    });
    setName('');
    setTelephone('');
    setType('');
    setState('');
    setMaintenance('');
    setMail('');
  };

  useEffect(() => {
    setName(technician ? technician.name : '');
    setTelephone(technician ? technician.telephone : '');
    setType(technician ? technician.type : '');
    setState(technician ? technician.state : '');
    setMaintenance(technician ? technician.maintenance : '');
    setMail(technician ? technician.mail : '');
  }, [technician]);

  return (
    <form onSubmit={handleSubmit} className='mt-3'>
      <input
        type='text'
        name='name'
        placeholder='Name'
        className='form-control mb-3'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type='text'
        name='telephone'
        placeholder='Telephone'
        className='form-control mb-3'
        onChange={(e) => setTelephone(e.target.value)}
        value={telephone}
      />
      <input
        type='text'
        name='type'
        placeholder='Type'
        className='form-control mb-3'
        onChange={(e) => setType(e.target.value)}
        value={type}
      />
      <input
        type='text'
        name='state'
        placeholder='State'
        className='form-control mb-3'
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <input
        type='text'
        name='maintenance'
        placeholder='Maintenance'
        className='form-control mb-3'
        onChange={(e) => setMaintenance(e.target.value)}
        value={maintenance}
      />
      <input
        type='text'
        name='mail'
        placeholder='Mail'
        className='form-control mb-3'
        onChange={(e) => setMail(e.target.value)}
        value={mail}
      />
      <button className='btn btn-success' type='submit'>
        Confirm
      </button>
    </form>
  );
};
