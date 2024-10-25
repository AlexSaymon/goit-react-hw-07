import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </div>
  );
};

export default ContactList;