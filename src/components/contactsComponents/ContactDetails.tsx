import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Contact } from '../../store/contactSlice';

interface ContactDetailsProps {
  contactId: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contactId }) => {
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((c) => c.id === contactId)
  );

  if (!contact) {
    return <p>Contact not found.</p>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactDetails;
