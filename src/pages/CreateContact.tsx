import React from "react";
import { Link } from "react-router-dom";

const CreateContact = () => {
  return (
    <div className="flex flex-col h-screen justify-center p-56">
      <div className="flex justify-center items-center mb-8">
        <Link to="/contact-management">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create Contact
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4">No Contact Found!</h1>
        <h3 className="text-lg text-gray-600">
          Click on the Create Contact button to add a new contact.
        </h3>
      </div>
    </div>
  );
};

export default CreateContact;
