import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ id, titulo, precio, img, descripcion, category }) => {

    const productToAdd = {id, precio, category}
    console.log(productToAdd)
    
    const handleOnAdd = () => {
        console.log('se agrego al carrito')    
          }

    return (
      <div className="grilla__lubricentro">
        <div id="detalle" className="card__brand2">
          <img id='brand' src={img} alt='fotito'/> 
            <div className="btnGridPos">
              <h2 id='titulo'>{titulo}</h2>
                <p>$ {precio}</p>
                <p id='descripcion'>{descripcion}</p>
              <ItemCount onAdd={handleOnAdd}/>
            </div>
        </div>
      </div>
    )
}


export default ItemDetail