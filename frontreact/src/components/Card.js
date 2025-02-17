import React from 'react'
import './Card.css'
/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
    const { name, picture, price, isActive } = props
    return (
        <div className={isActive === 'false' ? 'card noClick' : 'card'}>
            <div className=' card-header'>
                <p className='card-title'>{name}</p>
                <span className='material-icons card-favorite'>
                    favorite_border
                </span>
            </div>
            <img
                className={
                    isActive === 'false'
                        ? 'card-img imgBlackAndWhite'
                        : 'card-img'
                }
                src={picture}
                alt={name}
            />
            <div className='card-bottom'>
                <p className='price'>$ {price}</p>
            </div>
        </div>
    )
}
