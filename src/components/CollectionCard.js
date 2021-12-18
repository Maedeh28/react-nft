import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css';

const CollectionCard = ({ id, name, traits, image }) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt='' />
            <div className='details'>
                <div className='name'>
                    {name}
                    <div className='id'>
                        .#{id}
                    </div>
                </div>
                <div className='priceContainer'>
                    <img src={weth} className='wethImg' alt='' />
                    <dir className='price'>{traits[0]?.value}</dir>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
