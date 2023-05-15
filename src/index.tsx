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
import Homepage from "./pages/Homepage";

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/" element={<ContactForm editContactId={null} />} /> */}
          <Route
            path="/contact-management"
            element={<ContactForm editContactId={null} />}
          />
          <Route path="/maps-and-graphs" element={<Dashboard />} />
        </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
