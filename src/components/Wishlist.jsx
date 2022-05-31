import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const Wishlist = () => {
    const { count } = useContext(CartContext)
    return (
        <div>Wishlist:-

            {count}
        </div>
    )
}
