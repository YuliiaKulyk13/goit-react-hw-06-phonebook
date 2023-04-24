import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialState,
    filter: '',
  },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: { ...payload, id: nanoid() },
        };
      },
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(contact => {
        return contact.id !== action.payload.id;
      });
    },
    filterContacts(state, action) {
      state.filters = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContacts, deleteContacts, filterContacts } =
  contactSlice.actions;

// export default counterSlice.reducer;
