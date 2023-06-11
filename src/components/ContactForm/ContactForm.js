import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import styles from "./ContactForm.module.css";

 const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();
    if (contacts.value.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    dispatch(addContact(name, number));
    return true;
  };
    return (
      <form className={styles.Editor} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.Editor_label}>
          Name
          <input
            className={styles.Editor_input}
            type="text"
            name="name"
          />
        </label>
        <label className={styles.Editor_label}>
          Number
          <input
            className={styles.Editor_input}
            type="text"
            name="number"
          />
        </label>
        <button className={styles.Editor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.object,
};