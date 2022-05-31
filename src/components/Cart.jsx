import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const Cart = () => {

    const { addtocart } = useContext(CartContext)

    return (
        <div>Cart

            <button onClick={addtocart}>Add to cart</button>
        </div>
    )
}
