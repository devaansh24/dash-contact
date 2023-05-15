import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Contact } from "../../store/contactSlice";

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
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
      <div className="bg-gray-100 rounded-md p-4">
        <p className="text-lg mb-2">
          <span className="font-semibold">Name:</span> {contact.name}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Email:</span> {contact.email}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Phone:</span> {contact.phone}
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
