import { useState } from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom';


function ItemCount ({stock=0, initial=1, onAdd}) {

    
    const [quantity, setQuantity] = useState(initial);
    
    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }
    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const[goToCheck, setGoToCheck] = useState(false)

    return (
        <div>
            <div id="contador">
                <button className="Space btn btn-outline-danger" onClick={decrease}>-</button>
                <p id='numero'>{quantity}</p>
                <button className="Space btn btn-outline-success" onClick={increase} >+</button>
                <button className="Space btn btn-success" onClick={ () => {onAdd(quantity); setGoToCheck(true)}}>Agregar al Carrito</button>
            </div>
                {goToCheck ? <Link to={'/Cart'} id='Space2' className="btn btn-warning">Finalizar Compra</Link>: false}
        </div>
    )
}

export default ItemCount;

