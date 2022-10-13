import "./ItemDetailContainer.css";
import {getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    console.log( productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            console.log(response)
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return (
            <div className='spinner'>
                <SpinnerDotted size={50} thickness={79} speed={100} color="rgba(245, 82, 57, 1)" />
            </div>)
    }
    return (
        <div>
            <ItemDetail  {...products} />
        </div>
    )
}

export default ItemDetailContainer;