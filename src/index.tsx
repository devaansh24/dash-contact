import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store/store";
import "./index.css";
import ContactList from "./components/contactsComponents/ContactList";
import ContactForm from "./components/contactsComponents/ContactForm";
import Dashboard from "./components/dashboardComponents/Dashboard";
import NavBar from "./pages/Navbar";

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContactForm editContactId={null} />} />
          <Route
            path="/contact-management"
            element={<ContactForm editContactId={null} />}
          />
          <Route path="/maps-and-graphs" element={<Dashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
