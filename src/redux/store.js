import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};
// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
const rootReducer = (state = initialState, action) => {
  return state;
};
export const store = configureStore(rootReducer);
