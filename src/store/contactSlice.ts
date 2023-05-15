import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (
      state,
      action: PayloadAction<{ id: string; updatedContact: Contact }>
    ) => {
      const { id, updatedContact } = action.payload;
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === id
      );
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = {
          ...state.contacts[contactIndex],
          ...updatedContact,
        };
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
export type RootState = ReturnType<typeof contactSlice.reducer>;
