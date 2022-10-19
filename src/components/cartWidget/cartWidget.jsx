import cart from "../../../src/assets/cart.png"
import './cartWidget.css';

function Cartwidget (){
   return (
      <div>
         <img id="cart" src={cart} alt="carrito" />
         <span> 10</span>
      </div>
   );
}

export default Cartwidget;