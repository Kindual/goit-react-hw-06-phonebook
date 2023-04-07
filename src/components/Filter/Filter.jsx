import React from 'react'
import css from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, updateFilter } from 'redux/contactSlice'


export default function Filter() {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    return (
        <>
            <p className={css.label}>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                className={css.filterInput}
                onChange={e => dispatch(updateFilter(e.target.value))}
            />
        </>
    )
}
