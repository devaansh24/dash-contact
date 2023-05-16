import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { deleteContact } from "../../store/contactSlice";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";


const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [createContactMode, setCreateContactMode] = useState(false);

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
    setSelectedContact(null);
  };

  const handleViewDetails = (id: string) => {
    setSelectedContact(id);
    setCreateContactMode(false);
  };

  const handleCloseDetails = () => {
    setSelectedContact(null);
    setCreateContactMode(false);
  };

  const handleCreateContact = () => {
    setSelectedContact(null);
    setCreateContactMode(true);
  };

  const handleEditContact = (id: string) => {
    navigate(`/EditComponent/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="p-4 bg-gray-100 rounded-md flex items-center justify-between transition-colors hover:bg-gray-200"
            >
              <div>
                <p className="text-lg font-semibold">{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
              <div className="p-2 m-2">
                <button
                  className="px-4 py-2 mr-2 bg-red-500 text-white rounded transition-colors hover:bg-red-600"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 mr-2 bg-blue-500 text-white rounded transition-colors hover:bg-blue-600"
                  onClick={() => handleViewDetails(contact.id)}
                >
                  View Details
                </button>
                <button
                  className="px-4 py-2 mr-2 bg-yellow-500 text-white rounded transition-colors hover:bg-yellow-600"
                  onClick={() => handleEditContact(contact.id)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedContact && !createContactMode && (
        <div className="mt-4">
          <ContactDetails contactId={selectedContact} />
          <div className="flex space-x-2 mt-2">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded transition-colors hover:bg-gray-500"
              onClick={handleCloseDetails}
            >
              Close Details
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded transition-colors hover:bg-green-600"
              onClick={handleCreateContact}
              disabled={createContactMode}
            >
              Create New Contact
            </button>
          </div>
        </div>
      )}
      {createContactMode && (
        <div className="mt-4 m-4">
          <ContactForm editContactId={null} />
          <div className="flex space-x-2 mt-2">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded transition-colors hover:bg-gray-500"
              onClick={handleCloseDetails}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;

