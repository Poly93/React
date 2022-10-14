import "../ItemListContainer/ItemListContainer";
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ titulo, precio, imagen, id}) => {
    return (
        <div className="grilla__lubricentro">   
        <div id="card" className="card__brand" key={id}>
            <img id='img' src={imagen} alt="..."/>
                <div className="btnGridPos">
                    <h2 id="h2">{titulo}</h2>
                    <p>$ {precio}</p>
                    <Link  to={`/details/${id}`} id='botonc' className="btn btn-dark">Ver detalles</Link>
                </div>
        </div>
        </div>
    )
}

export default Item;