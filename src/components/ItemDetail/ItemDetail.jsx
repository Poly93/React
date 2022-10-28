import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';



const ItemDetail = ({ id, titulo, precio, img, descripcion, category, stock }) => {

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
      const productToAdd = {id, img, titulo, precio, category, quantity}
        const showingAlert = withReactContent(Swal)
        showingAlert.fire({
        position: 'center',
        icon: 'success',
        title: <strong>Producto Agregado!</strong>,
        html: <i>Su producto se encuentra en el Carrito</i>,
        showConfirmButton: false,
        timer: 1600
      })
        addItem(productToAdd)
}

    return (
      <div className="grilla__lubricentro">
        <div className="card__brand2">
          <img id='brand' src={img} alt='fotito'/> 
            <div className="btnGridPos">
              <h2 id='titulo'>{titulo}</h2>
                <p>$ {precio}</p>
                <p id='descripcion'>{descripcion}</p>
                <p id='stock'>Stock: {stock} unidades</p>

              <ItemCount onAdd={handleOnAdd} stock={stock}/>
              
              <div className="card__brand3">
                <Link className='links' to={'/'} ><p id='descripcion'>Listado de Productos</p></Link>
              </div>
            </div>
        </div>
      </div>
    )
}


export default ItemDetail