import React, { useState, useEffect } from 'react'
import { Chart } from '../components/Chart'
import { FormattedMessage } from 'react-intl'

export const Report = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const link = 'http://localhost:3001/api/products'
        fetch(link)
            .then((r) => r.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <section id='report'>
            <div className='report-container'>
                <h1>
                    <FormattedMessage id='stockInventory'></FormattedMessage>
                </h1>
                <Chart data={products} />
            </div>
        </section>
    )
}
