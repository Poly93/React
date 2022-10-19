import React from 'react';
import { useState } from 'react';
import './ItemCount.css';


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
    const empty = () => {
        setQuantity(quantity === 0);
    }

    return (
        <div id="contador">
            <button className="btn btn-outline-danger" onClick={decrease}>-</button>
            <p id='numero'>{quantity}</p>
            <button  className="btn btn-outline-success" onClick={increase} >+</button>
            <br />
            <button className="btn btn-success" onClick={onAdd(quantity)}>Agregar al carrito</button>
            <button className="btn btn-danger" onClick={empty}>Eliminar</button>
        </div>
    )
}

export default ItemCount;

