import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import "./ItemDetailContainer.css";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {
            const docRefDb = doc(db, 'products', productId)
            getDoc(docRefDb).then(response =>{
                const data = response.data()
                const productAdapted = { id: response.id, ...data}
                setProducts(productAdapted)
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