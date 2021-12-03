import React from 'react'
import { LOCALES } from '../i18n/locales'

export const I18nSelect = (props) => {
    const { setLg } = props
    return (
        <select
            onChange={(e) => {
                setLg(e.target.value)
            }}
        >
            <option value={LOCALES.SPANISH}>Spanish</option>
            <option value={LOCALES.ENGLISH}>English</option>
        </select>
    )
}
