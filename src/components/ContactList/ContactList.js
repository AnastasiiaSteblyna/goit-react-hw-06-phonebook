import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from '../../styles/Common.module.css';

const ContactList = ({ renderContacts, deleteContacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {renderContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            className={css.btnDelete}
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.prototype = {
  renderContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
