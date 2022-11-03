import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import './Cart.css';
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';





export const Cart = () => {
    const { cart, showAlertRemove, getTotal, clearCart } = useContext(CartContext)

if (cart.length === 0) {
    const showingAlert = withReactContent(Swal)
        showingAlert.fire({
        position: 'center',
        icon: 'warning',
        title: <strong>Carrito Vacio</strong>,
        html: <i>No tiene productos en su carrito. Dirijase a la tienda.</i>,
        showConfirmButton: true
        })
    return(
        <div className="cartEmpty">
            <h1 id="title">Su Carrito esta Vacio</h1>
            <Link to={'/'}><button className='btn btn-primary'>Nuestros Productos y Servicios</button></Link>
        </div>
    )
}    

return(
    <div>
        <div id="contBuying">
            <p id="title">Tus Productos</p>
        </div>
            <div className="marginsBtns">
                <Link to={'/'}><button className='Space btn btn-primary'>Continuar comprando</button></Link>
                <button className='Space btn btn-primary'  onClick={() => clearCart(cart)}>Vaciar Carrito</button>
            </div>
        
        {cart.map(prod => (
            <div className="card__brand__cart" key={prod.id}>
                <div className="in__card__cart">
                    <img id='img__cart' src={prod.img} alt="Producto"/>
                    <p id="descrip__cart">Cantidad: {prod.quantity}</p>
                    <p id="descrip__cart">Subtotal: $ {prod.precio * prod.quantity}</p>
                    <button className='Space btn btn-danger' onClick={() => showAlertRemove(prod.id)}>Eliminar Producto</button>
                </div>
            </div>
        ))}
        
        <div className="GenerateBtn">
            <p>Total: $ {getTotal(cart)}</p>
            <Link to={'/Checkout'}><button className='Space btn btn-outline-dark'>Generar orden de compra</button></Link>
        </div>
    </div>
)
}
