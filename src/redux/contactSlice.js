// import contactsJson from '../contacts.json'
const { createSlice } = require("@reduxjs/toolkit");


export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        updateFilter: (state, action) => {
            state.filter = action.payload
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { addContact, updateFilter, deleteContact } = contactSlice.actions

export const selectContacts = (state) => state.contact.contacts;
export const selectFilter = (state) => state.contact.filter;
export default contactSlice.reducer;

// localStorage.getItem('contacts')
//         ? JSON.parse(localStorage.getItem('contacts'))
//             : contactsJson