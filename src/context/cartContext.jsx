import React, { createContext, useContext } from "react"
import { useState } from "react"
import { AuthContext } from "./AuthContext"
export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const { isAuthorized } = useContext(AuthContext)
    const [count, setCount] = useState(10)
    const addtocart = () => {
        setCount(count + 1)
    }

    const buy = () => {
        if (isAuthorized) {
            console.log("can buy")
        } else {
            console.log("can not buy without login")
        }
    }


    return (
        <CartContext.Provider value={{ count, addtocart, buy }}>{children}</CartContext.Provider>
    )
}