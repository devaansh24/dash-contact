import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { updateContact } from "../../store/contactSlice";
import { useNavigate } from "react-router-dom";

interface EditContactProps {
  contactId: string;
}

const EditContact: React.FC<EditContactProps> = ({ contactId }) => {
  // Fetch the contact details from the Redux store
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((c) => c.id === contactId)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phone, setPhone] = useState(contact?.phone || "");

  // Handle the update of the contact
  const handleUpdateContact = () => {
    const updatedContact = {
      id: contactId,
      name,
      email,
      phone,
    };
    dispatch(updateContact({ id: contactId, updatedContact }));
    navigate(`/view/${contactId}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
      <form>
        <div className="mb-4">
          <label className="block text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="border rounded-md p-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded-md p-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold" htmlFor="phone">
            Phone
          </label>
          <input
            className="border rounded-md p-2"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          type="button"
          onClick={handleUpdateContact}
        >
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
