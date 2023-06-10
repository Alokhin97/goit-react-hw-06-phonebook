import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";

const mountContacts = [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];

export const App =()=> {
 const [contacts, setContacts] = useState(mountContacts);
  const [filter, setFilter] = useState('');

  const addContact = (task) => {
    const searchName = contacts
      .map((cont) => cont.name)
      .includes(task.name);

    if (searchName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...task,
        id: nanoid(),
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = (filter) => {
    setFilter( filter );
  };

  const getVisibleContacts = () => {
    if (filter) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
    else { 
      return contacts
    }
  };

  const removeContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

    const visibleContacts = getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={changeFilter} />
<ContactList
            contacts={visibleContacts}
            onRemoveContact={removeContact}
          />
      </div>
    );
  }
