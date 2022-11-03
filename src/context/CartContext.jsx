import { useEffect } from "react"
import { useState, createContext } from "react"
import Swal from "sweetalert2"



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
            Swal.fire({
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                title: 'El Producto ya se encuentra en el carrito',
                html: 'Elimine el producto de su carrito, para cambiar la cantidad.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartEmpty = cart.filter(prod => prod.id !== id)
        setCart(cartEmpty)
        }
    
    const showAlertRemove = (id) => {
        Swal.fire({
            html: 'Estas seguro que quieres eliminar el Producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar', 
            confirmButtonText: 'Confirmar'
        }).then((response) => {
            if (response.isConfirmed) {
                    Swal.fire(
                    'Eliminado!',
                    'Su producto ah sido eliminado.',
                    'success'
                    )
                    removeItem(id);
                    
            }
        })
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
        <CartContext.Provider value={{ cart, addItem, showAlertRemove,removeItem, isInCart, totalQuantity, getTotal, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
