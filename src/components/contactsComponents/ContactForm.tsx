



import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, updateContact } from "../../store/contactSlice";
import { RootState } from "../../store/store";
import ContactList from "./ContactList";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  editContactId: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ editContactId }) => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  // Get the selected contact from the Redux store based on the editContactId
  const selectedContact = useSelector((state: RootState) =>
    state.contacts.contacts.find((contact) => contact.id === editContactId)
  );

  // Check if the form is in edit mode
  const isEdit = !!selectedContact;

  useEffect(() => {
    // Populate the form fields with selectedContact data when in edit mode
    if (selectedContact) {
      setName(selectedContact.name);
      setEmail(selectedContact.email);
      setPhone(selectedContact.phone);
    }
  }, [selectedContact]);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return; // Do not proceed if any field is empty
    }

    // Create a new contact object
    const newContact = {
      id: isEdit ? selectedContact!.id : Date.now().toString(),
      name,
      email,
      phone,
    };

    if (isEdit) {
      // Dispatch an action to update the contact in the Redux store
      dispatch(
        updateContact({ id: selectedContact!.id, updatedContact: newContact })
      );
    } else {
      // Dispatch an action to add the contact to the Redux store
      dispatch(addContact(newContact));
    }

    // Clear the form fields
    setName("");
    setEmail("");
    setPhone("");

    // Navigate to the ViewComponent with the new contact's ID
    navigate(`/view/${newContact.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6 flex justify-center items-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isEdit ? "Edit Contact" : "Add Contact"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded w-full"
            />
          </div>
          <div>
            {" "}
            <label htmlFor="email" className="block font-semibold">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold">
              Phone:
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded w-full"
            >
              {isEdit ? "Update Contact" : "Add Contact"}
            </button>
          </div>
        </form>
        <ContactList />
      </div>
    </div>
  );
};

export default ContactForm;

