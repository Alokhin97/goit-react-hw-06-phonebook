import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';

const ContactList = ({ contact }) => {
    const contacts = useSelector(getContacts);
  const { input } = useSelector(getFilter);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.value.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );
  return (<ul className={styles.List}>
    {visibleContacts.map((contact) => (
      <li className = {styles.List_item}key={contact.id}>
    <Contact contact={contact} />
      </li>
    ))}
  </ul>
)};

ContactList.propTypes = {
  contact: PropTypes.object,
  contacts: PropTypes.object,
  input: PropTypes.string,
};
export default ContactList;