import './ItemListContainer.css'
import "../ItemList/ItemList";
import { getProducts } from "../../asyncMock.js";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from "../../asyncMock.js";
import { SpinnerDotted } from 'spinners-react';


const ItemListContainer = ({ greeting }) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
        useEffect(() => {
            setLoading(true)
            const asyncFunction = categoryId ? getProductsByCategory : getProducts
            asyncFunction(categoryId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }, [categoryId])

    if (loading) {
        return (
            <div className='spinner'>
                <SpinnerDotted size={50} thickness={79} speed={100} color="rgba(245, 82, 57, 1)" />
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