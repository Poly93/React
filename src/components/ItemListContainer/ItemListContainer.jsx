import './ItemListContainer.css'
import "../ItemList/ItemList";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { SpinnerDotted } from 'spinners-react';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index'


const ItemListContainer = ({ greeting }) => { 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    
        useEffect(() => {
            setLoading(true)
            const collectionRefDb = category ? query(collection(db, 'products'), where('category', '==', category)) : collection(db, 'products')
            getDocs(collectionRefDb).then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })   
                setProducts(productsAdapted)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }, [category])

    if (loading) {
        return (
            <div className='spinner'>
                <SpinnerDotted size={100} thickness={79} speed={100} color="rgba(245, 82, 57, 1)" />
            </div>)
    }
    return (
        <div>
            <h1 className='titulo'>{greeting}</h1>
            <div>
                <ItemList products={products} />
            </div>
        </div>
    )
}


export default ItemListContainer;