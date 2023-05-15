import React from "react";
import "./App.css";
import ContactList from "./components/contactsComponents/ContactList";
import Dashboard from "./components/dashboardComponents/Dashboard";

const App: React.FC = () => {
  return (
    <div>
      <h1>Contact Management App</h1>
      <ContactList />
      <Dashboard />
    </div>
  );
};

export default App;
