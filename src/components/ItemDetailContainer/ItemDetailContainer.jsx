import {getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import "./ItemDetailContainer.css";


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    console.log( productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return (
            <div className='spinner'>
                <SpinnerDotted size={100} thickness={79} speed={100} color="rgba(245, 82, 57, 1)" />
            </div>)
    }
    return (
        <div>
            <ItemDetail  {...products} />
        </div>
    )
}

export default ItemDetailContainer;