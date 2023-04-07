import React from 'react'
import css from './Filter.module.css'
import { PropTypes } from 'prop-types'


export default function Filter({ updateFilterState, filter }) {
    return (
        <>
            <p className={css.label}>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                className={css.filterInput}
                onChange={e => updateFilterState(e.target.value)}
            />
        </>
    )
}

Filter.propTypes = {
    updateFilterState: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}