import React from 'react';
import { useState } from 'react';
import './ItemCount.css';


let stock = 10;

function ItemCount ({onAdd}) {
    
    const [quantity, setQuantity] = useState(0);
    
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
    const empty = () => {
        setQuantity(quantity === 0);
    }

    return (
        <div id="contador">
            <button className="btn btn-outline-danger" onClick={decrease}>-</button>
            <p id='numero'>{quantity}</p>
            <button  className="btn btn-outline-success" onClick={increase} >+</button>
            <br />
            <button className="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
            <button className="btn btn-danger" onClick={empty}>Eliminar</button>
        </div>
    )
}

export default ItemCount;

