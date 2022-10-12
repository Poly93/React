import cart from "../../../src/assets/cart.png"
import './cartWidget.css';

export default function Cartwidget (){
   return (
      <div>
         <img id="cart" src={cart} alt="carrito" />
         <br />
         <span>0</span>
         </div>
   );
}