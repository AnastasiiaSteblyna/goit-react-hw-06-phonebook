// import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import css from '../styles/Common.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

import { addContact, remove } from 'redux/slices/contactSlice';
import { contactFilter } from 'redux/slices/filterSlice';

export const App = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(item => {
        return item.name === contact.name;
      })
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
  };

  const filterContacts = e => {
    dispatch(contactFilter(e.currentTarget.value));
  };

  const renderContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={css.container}>
      <ContactForm addContact={addContacts} />
      {contacts.length > 0 ? (
        <div>
          <ContactFilter filter={filterContacts} />
          <ContactList
            renderContacts={renderContacts}
            deleteContacts={remove}
          />
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
};
