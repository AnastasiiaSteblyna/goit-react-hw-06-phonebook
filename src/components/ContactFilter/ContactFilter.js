import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/Common.module.css';

const ContactFilter = ({ filter }) => {
  return (
    <div className={css.form}>
      <h2>Contacts</h2>
      <label>Find contacts by name</label>
      <input
        onChange={filter}
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default ContactFilter;
