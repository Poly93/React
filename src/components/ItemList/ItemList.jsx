import Item from "../Item/Item.jsx";
import "../ItemListContainer/ItemListContainer.jsx";
import "./ItemList.css"

const ItemList = ({ products }) => {
    
    return (
        <div id='grilla'>
            { products.map(prod => <Item key={prod.id} id={prod.id} titulo={prod.titulo} precio={prod.precio} imagen={prod.img} category={prod.category} stock={prod.stock}/>)}
        </div>
    )
}

export default ItemList;