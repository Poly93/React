import cart from "../../../src/assets/cart.png"
import './Cartwidget.css';

export default function Cartwidget (){
   return (
      <div className="cartCounter">
         <img id="cart" src={cart} alt="carrito" />
         <br />
         <span>0</span>
         </div>
   );
}