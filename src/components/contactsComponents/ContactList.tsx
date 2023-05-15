import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { deleteContact } from "../../store/contactSlice";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import EditComponent from "./EditComponent";
import { useNavigate } from "react-router-dom";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [createContactMode, setCreateContactMode] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
    setSelectedContact(null);
  };

  const handleViewDetails = (id: string) => {
    setSelectedContact(id);
    setCreateContactMode(false);
    navigate(`/view/${id}`);
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
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      
      {!createContactMode && (
        <>
          {contacts.length === 0 ? (
            <p>No contacts found.</p>
          ) : (
            <ul className="space-y-2">
              {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className="p-4 bg-gray-100 rounded-md flex items-center justify-between transition-colors hover:bg-gray-200"
                >
                  {/* Contact item content */}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      {/* Rest of the code */}
    </div>
  );
};

export default ContactList;
