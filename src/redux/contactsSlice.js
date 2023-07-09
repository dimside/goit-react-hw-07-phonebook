import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(contact) {
        return { payload: { ...contact, id: nanoid() } };
      },
    },

    deleteContact(state, action) {
      return state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// selector
export const getContacts = state => state.contacts;
