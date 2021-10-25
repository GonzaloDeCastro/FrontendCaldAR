import React, { useEffect, useState } from 'react';

export const ClientForm = (props) => {
  const { onSubmitForm, client } = props;
  const [company, setCompany] = useState(client ? client.company : '');
  const [address, setAddress] = useState(client ? client.address : '');
  const [phone, setPhone] = useState(client ? client.phone : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({
      id: client ? client.id : undefined,
      company,
      address,
      phone
    });
    setCompany('');
    setAddress('');
    setPhone('');
  };

  useEffect(() => {
    setCompany(client ? client.company : '');
    setAddress(client ? client.address : '');
    setPhone(client ? client.phone : '');
  }, [client]);

  return (
    <form onSubmit={handleSubmit} className='mt-3'>
      <input
        type='text'
        company='company'
        placeholder='Name'
        className='form-control mb-3'
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <input
        type='text'
        company='address'
        placeholder='Address'
        className='form-control mb-3'
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      <input
        type='number'
        company='phone'
        placeholder='Phone'
        className='form-control mb-3'
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <button type='submit'>Confirm</button>
    </form>
  );
};
