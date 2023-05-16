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
  name: 'contacts', // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload); // Add a new contact to the contacts array
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      ); // Remove a contact from the contacts array based on the given ID
    },
    updateContact: (
      state,
      action: PayloadAction<{ id: string; updatedContact: Contact }>
    ) => {
      const { id, updatedContact } = action.payload;
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === id
      ); // Find the index of the contact to be updated

      if (contactIndex !== -1) {
        // If the contact is found
        state.contacts[contactIndex] = {
          ...state.contacts[contactIndex],
          ...updatedContact,
        }; // Update the contact with the new information
      } else {
        throw new Error(`Contact with id ${id} not found.`);
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } = contactSlice.actions; // Export the action creators
export default contactSlice.reducer; // Export the reducer
export type RootState = ReturnType<typeof contactSlice.reducer>; // Define the RootState type for the reducer slice

