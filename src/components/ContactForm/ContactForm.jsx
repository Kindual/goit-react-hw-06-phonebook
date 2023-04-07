import React, { useState } from 'react'
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts} from 'redux/contactSlice';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const onSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: name.trim(),
            number: number.trim(),
            id: `id-${nanoid()}`
        }
        
        if (contacts.findIndex(cont => cont.name.trim().toLowerCase() === contact.name.trim().toLowerCase()) >= 0) {
            return alert(`${name} is already in contacts`)
        }
        dispatch(addContact(contact))

        setName('')
        setNumber('')
    }

    return (
        <div>
            <form action="" className={css.form} onSubmit={onSubmit}>
                <label>Name</label>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Number</label>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <button type='submit' className={css.btn}>Add contact</button>
            </form>
        </div>
    )
}
