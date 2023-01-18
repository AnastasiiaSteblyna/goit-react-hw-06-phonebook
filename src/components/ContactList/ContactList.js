import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slices/contactSlice';
import css from '../../styles/Common.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const renderContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {renderContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            className={css.btnDelete}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
