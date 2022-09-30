import cart from "../../assets/cart.png";
import './cartWidget.css';

export default function cartWidget (){
   return (
      <div className="cartCounter">
         <img id="cart" src={cart} alt="carrito" />
         <br />
         <span>0</span>
         </div>
   );
}