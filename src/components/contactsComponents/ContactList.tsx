import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteContact } from '../../store/contactSlice';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleViewDetails = (id: string) => {
    setSelectedContact(id);
  };

  const handleCloseDetails = () => {
    setSelectedContact(null);
  };

  const handleEdit = (id: string) => {
    setSelectedContact(id);
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.email} - {contact.phone}
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
              <button onClick={() => handleViewDetails(contact.id)}>View Details</button>
              <button onClick={() => handleEdit(contact.id)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
      {selectedContact && (
        <div>
          <ContactForm editContactId={selectedContact} />
          <button onClick={handleCloseDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
