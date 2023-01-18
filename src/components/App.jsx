import { useSelector } from 'react-redux';

import css from '../styles/Common.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <div className={css.container}>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <ContactFilter />
          <ContactList />
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
};
