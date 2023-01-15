import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from '../styles/Common.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );

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

    setContacts(prevState => [contact, ...prevState]);
    // this.setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value);
    // this.setState({
    //   filter: e.currentTarget.value,
    // });
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(c => c.id !== id),
    // }));
  };

  const renderContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, setContacts]);

  return (
    <div className={css.container}>
      <ContactForm addContact={addContacts} />
      {contacts.length > 0 ? (
        <div>
          <ContactFilter filter={filterContacts} />
          <ContactList
            renderContacts={renderContacts}
            deleteContacts={deleteContacts}
          />
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
};
