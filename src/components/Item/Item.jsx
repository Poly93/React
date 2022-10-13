import "../ItemListContainer/ItemListContainer";
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ titulo, precio, imagen, id}) => {
    return (   
        <div id='card' className="card"  key={id}>
            <img id='img' src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">{titulo}</h2>
                    <p className="card-text">$ {precio}</p>
                    <Link  to={`/detail/${id}`} id='botonc' className="btn btn-dark">Ver mas</Link>
                </div>
        </div>
        
    )
}

export default Item;