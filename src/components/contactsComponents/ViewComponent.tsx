import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
// import { deleteContact } from "../../store/contactSlice";
import { Link } from "react-router-dom";

const ViewDetails: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  // const handleDeleteContact = (id: string) => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <Link to="/contact-management">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mb-4">
          Create New Contact
        </button>
      </Link>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Phone</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="border border-gray-400 px-4 py-2">
                {contact.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {contact.email}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {contact.phone}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <Link to={`/edit/${contact.id}`}>
                  <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">
                    Edit
                  </button>
                </Link>
                {/* <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDetails;
