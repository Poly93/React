import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import './Cart.css';
import { Link } from 'react-router-dom'





export const Cart = () => {
    const { cart, showAlertRemove, getTotal, clearCart } = useContext(CartContext)

return(
    <div>
        <div id="contBuying">
            <p id="title">Tus Productos</p>
            <Link to={'/category/Productos'}><button className='Space btn btn-primary'>Continuar comprando</button></Link>
        </div>
        {cart.map(prod => (
            <div className="card__brand__cart" key={prod.id}>
                <div className="in__card__cart">
                    <img id='img__cart' src={prod.img} alt="Producto"/>
                    <p id="descrip__cart">Cantidad: {prod.quantity}</p>
                    <p id="descrip__cart">Subtotal: $ {prod.precio * prod.quantity * 1000}</p>
                    <button className='Space btn btn-danger' onClick={() => showAlertRemove(prod.id)}>Eliminar Producto</button>
                </div>
            </div>
        ))}
        <div className="clearBtn">
            <button className='Space btn btn-primary'  onClick={() => clearCart(cart)}>Vaciar Carrito</button>
        </div>
        <div className="GenerateBtn">
            <p>Total: $ {getTotal(cart)}</p>
            <button className='Space btn btn-outline-dark'>Generar orden de compra</button>
        </div>
    </div>
)
}
