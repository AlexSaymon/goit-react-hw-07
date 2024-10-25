import styles from "./Contact.module.css";

const Contact = ({ name, phone, onDelete }) => (
  <div className={styles.contact}>
    <p>
      {name}: {phone}
    </p>
    <button onClick={onDelete} className={styles.button}>
      Delete
    </button>
  </div>
);

export default Contact;
