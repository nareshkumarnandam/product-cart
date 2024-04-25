import React from 'react';
import '../App.css';

const Card = ({name, price, quatitySelected}) => {
  return (
    <div className='cart_card'>
        <p>{name}</p>
        <p>{quatitySelected} x {price}</p>
    </div>
  )
}

export default Card