import { useEffect } from "react"
import { useState, createContext } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {

        const totalQty = getQuantity();
        setTotalQuantity(totalQty);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
        } else {
            console.log('producto ya agregado.')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const removeItem = (id) => {
        const cartEmpty = cart.filter(prod => prod.id !== id)
        setCart(cartEmpty)
    }

    const getQuantity = () => {
        let Counter = 0
        cart.forEach(prod => {
            Counter += prod.quantity
        })
        return Counter;

}
    const getTotal = () => {
        let Counter = 0
        cart.forEach(prod => {
            Counter += (prod.quantity * prod.precio * 1000)
        })
        return Counter;

    }
    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart,  totalQuantity, getTotal, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
