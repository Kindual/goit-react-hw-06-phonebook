import React from 'react'
import css from './Contacts.module.css'
import { PropTypes } from 'prop-types'

export default function Contacts({ deleteContact, contacts }) {
    return (
        <ul className={css.contactList}>
            {contacts.map(contact =>
                <li key={contact.id} className={css.contactItem}>
                    <p
                        className={css.contactName}> {contact.name}: {contact.number}</p>
                    <button
                        type='button'
                        onClick={() => deleteContact(contact.id)}
                        className={css.contactBtn}>Delete</button>
                </li>
            )}
        </ul>
    )
}

Contacts.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
}