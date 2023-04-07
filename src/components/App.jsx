import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Section from './Section/Section'
import contactsJson from '../contacts.json'



export default function App() {
  const [contacts, setContacts] = useState(localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : contactsJson);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = (obj) => {
    if (contacts.findIndex(contact => contact.name.trim().toLowerCase() === obj.name.trim().toLowerCase()) >= 0) {
      return false
    }
    setContacts([...contacts, obj])
    return true
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  } 

  const updateFilter = (filtr) => {
    setFilter(filtr)
  }

  const filtered = React.useMemo(
    () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())),
    [filter, contacts]
  );

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter updateFilterState={updateFilter} filter={filter} />
        <Contacts contacts={filtered} deleteContact={deleteContact} />
      </Section>
    </div>
  )
}
