import React from "react";
import { Link } from "react-router-dom";
const CreateContact = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex justify-center items-center ">
        <Link to="/contact-management">
          <button>Create Contact</button>
        </Link>
      </div>
      <div className="flex justify-center items-center ">
        <h1>No Contact Found!</h1>
        <h3>Click on Create Contact button</h3>
      </div>
    </div>
  );
};

export default CreateContact;
