import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./store/store";
import "./index.css";
import ContactList from "./components/contactsComponents/ContactList";
import ContactForm from "./components/contactsComponents/ContactForm";
import Dashboard from "./components/dashboardComponents/Dashboard";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <div>
        <h1>Contact Management App</h1>
        <ContactForm editContactId={null} />
        <ContactList />
        <Dashboard />
      </div>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);
