import React from 'react'
import css from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts, selectFilter } from 'redux/contactSlice';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch()

    const filtered = React.useMemo(
        () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())),
        [filter, contacts]
    );

    return (
        <ul className={css.contactList}>
            {filtered.map(contact =>
                <li key={contact.id} className={css.contactItem}>
                    <p
                        className={css.contactName}> {contact.name}: {contact.number}</p>
                    <button
                        type='button'
                        onClick={() => dispatch(deleteContact(contact.id))}
                        className={css.contactBtn}>Delete</button>
                </li>
            )}
        </ul>
    )
}
