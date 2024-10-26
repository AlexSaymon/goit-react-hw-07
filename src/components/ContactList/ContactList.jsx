import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {contacts.map((contact) => (
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
