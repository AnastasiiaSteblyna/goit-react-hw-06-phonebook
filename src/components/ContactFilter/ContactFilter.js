import React from 'react';
import { useDispatch } from 'react-redux';
import { contactFilter } from 'redux/slices/filterSlice';
import css from '../../styles/Common.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.form}>
      <h2>Contacts</h2>
      <label>Find contacts by name</label>
      <input
        onChange={e => dispatch(contactFilter(e.currentTarget.value))}
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};

export default ContactFilter;
