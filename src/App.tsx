import React from 'react';
import "./App.css"
import ContactList from './components/contactsComponents/ContactList';
import ContactForm from './components/contactsComponents/ContactForm';
import Dashboard from './components/dashboardComponents/Dashboard';


const App: React.FC = () => {
  const editContactId = '';
  return (
    <div>
     
      <h1>Contact Management App</h1>
      <ContactForm editContactId= {editContactId} />
      <ContactList />
      <Dashboard />
      
    </div>
  );
};

export default App;
