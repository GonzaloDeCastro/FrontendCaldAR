import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
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
    setBoilerA(client ? client.boilerA : 0);
    setBoilerB(client ? client.boilerB : 0);
    setBoilerC(client ? client.boilerC : 0);
    setBoilerD(client ? client.boilerD : 0);
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
        placeholder='Email'
        className='form-control mb-3'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />{' '}
      <div className={styles.typesForm}>
        <h4>Builder </h4>
        <input
          type='radio'
          name='type'
          value='builder'
          className={styles.radio}
          onChange={(e) => setType(e.currentTarget.value)}
        />
        <h4> Constructors </h4>{' '}
        <input
          type='radio'
          name='type'
          value='construct'
          className={styles.radio}
          onChange={(e) => setType(e.currentTarget.value)}
        />
      </div>
      <div>
        <h4>Boilers Types</h4>
        <div className={styles.contentBoilersForm}>
          <label>A</label>
          <input
            type='number'
            name='boilerA'
            placeholder='boiler A'
            className={styles.boilersForm}
            onChange={(e) => setBoilerA(e.target.value)}
            value={boilerA}
          />

          <label>B</label>
          <input
            type='number'
            name='boilerB'
            placeholder='boiler B'
            className={styles.boilersForm}
            onChange={(e) => setBoilerB(e.target.value)}
            value={boilerB}
          />
          <label>C</label>
          <input
            type='number'
            name='boilerC'
            placeholder='boiler C'
            className={styles.boilersForm}
            onChange={(e) => setBoilerC(e.target.value)}
            value={boilerC}
          />
          <label>D</label>
          <input
            type='number'
            name='boilerD'
            placeholder='boiler D'
            className={styles.boilersForm}
            onChange={(e) => setBoilerD(e.target.value)}
            value={boilerD}
          />
        </div>
      </div>
      <button className='btn btn-success' type='submit'>
        Confirm
      </button>
    </form>
  );
};
