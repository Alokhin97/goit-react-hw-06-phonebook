import { useState } from 'react';
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

 const ContactForm = ({ onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameChange = e => {
    setName(e.currentTarget.value);
  };

  const numberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };
    return (
      <form className={styles.Editor} onSubmit={handleSubmit}>
        <label className={styles.Editor_label}>
          Name
          <input
            className={styles.Editor_input}
            type="text"
            name="name"
            value={name}
            onChange={nameChange}
          />
        </label>
        <label className={styles.Editor_label}>
          Number
          <input
            className={styles.Editor_input}
            type="text"
            name="number"
            value={number}
            onChange={numberChange}
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
  onSubmit: PropTypes.func.isRequired,
};