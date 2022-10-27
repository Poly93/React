import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import './Cart.css';

export const Cart = () => {
    const { cart, removeItem, getTotal, clearCart } = useContext(CartContext)

return(
    <div className="card__brand">
        {cart.map(prod => (
            <div className="btnGridPos">
                <h5>Productooo{prod.titulo}</h5>
                {/* <img src={prod.img} alt="Producto"/> */}
                <ul>
                    <li>Subtotal: $ {prod.precio * prod.quantity * 1000}</li>
                    <li>Cantidad: {prod.quantity}</li>
                    <button className='Space btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                </ul>
            </div>
        ))}
        <p>Total: $ {getTotal(cart)}</p>
        <button className='Space btn btn-outline-dark'>Generar orden de compra</button>
        <button className='Space btn btn-primary'  onClick={() => clearCart(cart)}>Vaciar Carrito</button>
    </div>
)
}
