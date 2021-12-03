import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { FormattedMessage } from 'react-intl'

export const Home = ({ searchKey }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const link = `http://localhost:3001/api/products?q=${searchKey}`
        fetch(link)
            .then((r) => r.json())
            .then((data) => setProducts(data))
    }, [searchKey])

    return (
        <section id='home'>
            <div className='home-container'>
                <h1>
                    <FormattedMessage id='gallery' />
                </h1>
                <div className='home-card'>
                    {products.map((el, i) => {
                        return (
                            <Card
                                name={el.name}
                                picture={el.picture}
                                price={el.price}
                                isActive={el.isActive}
                                key={i}
                            ></Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
