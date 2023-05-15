import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import store from "./store/store";
import "./index.css";
import ContactList from "./components/contactsComponents/ContactList";
import ContactForm from "./components/contactsComponents/ContactForm";
import Dashboard from "./components/dashboardComponents/Dashboard";
import ViewDetails from "./components/contactsComponents/ViewComponent";
import NavBar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import EditComponent from "./components/contactsComponents/EditComponent";

const queryClient = new QueryClient();

const EditContactRoute = () => {
  const { id } = useParams<{ id: string }>();

  return <EditComponent contactId={id || ""} />;
};

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex">
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/contact-management"
              element={<ContactForm editContactId={null} />}
            />
            <Route path="/edit/:id" element={<EditContactRoute />} />
            <Route path="/view/:id" element={<ViewDetails />} />
            <Route path="/maps-and-graphs" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
