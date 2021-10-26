import React, { useEffect, useState } from 'react';

export const ClientForm = (props) => {
  const { onSubmitForm, client } = props;
  const [company, setCompany] = useState(client ? client.company : '');
  const [address, setAddress] = useState(client ? client.address : '');
  const [phone, setPhone] = useState(client ? client.phone : '');
  const [email, setEmail] = useState(client ? client.email : '');
  const [type, setType] = useState(client ? client.type : '');
  const [boilerA, setBoilerA] = useState(client ? client.boilerA : '');
  const [boilerB, setBoilerB] = useState(client ? client.boilerB : '');
  const [boilerC, setBoilerC] = useState(client ? client.boilerC : '');
  const [boilerD, setBoilerD] = useState(client ? client.boilerD : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({
      id: client ? client.id : undefined,
      company,
      address,
      phone,
      boilerA,
      boilerB,
      boilerC,
      boilerD,
      email,
      type
    });
    setCompany('');
    setAddress('');
    setPhone('');
    setEmail('');
    setType('');
    setBoilerA('');
    setBoilerB('');
    setBoilerC('');
    setBoilerD('');
  };

  useEffect(() => {
    setCompany(client ? client.company : '');
    setAddress(client ? client.address : '');
    setPhone(client ? client.phone : '');
    setBoilerA(client ? client.boilerA : '');
    setBoilerB(client ? client.boilerB : '');
    setBoilerC(client ? client.boilerC : '');
    setBoilerD(client ? client.boilerD : '');
    setEmail(client ? client.email : '');
    setType(client ? client.type : '');
  }, [client]);

  return (
    <form onSubmit={handleSubmit} className='mt-3'>
      <input
        type='text'
        name='company'
        placeholder='Company'
        className='form-control mb-3'
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <input
        type='text'
        name='address'
        placeholder='Address'
        className='form-control mb-3'
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      <input
        type='number'
        name='phone'
        placeholder='Phone'
        className='form-control mb-3'
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <input
        type='text'
        name='email'
        placeholder='email'
        className='form-control mb-3'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type='text'
        name='type'
        placeholder='type'
        className='form-control mb-3'
        onChange={(e) => setType(e.target.value)}
        value={type}
      />
      <input
        type='number'
        name='boilerA'
        placeholder='boiler A'
        className='form-control mb-3'
        onChange={(e) => setBoilerA(e.target.value)}
        value={boilerA}
      />
      <input
        type='number'
        name='boilerB'
        placeholder='boiler B'
        className='form-control mb-3'
        onChange={(e) => setBoilerB(e.target.value)}
        value={boilerB}
      />
      <input
        type='number'
        name='boilerC'
        placeholder='boiler C'
        className='form-control mb-3'
        onChange={(e) => setBoilerC(e.target.value)}
        value={boilerC}
      />
      <input
        type='number'
        name='boilerD'
        placeholder='boiler D'
        className='form-control mb-3'
        onChange={(e) => setBoilerD(e.target.value)}
        value={boilerD}
      />
      <button className='btn btn-success' type='submit'>
        Confirm
      </button>
    </form>
  );
};
