import { createSlice } from '@reduxjs/toolkit';

export const myContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    remove(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
export const { addContact, remove } = myContactSlice.actions;
