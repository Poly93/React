import cart from "../../../src/assets/cart.png"
import './cartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


function Cartwidget (){
   const { totalQuantity } = useContext(CartContext)
   const quantity = totalQuantity;
   return (
      <div>
         <img id="cart" src={cart} alt="carrito" />
         <span> {quantity}</span>
      </div>
   );
}

export default Cartwidget;