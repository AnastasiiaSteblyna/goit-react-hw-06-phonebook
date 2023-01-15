import React from 'react';
import css from '../../styles/Common.module.css';

const Notification = () => {
  return (
    <h2 className={css.notification}>
      You don't have any contacts here, add a new one...
    </h2>
  );
};

export default Notification;
