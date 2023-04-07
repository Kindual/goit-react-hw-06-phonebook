import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Section from './Section/Section'

export default function App() {
  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts/>
      </Section>
    </div>
  )
}
