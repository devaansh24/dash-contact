import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, editContact } from "../../store/contactSlice";
import { RootState } from "../../store/store";
import ContactList from "./ContactList";

interface ContactFormProps {
  editContactId: string | null;
}



const ContactForm: React.FC<ContactFormProps> = ({ editContactId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const selectedContact = useSelector((state: RootState) =>
    state.contacts.contacts.find((contact) => contact.id === editContactId)
  );

  const isEdit = !!selectedContact;

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setEmail(selectedContact.email);
      setPhone(selectedContact.phone);
    }
  }, [selectedContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact = {
      id: isEdit ? selectedContact!.id : Date.now().toString(),
      name,
      email,
      phone,
    };

    if (isEdit) {
      dispatch(
        editContact({ id: selectedContact!.id, updatedContact: newContact })
      );
    } else {
      dispatch(addContact(newContact));
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>{isEdit ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">
            {isEdit ? "Update Contact" : "Add Contact"}
          </button>
        </div>
      </form>
      <ContactList />
    </div>
  );
};

export default ContactForm;
